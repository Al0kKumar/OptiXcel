import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {

    try {
        const con = await mongoose.connect(process.env.MONGO_URL as string);
        console.log("db connected");
        
        
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

