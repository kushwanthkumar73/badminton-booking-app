import Booking from "../models/Booking.js";
import Equipment from "../models/Equipment.js";


// ⛔ Check if court is booked
export async function isCourtFree(courtId, start, end) {
  const conflict = await Booking.findOne({
    court: courtId,
    status: "confirmed",
    $or: [
      { startTime: { $lt: end, $gte: start } },
      { endTime: { $gt: start, $lte: end } },
      { startTime: { $lte: start }, endTime: { $gte: end } }
    ]
  });

  return !conflict; // true means free
}


// ⛔ Check if coach is free
export async function isCoachFree(coachId, start, end) {
  if (!coachId) return true;

  const conflict = await Booking.findOne({
    "resources.coach": coachId,
    status: "confirmed",
    $or: [
      { startTime: { $lt: end, $gte: start } },
      { endTime: { $gt: start, $lte: end } },
      { startTime: { $lte: start }, endTime: { $gte: end } }
    ]
  });

  return !conflict;
}


// ⛔ Check equipment availability
export async function hasEquipmentStock(type, requested, start, end) {
  if (requested === 0) return true;

  const eq = await Equipment.findOne({ type });
  if (!eq) return false;

  const overlapping = await Booking.find({
    status: "confirmed",
    $or: [
      { startTime: { $lt: end, $gte: start } },
      { endTime: { $gt: start, $lte: end } },
      { startTime: { $lte: start }, endTime: { $gte: end } }
    ]
  });

  let used = 0;
  for (const b of overlapping) {
    used += type === "racket" ? b.resources.rackets : b.resources.shoes;
  }

  return used + requested <= eq.totalStock;
}
