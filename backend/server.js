import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import courtRoutes from "./routes/courtRoutes.js";
import equipmentRoutes from "./routes/equipmentRoutes.js";
import coachRoutes from "./routes/coachRoutes.js";
import pricingRuleRoutes from "./routes/pricingRuleRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Database connect
connectDB();

app.get("/", (req, res) => {
  res.send("Badminton Booking Backend Running 🚀");
});
app.use("/api/courts", courtRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/coaches", coachRoutes);
app.use("/api/pricing-rules", pricingRuleRoutes);
app.use("/api/bookings", bookingRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
