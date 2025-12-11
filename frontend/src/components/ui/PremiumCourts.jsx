import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PremiumCourts() {
  const [courts, setCourts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/courts")
      .then((r) => r.json())
      .then((data) => setCourts(data))
      .catch(() => setCourts([]));
  }, []);

  return (
    <section className="mt-8 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courts.map((c) => (
          <article key={c._id} className="rounded-xl bg-white shadow-lg overflow-hidden border">
            <div className={`h-40 flex items-center justify-center ${c.type === "indoor" ? "bg-gradient-to-br from-slate-200 to-slate-300" : "bg-gradient-to-br from-green-50 to-green-100"}`}>
              <div className="text-slate-400 text-4xl">🎾</div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{c.name}</h3>
                  <div className="mt-1 text-sm text-slate-500 capitalize">{c.type} • Badminton</div>
                </div>

                <div className="text-right">
                  <div className="text-slate-500 text-sm">/hour</div>
                  <div className="text-2xl font-bold mt-1">₹{c.basePricePerHour}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-3">
                  <button onClick={() => navigate(`/select-time/${c._id}`)} className="px-4 py-2 bg-teal-500 text-white rounded-lg">Book</button>
                  <button className="px-3 py-2 border rounded-lg text-slate-700">Details</button>
                </div>

                <div className="text-sm text-slate-500">2-4 players</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
