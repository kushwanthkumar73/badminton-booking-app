



---

# 🏸 Badminton Court Booking System – Backend

### Full-Stack Assignment – Acorn Globus

**Tech Stack:** Node.js, Express.js, MongoDB, Mongoose
**Live Backend:** [https://badminton-booking-app.onrender.com](https://badminton-booking-app.onrender.com)

---

## 📌 Overview

This backend powers the **Badminton Court Booking Platform**, which supports:

✔ Multi-resource scheduling
✔ Dynamic pricing engine
✔ Coach availability
✔ Equipment rental
✔ Court selection
✔ Booking creation
✔ Price preview API

This project follows a clean, modular architecture for maintainability and scalability.

---

## 🚀 Features

### **1. Multi-Resource Availability Check**

When a user attempts a booking, the backend ensures:

* Court is available
* Coach is free
* Equipment stock is sufficient
* No time overlaps occur

All checks are **atomic**—booking succeeds only if all resources are available.

---

### **2. Dynamic Pricing Engine**

Pricing is calculated based on:

* Court base price
* Equipment rental fee
* Coach hourly rate
* Active pricing rules:

  * Peak hours (multipliers)
  * Weekend multipliers
  * Indoor premium
  * Custom admin rules

Price preview API returns a full breakdown.

---

### **3. Admin Configurable Resources**

Admin can configure:

* Courts
* Coaches
* Equipment
* Pricing rules

APIs support CRUD operations (create, list, update, delete).

---

## 🏗️ Project Structure

```
backend/
│── config/
│     └── db.js               # MongoDB connection
│
│── models/
│     ├── Court.js
│     ├── Coach.js
│     ├── Equipment.js
│     ├── PricingRule.js
│     └── Booking.js
│
│── helpers/
│     ├── availability.js     # Resource availability checks
│     └── pricing.js          # Dynamic pricing engine
│
│── routes/
│     ├── courtRoutes.js
│     ├── coachRoutes.js
│     ├── equipmentRoutes.js
│     ├── pricingRuleRoutes.js
│     └── bookingRoutes.js
│
└── server.js                 # Main entry
```

---

## 🔧 Installation & Setup

### **1. Clone the repo**

```
git clone <repo-url>
cd backend
```

### **2. Install dependencies**

```
npm install
```

### **3. Create `.env` file**

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### **4. Start server**

```
npm start
```

Server will run at:
👉 [http://localhost:5000](http://localhost:5000)
👉 Live: [https://badminton-booking-app.onrender.com](https://badminton-booking-app.onrender.com)

---

## 📡 API Endpoints

### **Courts**

```
GET    /api/courts
POST   /api/courts
```

### **Coaches**

```
GET    /api/coaches
POST   /api/coaches
```

### **Equipment**

```
GET    /api/equipment
POST   /api/equipment
```

### **Pricing Rules**

```
GET    /api/pricing-rules
POST   /api/pricing-rules
```

### **Booking**

```
POST   /api/bookings/preview   # Live pricing
POST   /api/bookings           # Confirm booking
```

---

## 🔥 Price Preview Example

### Request:

```
POST /api/bookings/preview
{
  "court": "courtId",
  "startTime": "2025-12-10T10:00:00",
  "endTime": "2025-12-10T11:00:00",
  "rackets": 1,
  "shoes": 1,
  "coach": "coachId"
}
```

### Response:

```
{
  "basePrice": 400,
  "equipmentFee": 180,
  "coachFee": 300,
  "rulesApplied": ["Indoor Premium"],
  "rulesFee": 100,
  "total": 980
}
```

---

## 💾 Booking Storage

Each booking stored with:

* Resources used
* Price summary
* Court & coach references
* Full audit timestamps

---

## 🎯 Submission Notes

✔ Clean modular architecture
✔ Works with React frontend
✔ Handles concurrency
✔ Implements multi-resource scheduling
✔ Pricing driven by admin rules (not hardcoded)

---

## 👨‍💻 Author

**Kushwanth Kumar**
MCA Student | Full Stack Developer

---

If you want a **Frontend README** next, say **"Give frontend README"** 👍🔥
