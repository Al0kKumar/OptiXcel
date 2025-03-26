import express from "express";
import multer from "multer";
import { compressImage } from "../controllers/imgController.js";
import { convertImage } from "../controllers/imgConversion.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/compress", upload.single("file"), compressImage as express.RequestHandler);

router.post("/convert", upload.single("file"),  convertImage);

export default router;
