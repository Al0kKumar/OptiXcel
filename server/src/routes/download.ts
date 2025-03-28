import express, { Request, Response } from "express";
import fetch from "node-fetch"; // Ensure node-fetch is installed

const router = express.Router();

router.get("/download", async (req: Request, res: Response): Promise<void> => {
  // Ensure the url parameter is provided and is a string
  const { url } = req.query;
  const imageResponse = await fetch(decodeURIComponent(url as string));
  const buffer = await imageResponse.arrayBuffer();

  res.setHeader("Content-Type", "image/jpeg"); // Adjust based on your image type
  res.setHeader("Content-Disposition", "attachment; filename=downloaded-image.jpg");
  res.send(Buffer.from(buffer));
});

export default router;
