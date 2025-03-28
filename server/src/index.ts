import express from "express";
import dotenv from "dotenv";
import imageRoutes from "./routes/imgRoutes.js"; 
import { connectDb } from "./utils/connect.js";
import download from "./routes/download.js"
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());



const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend's URL
  methods: ["GET", "POST"], // Allow necessary methods
  allowedHeaders: ["Content-Type"], // Allow necessary headers
};

app.use(cors(corsOptions));

connectDb();
// Routes
app.use("/api/image", imageRoutes);

app.use("/api",download);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

