import express from "express";
import Equipment from "../models/Equipment.js";

const router = express.Router();

// Add equipment
router.post("/", async (req, res) => {
  try {
    const equipment = await Equipment.create(req.body);
    res.status(201).json(equipment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all equipment
router.get("/", async (req, res) => {
  const items = await Equipment.find();
  res.json(items);
});

export default router;
