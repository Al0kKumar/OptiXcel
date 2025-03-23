import { Response, NextFunction } from "express";


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
        return res.status(400).json({ error: "No file uploaded" });
      }
  
      const outputPath = path.join(__dirname, "../uploads/compressed-" + Date.now() + ".jpg");
  
      await sharp(req.file.path)
        .jpeg({ quality: 70 }) // Convert to JPEG & set quality
        .toFile(outputPath);
  
      fs.unlinkSync(req.file.path); // Remove original file
  
      res.status(200).json({ message: "Image compressed successfully", path: outputPath });
    } catch (error) {
      next(error);
    }
  };
  