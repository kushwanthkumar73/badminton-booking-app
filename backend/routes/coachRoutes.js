import express from "express";
import Coach from "../models/Coach.js";

const router = express.Router();

// Add coach
router.post("/", async (req, res) => {
  try {
    const coach = await Coach.create(req.body);
    res.status(201).json(coach);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all coaches
router.get("/", async (req, res) => {
  const coaches = await Coach.find();
  res.json(coaches);
});

export default router;
