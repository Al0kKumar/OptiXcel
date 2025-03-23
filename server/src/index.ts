import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import uploadRoutes from './routes/uploadRoutes'

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', uploadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
