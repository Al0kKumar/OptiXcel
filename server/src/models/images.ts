import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    originalName: { 
        type: String, 
        required: true 
    },
    format: { 
        type: String, 
        required: true 
    }, // "jpg", "png", etc.
    size: { 
        type: Number, 
        required: true 
    }, // In bytes
    url: { 
        type: String, 
        required: true 
    }, // Link to original file
    convertedFormat: { 
        type: String 
    }, // "webp", "jpeg", etc.
    convertedUrl: { 
        type: String 
    }, // Link to converted file
    compressionLevel: { 
        type: Number 
    }, // % of compression
    resizeOptions: { 
        type: Object 
    }, // { width: 500, height: 500 }
    uploadedAt: { 
        type: Date, 
        default: Date.now 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Image", ImageSchema);
