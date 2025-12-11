import mongoose from "mongoose";

const CoachSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    hourlyRate: { type: Number, required: true },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Coach", CoachSchema);
