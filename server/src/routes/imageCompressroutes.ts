import express from "express";
import multer from "multer";
import { compressImage } from "../controllers/imageCompress";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/compress", upload.single("image"), compressImage);

export default router;
