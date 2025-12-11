import PricingRule from "../models/PricingRule.js";
import Court from "../models/Court.js";
import Coach from "../models/Coach.js";
import Equipment from "../models/Equipment.js";

function getHours(start, end) {
  return (end - start) / (1000 * 60 * 60);
}

function getTimeString(date) {
  return date.toISOString().substring(11, 16); // "HH:MM"
}

function isTimeInRange(timeStr, startStr, endStr) {
  if (!startStr || !endStr) return true;
  return timeStr >= startStr && timeStr < endStr;
}

export async function calculatePrice({ courtId, coachId, start, end, rackets, shoes }) {
  const court = await Court.findById(courtId);
  const coach = coachId ? await Coach.findById(coachId) : null;
  const racketEq = await Equipment.findOne({ type: "racket" });
  const shoeEq = await Equipment.findOne({ type: "shoes" });

  const durationHours = getHours(start, end);

  let basePrice = court.basePricePerHour * durationHours;
  let equipmentFee = (rackets * racketEq.pricePerUnit) + (shoes * shoeEq.pricePerUnit);
  let coachFee = coach ? coach.hourlyRate * durationHours : 0;

  let total = basePrice + equipmentFee + coachFee;

  const rules = await PricingRule.find({ isActive: true });

  const day = start.getDay();
  const timeStr = getTimeString(start);

  let rulesApplied = [];
  let rulesFee = 0;

  for (const rule of rules) {
    const dayMatch = !rule.daysOfWeek?.length || rule.daysOfWeek.includes(day);
    const timeMatch = isTimeInRange(timeStr, rule.startTime, rule.endTime);
    const courtTypeMatch = (rule.courtType === "any") || (rule.courtType === court.type);

    if (dayMatch && timeMatch && courtTypeMatch) {
      rulesApplied.push(rule.name);

      if (rule.ruleType === "multiplier") {
        const before = total;
        total = total * rule.value;
        rulesFee += total - before;
      } else if (rule.ruleType === "flat_add") {
        total += rule.value;
        rulesFee += rule.value;
      }
    }
  }

  return {
    basePrice,
    durationHours,
    equipmentFee,
    coachFee,
    rulesApplied,
    rulesFee,
    total
  };
}
