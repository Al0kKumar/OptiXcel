import { Request, Response, NextFunction } from "express";
import { uploadToCloudinary } from "../config/cloudinary";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

export const uploadFile = async (
  req: MulterRequest, 
  res: Response, 
  next: NextFunction
): Promise<void> => {  // 👈 Explicitly define return type as void
  try {
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    const uploadedUrl = await uploadToCloudinary(req.file.path);
    if (!uploadedUrl) {
      res.status(500).json({ error: "Upload failed" });
      return;
    }

    res.status(200).json({ url: uploadedUrl });
  } catch (error) {
    next(error);
  }
};
