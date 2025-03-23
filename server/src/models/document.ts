import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema(
  {
    originalName: { 
        type: String, 
        required: true 
    },
    format: { 
        type: String, 
        required: true 
    }, // "pdf", "docx", "txt"
    size: { 
        type: Number, 
        required: true 
    },
    url: { 
        type: String, 
        required: true 
    }, // Link to original file
    convertedFormat: {
        type: String 
    }, // "pdf", "docx", etc.
    convertedUrl: { 
        type: String
    }, // Link to converted file
    uploadedAt: { 
        type: Date, 
        default: Date.now 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Document", DocumentSchema);
