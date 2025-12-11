import express from "express";
import Booking from "../models/Booking.js";
import { isCourtFree, isCoachFree, hasEquipmentStock } from "../helpers/availability.js";
import { calculatePrice } from "../helpers/pricing.js";

const router = express.Router();

// ------------------------
// PRICE PREVIEW ROUTE
// ------------------------
router.post("/preview", async (req, res) => {
  try {
    const { court, startTime, endTime, rackets, shoes, coach } = req.body;

    const start = new Date(startTime);
    const end = new Date(endTime);

    const pricingBreakdown = await calculatePrice({
      courtId: court,
      coachId: coach,
      start,
      end,
      rackets,
      shoes
    });

    res.json(pricingBreakdown);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ------------------------
// CREATE BOOKING ROUTE
// ------------------------
router.post("/", async (req, res) => {
  try {
    const { user, court, startTime, endTime, rackets, shoes, coach } = req.body;

    const start = new Date(startTime);
    const end = new Date(endTime);

    const courtFree = await isCourtFree(court, start, end);
    if (!courtFree) return res.status(400).json({ error: "Court not available" });

    const coachFree = await isCoachFree(coach, start, end);
    if (!coachFree) return res.status(400).json({ error: "Coach not available" });

    const racketsOk = await hasEquipmentStock("racket", rackets, start, end);
    if (!racketsOk) return res.status(400).json({ error: "Not enough rackets" });

    const shoesOk = await hasEquipmentStock("shoes", shoes, start, end);
    if (!shoesOk) return res.status(400).json({ error: "Not enough shoes" });

    const pricingBreakdown = await calculatePrice({
      courtId: court,
      coachId: coach,
      start,
      end,
      rackets,
      shoes
    });

    const booking = await Booking.create({
      user,
      court,
      startTime: start,
      endTime: end,
      resources: { rackets, shoes, coach },
      pricingBreakdown
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

