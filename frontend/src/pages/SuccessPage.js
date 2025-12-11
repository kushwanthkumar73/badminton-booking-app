import { useLocation, useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const total = query.get("total");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-emerald-50 to-white px-6">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md w-full">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600 mb-4">Your booking was successfully completed.</p>
        <p className="text-xl font-semibold mb-6">Total Paid: <span className="text-green-700">₹{total}</span></p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => navigate("/")} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Back to Home</button>
          <button onClick={() => navigate("/courts")} className="px-6 py-2 rounded border">View Courts</button>
        </div>
      </div>
    </div>
  );
}
