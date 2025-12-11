import mongoose from "mongoose";

const CourtSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },          // Court 1, Court 2...
    type: { type: String, enum: ["indoor", "outdoor"], required: true },
    basePricePerHour: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Court", CourtSchema);
