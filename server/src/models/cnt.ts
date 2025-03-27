import mongoose, { Schema } from "mongoose";

const CntSchema = new Schema({
  ImageConverted: {
    type: Number,
    default: 0,
  },
  ImagesConverted: {
    type: Number,
    default: 0,
  },
});

// This prevents model overwrite issues in development
const CntModel = mongoose.models.Cnt || mongoose.model("Cnt", CntSchema);

export default CntModel;
