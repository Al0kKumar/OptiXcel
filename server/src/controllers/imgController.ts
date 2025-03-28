import { Request, Response, NextFunction } from "express";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import cloudinary from "../config/cloudinary.js"; // Ensure correct import with file extension
import fsExtra from "fs-extra";
import { fileURLToPath } from "url";
import CntModel from "../models/cnt.js";

// For ES modules, define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

// Helper function for file deletion with retry mechanism and graceful handling
const deleteFileGracefully = async (filePath: string, retries: number = 3): Promise<void> => {
  try {
    await fsExtra.remove(filePath);
    console.log(`File deleted successfully: ${filePath}`);
  } catch (err: any) {
    if (err.code === "EPERM" && retries > 0) {
      console.error(`Permission error. Retrying after 5 seconds... [${retries}]`);
      setTimeout(() => deleteFileGracefully(filePath, retries - 1), 5000);
    } else if (err.code === "EPERM") {
      console.error("File is locked, attempting rename workaround...");
      try {
        const tempPath = `${filePath}.tmp`;
        fs.renameSync(filePath, tempPath);
        await fsExtra.remove(tempPath);
        console.log("File renamed and deleted successfully.");
      } catch (renameError) {
        console.error("Rename workaround failed:", renameError);
      }
    } else {
      console.error(`Failed to delete file after retries: ${filePath}`, err);
    }
  }
};

export const compressImage = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    const uploadDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const mimeType = req.file.mimetype; // e.g., "image/png"
    const compressedImagePath = path.join(
      uploadDir,
      `compressed-${Date.now()}.${mimeType.split("/")[1]}` // "png", "jpeg", etc.
    );

    console.log("Original file path:", req.file.path);
    console.log("Compressed file path:", compressedImagePath);
    console.log("MIME type:", mimeType);

    const sharpInstance = sharp(req.file.path);
    if (mimeType === "image/png") {
      await sharpInstance.png({ quality: 70 }).toFile(compressedImagePath);
    } else if (mimeType === "image/jpeg") {
      await sharpInstance.jpeg({ quality: 70 }).toFile(compressedImagePath);
    } else if (mimeType === "image/webp") {
      await sharpInstance.webp({ quality: 70 }).toFile(compressedImagePath);
    } else {
      res.status(400).json({ error: `Unsupported file format: ${mimeType}` });
      return;
    }

    const result = await cloudinary.uploader.upload(compressedImagePath, {
      folder: "compressed-images",
    });

    if (result) {
      await CntModel.findOneAndUpdate(
        {},
        { $inc: { ImageCompressed: 1 } },
        { new: true, upsert: true }
      );
    }

    const originalImagePath = path.join(uploadDir, path.basename(req.file.path));
    setTimeout(() => deleteFileGracefully(originalImagePath, 3), 5000);
    setTimeout(() => deleteFileGracefully(compressedImagePath, 3), 5000);

    res.status(200).json({
      message: "Image compressed and uploaded successfully",
      url: result.secure_url,
    });
  } catch (error) {
    next(error);
  }
};