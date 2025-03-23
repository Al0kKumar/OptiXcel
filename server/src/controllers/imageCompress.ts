import { Request, Response, NextFunction } from "express";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { uploadToCloudinary } from "../config/cloudinary"; // Your Cloudinary upload function

// Extend Request with Multer file type
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

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

    // Ensure the uploads directory exists
    const uploadDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Define output path
    const compressedImagePath = path.join(uploadDir, `compressed-${Date.now()}.jpg`);

    // Compress image with Sharp
    await sharp(req.file.path)
      .jpeg({ quality: 70 }) // Reduce size while maintaining quality
      .toFile(compressedImagePath);

    // Upload compressed image to Cloudinary
    const cloudinaryUrl = await uploadToCloudinary(compressedImagePath);

    if (!cloudinaryUrl) {
      res.status(500).json({ error: "Upload to Cloudinary failed" });
      return;
    }

    // Delete both original & compressed files locally after upload
    fs.unlink(req.file.path, (err) => err && console.error("Error deleting original file:", err));
    fs.unlink(compressedImagePath, (err) => err && console.error("Error deleting compressed file:", err));

    res.status(200).json({
      message: "Image compressed & uploaded successfully",
      url: cloudinaryUrl, // Return Cloudinary URL
    });

  } catch (error) {
    next(error);
  }
};
