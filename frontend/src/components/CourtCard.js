import { useNavigate } from "react-router-dom";

function CourtCard({ court }) {
  const navigate = useNavigate();

  return (
    <div className="border p-5 rounded-xl shadow hover:shadow-xl transition">
      <h2 className="text-xl font-semibold">{court.name}</h2>

      <p className="text-gray-600 capitalize">
        Type: {court.type}
      </p>

      <p className="text-gray-800 font-medium mt-2">
        ₹ {court.basePricePerHour} / hour
      </p>

      <button
        onClick={() => navigate(`/select-time/${court._id}`)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Select Court
      </button>
    </div>
  );
}

export default CourtCard;

