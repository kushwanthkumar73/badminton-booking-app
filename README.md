

# 🏸 Badminton Court Booking System

A full-stack MERN application for booking sports courts with multi-resource availability and dynamic pricing.

This project was built as an **Internship Assignment** for Acorn Globus.
It demonstrates complete full-stack skills: backend APIs, database modeling, frontend UI/UX, and premium booking flow.

---

# 🚀 Features

## ✅ User Features

* Browse all courts (indoor & outdoor)
* Select time slot for a court
* Add equipment (rackets, shoes)
* Choose available coach
* Live dynamic price calculation
* Confirm booking and view success page

---

## 🧠 Backend Features

### 1. **Multi-Resource Availability Checking**

Each booking checks availability of:

* Court
* Coach
* Equipment stock

All checks must pass → booking succeeds
If any fails → booking is rejected

### 2. **Dynamic Pricing Engine**

Final price is calculated using:

* Court base price
* Equipment fees
* Coach fee
* Pricing Rules (Peak hours, weekend multiplier, indoor premium)

### 3. **Admin-Ready Endpoints**

* Add courts
* Add equipment
* Add coaches
* Add pricing rules

---

## 🎨 Frontend Features (Premium UI)

* Modern Tailwind CSS UI
* Animated time slot selector
* Add-ons with +/– buttons
* Coach cards with avatar & selection highlight
* Sticky price summary
* Smooth booking flow
* Success page with price breakdown

---

# 🛠️ Tech Stack

### **Frontend**

* React.js
* React Router
* Tailwind CSS

### **Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

---

# 📁 Project Structure

```
root
│── backend
│   ├── config/
│   ├── helpers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│
└── frontend
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── App.js
    │   ├── index.js
```

---

# ⚙️ Backend Setup

### 1️⃣ Install dependencies

```
cd backend
npm install
```

### 2️⃣ Create `.env`

```
MONGO_URI=mongodb://127.0.0.1:27017/badminton
PORT=5000
```

### 3️⃣ Start server

```
npm start
```

---

# 🎨 Frontend Setup

### 1️⃣ Install dependencies

```
cd frontend
npm install
```

### 2️⃣ Run frontend

```
npm start
```

Frontend runs on **[http://localhost:3000](http://localhost:3000)**
Backend runs on **[http://localhost:5000](http://localhost:5000)**

---

# 🔥 API Endpoints

### Courts

* `GET /api/courts`
* `POST /api/courts`

### Coaches

* `GET /api/coaches`
* `POST /api/coaches`

### Equipment

* `GET /api/equipment`
* `POST /api/equipment`

### Pricing Rules

* `GET /api/pricing-rules`
* `POST /api/pricing-rules`

### Bookings

* `POST /api/bookings/preview`
* `POST /api/bookings`

---

# 🧪 How Booking Works

### 1. User selects court & time

### 2. Frontend sends:

```
POST /api/bookings/preview
```

Backend calculates:

* base price
* rules (peak, weekend, indoor)
* equipment fee
* coach fee

Returns **live price**.

### 3. User confirms booking

Frontend sends:

```
POST /api/bookings
```

Backend:

* checks availability
* creates booking
* returns final booking object

---

# 🏁 Deployment Guide

### For Backend (Render / Railway / VPS)

1. Push repo to GitHub
2. Create new Web Service
3. Set environment variables
4. Add build/start:

```
npm install
npm start
```

### For Frontend (Vercel / Netlify)

1. Select frontend folder
2. Build command:

```
npm run build
```

3. Output directory:

```
build
```

### ⚠️ Important

Replace API URLs in frontend:

```
fetch("https://your-backend-url.com/api/courts")
```

---

# 📌 Conclusion

This project demonstrates:

* Clean backend architecture
* Production-level availability logic
* Dynamic pricing engine
* Premium React UI
* Professional component structure
* Full booking flow from start → finish

---

