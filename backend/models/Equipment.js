import mongoose from "mongoose";

const EquipmentSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["racket", "shoes"], required: true },
    totalStock: { type: Number, required: true },
    pricePerUnit: { type: Number, required: true },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Equipment", EquipmentSchema);
