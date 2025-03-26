import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import imageRoutes from "./routes/imgRoutes.js"; 
import imgConvert from "./routes/imgRoutes.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/image", imageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

