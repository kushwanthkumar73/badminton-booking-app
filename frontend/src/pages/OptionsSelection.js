import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

export default function OptionsSelection() {
  const { courtId, time } = useParams();
  const navigate = useNavigate();

  const [rackets, setRackets] = useState(0);
  const [shoes, setShoes] = useState(0);
  const [selectedCoach, setSelectedCoach] = useState("");

  const [coaches, setCoaches] = useState([]);
  const [equipment, setEquipment] = useState({});
  const [price, setPrice] = useState(null);
  const [loadingPrice, setLoadingPrice] = useState(false);

  // Fetch data
  useEffect(() => {
    fetch("http://localhost:5000/api/coaches")
      .then(res => res.json())
      .then(data => setCoaches(data));

    fetch("http://localhost:5000/api/equipment")
      .then(res => res.json())
      .then(data => {
        const map = {};
        data.forEach(e => (map[e.type] = e));
        setEquipment(map);
      });
  }, []);

  // Price calculation
  const calculatePrice = useCallback(async () => {
    setLoadingPrice(true);
    const startTime = new Date(`2025-12-10T${time}:00`);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    const res = await fetch("http://localhost:5000/api/bookings/preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        court: courtId,
        startTime,
        endTime,
        rackets,
        shoes,
        coach: selectedCoach,
      }),
    });

    const data = await res.json();
    setPrice(data);
    setLoadingPrice(false);
  }, [courtId, time, rackets, shoes, selectedCoach]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  // Confirm booking
  async function confirmBooking() {
    const startTime = new Date(`2025-12-10T${time}:00`);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "Demo User",
        court: courtId,
        startTime,
        endTime,
        rackets,
        shoes,
        coach: selectedCoach,
      }),
    });

    const data = await res.json();

    // ⭐ FIX: Send total to success page
    const total = data?.pricingBreakdown?.total ?? price?.total ?? 0;

    navigate(`/success?total=${total}`);
  }

  // UI Components
  function AddonCard({ title, count, inc, dec, price }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow border">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">₹{price} / unit</p>

        <div className="flex items-center gap-3 mt-2">
          <button onClick={dec} className="bg-gray-200 px-3 py-1 rounded">−</button>
          <span className="text-lg font-semibold">{count}</span>
          <button onClick={inc} className="bg-gray-900 text-white px-3 py-1 rounded">+</button>
        </div>
      </div>
    );
  }

  function CoachCard({ c }) {
    const active = selectedCoach === c._id;
    return (
      <div
        onClick={() => setSelectedCoach(active ? "" : c._id)}
        className={`p-4 rounded-xl border shadow cursor-pointer transition ${
          active ? "bg-blue-50 border-blue-500" : "bg-white"
        }`}
      >
        <h3 className="font-semibold">{c.name}</h3>
        <p className="text-gray-600">₹{c.hourlyRate}/hr</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Add-ons & Coach</h1>

      {/* Add-ons */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <AddonCard
          title="Rackets"
          count={rackets}
          price={equipment.racket?.pricePerUnit ?? "—"}
          inc={() => setRackets(rackets + 1)}
          dec={() => setRackets(rackets > 0 ? rackets - 1 : 0)}
        />

        <AddonCard
          title="Shoes"
          count={shoes}
          price={equipment.shoes?.pricePerUnit ?? "—"}
          inc={() => setShoes(shoes + 1)}
          dec={() => setShoes(shoes > 0 ? shoes - 1 : 0)}
        />
      </div>

      {/* Coaches */}
      <h2 className="text-xl font-semibold mb-3">Coaches</h2>
      <div className="grid grid-cols-2 gap-4">
        {coaches.map((c) => (
          <CoachCard key={c._id} c={c} />
        ))}
      </div>

      {/* Price Summary */}
      <div className="mt-10 p-6 rounded-2xl shadow border bg-white">
        <h2 className="text-xl font-bold mb-4">Price Summary</h2>

        {loadingPrice ? (
          <p className="text-gray-500">Calculating...</p>
        ) : (
          <>
            <p>Base Price: ₹{price?.basePrice}</p>
            <p>Equipment Fee: ₹{price?.equipmentFee}</p>
            <p>Coach Fee: ₹{price?.coachFee}</p>
            <p>Rule Fee: ₹{price?.rulesFee}</p>

            <h1 className="text-3xl font-bold mt-4">
              Total: ₹{price?.total}
            </h1>

            <button
              onClick={confirmBooking}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl text-lg hover:bg-green-700"
            >
              Confirm Booking
            </button>
          </>
        )}
      </div>
    </div>
  );
}
