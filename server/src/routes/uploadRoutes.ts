import express from "express";
import { upload} from "../config/cloudinary";
import { uploadFile } from "../controllers/upload";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);

export default router;
