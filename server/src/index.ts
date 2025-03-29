import express from "express";
import dotenv from "dotenv";
import imageRoutes from "./routes/imgRoutes.js"; 
import { connectDb } from "./utils/connect.js";
import download from "./routes/download.js"
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());



app.use(cors({ origin: "https://opti-xcel.vercel.app" }));


connectDb();
// Routes
app.use("/api/image", imageRoutes);

app.use("/api",download);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

