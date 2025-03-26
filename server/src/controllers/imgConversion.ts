import { Request, Response, NextFunction } from "express";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import cloudinary from "../config/cloudinary.js"; // Ensure correct import with file extension
import fsExtra from "fs-extra";
import { fileURLToPath } from "url";

// For ES modules, define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

// Helper function for file deletion (same as in compressImage)
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

export const convertImage = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    // Validate target format from request body
    const targetFormat = req.body.targetFormat?.toLowerCase();
    if (!targetFormat || !["png", "jpeg", "jpg", "webp"].includes(targetFormat)) {
      res.status(400).json({ error: "Invalid or unsupported target format. Use png, jpeg, jpg, or webp." });
      return;
    }

    // Ensure the uploads directory exists
    const uploadDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Build the output file path for the converted image
    const convertedImagePath = path.join(uploadDir, `converted-${Date.now()}.${targetFormat}`);

    console.log("Original file path:", req.file.path);
    console.log("Converted file path:", convertedImagePath);

    // Convert the image using Sharp
    const sharpInstance = sharp(req.file.path);

    if (targetFormat === "jpeg" || targetFormat === "jpg") {
      await sharpInstance.jpeg({ quality: 80 }).toFile(convertedImagePath);
    } else if (targetFormat === "png") {
      await sharpInstance.png({ quality: 80 }).toFile(convertedImagePath);
    } else if (targetFormat === "webp") {
      await sharpInstance.webp({ quality: 80 }).toFile(convertedImagePath);
    } else {
      res.status(400).json({ error: "Unsupported conversion format" });
      return;
    }

    // Upload the converted image to Cloudinary
    const result = await cloudinary.uploader.upload(convertedImagePath, {
      folder: "converted-images",
    });

    // Standardize the original file path for deletion
    const originalImagePath = path.join(uploadDir, path.basename(req.file.path));

    // Delete both files locally after a short delay
    setTimeout(() => deleteFileGracefully(originalImagePath, 3), 5000);
    setTimeout(() => deleteFileGracefully(convertedImagePath, 3), 5000);

    res.status(200).json({
      message: "Image converted and uploaded successfully",
      url: result.secure_url,
    });
  } catch (error) {
    next(error);
  }
};
