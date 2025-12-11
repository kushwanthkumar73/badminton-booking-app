import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },   // For now store userId as string. Later replace with Auth if needed.

    court: { type: mongoose.Schema.Types.ObjectId, ref: "Court", required: true },

    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },

    resources: {
      rackets: { type: Number, default: 0 },
      shoes: { type: Number, default: 0 },
      coach: { type: mongoose.Schema.Types.ObjectId, ref: "Coach", default: null }
    },

    status: {
      type: String,
      enum: ["confirmed", "cancelled", "waitlist"],
      default: "confirmed"
    },

    pricingBreakdown: {
      basePrice: Number,
      durationHours: Number,
      equipmentFee: Number,
      coachFee: Number,
      rulesApplied: [String],
      rulesFee: Number,
      total: Number
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
