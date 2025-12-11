import express from "express";
import PricingRule from "../models/PricingRule.js";

const router = express.Router();

// Add a pricing rule
router.post("/", async (req, res) => {
  try {
    const rule = await PricingRule.create(req.body);
    res.status(201).json(rule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all pricing rules
router.get("/", async (req, res) => {
  const rules = await PricingRule.find();
  res.json(rules);
});

export default router;
