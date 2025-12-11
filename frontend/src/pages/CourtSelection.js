import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourtSelection() {
  const [courts, setCourts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/courts")   // <-- FIXED URL
      .then((r) => r.json())
      .then((data) => setCourts(data))
      .catch(() => setCourts([]));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">🏸 Choose Your Court</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courts.map((c) => (
          <div
            key={c._id}
            className="p-6 rounded-2xl shadow-lg bg-white border hover:shadow-2xl transition cursor-pointer"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold">{c.name}</h2>
              <p className="text-slate-500 capitalize">{c.type} Court</p>
            </div>

            <p className="text-xl font-semibold text-green-600">
              ₹{c.basePricePerHour} / hour
            </p>

            <button
              onClick={() => nav(`/select-time/${c._id}`)}
              className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl 
                         hover:bg-blue-700 transition font-semibold"
            >
              Select Court
            </button>
          </div>
        ))}

        {courts.length === 0 && (
          <div className="text-center text-slate-500 text-lg col-span-2">
            No courts found 😢
          </div>
        )}
      </div>
    </div>
  );
}
