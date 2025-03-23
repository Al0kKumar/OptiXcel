import express from "express";
import { upload } from "../config/cloudinary"; // Multer config
import { compressImage } from "../controllers/imageCompress";

const router = express.Router();

router.post("/compress", upload.single("file"), compressImage);

export default router;
