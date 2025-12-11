import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TimeSelection() {
  const { courtId } = useParams();
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00",
    "14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"
  ];

  function handleContinue() {
    if (!selectedTime) { alert("Please select a time"); return; }
    navigate(`/select-options/${courtId}/${selectedTime}`);
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Select Time Slot</h1>

      <div className="grid grid-cols-3 gap-4">
        {timeSlots.map(slot => (
          <button key={slot} onClick={() => setSelectedTime(slot)}
            className={`py-4 rounded-xl text-lg font-medium border transition-all shadow-sm ${selectedTime===slot ? "bg-blue-600 text-white scale-105 shadow-lg" : "bg-white text-slate-700 hover:bg-blue-50"}`}>
            {slot}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <button onClick={handleContinue} className="w-full py-3 rounded-xl bg-green-600 text-white text-lg font-semibold">Continue</button>
      </div>
    </div>
  );
}


