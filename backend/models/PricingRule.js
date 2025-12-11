import mongoose from "mongoose";

const PricingRuleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },         // Weekend, Peak Hours, Indoor Premium
    isActive: { type: Boolean, default: true },

    // Rule Conditions
    daysOfWeek: [{ type: Number }],                 // [0,6] for weekend
    startTime: { type: String },                    // "18:00"
    endTime: { type: String },                      // "21:00"
    courtType: {
      type: String,
      enum: ["indoor", "outdoor", "any"],
      default: "any"
    },

    // Rule Value
    ruleType: {
      type: String,
      enum: ["multiplier", "flat_add"],
      required: true
    },

    value: { type: Number, required: true }         // 1.5 for multiplier, 100 for flat_add
  },
  { timestamps: true }
);

export default mongoose.model("PricingRule", PricingRuleSchema);
