import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    originalName: { type: String, required: true },
    format: { type: String, required: true }, // e.g., "png", "jpeg"
    size: { type: Number, required: true }, // In bytes
    url: { type: String, required: true }, // Link to stored file
    compressedUrl: { type: String }, // If compression is done
    uploadedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Image", ImageSchema);
