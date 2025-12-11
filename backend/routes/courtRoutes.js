import express from "express";
import Court from "../models/Court.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const court = await Court.create(req.body);
    res.status(201).json(court);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const courts = await Court.find();
  res.json(courts);
});

export default router;
