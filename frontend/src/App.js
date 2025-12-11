import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PremiumHome from "./pages/PremiumHome";
import CourtSelection from "./pages/CourtSelection";
import TimeSelection from "./pages/TimeSelection";
import OptionsSelection from "./pages/OptionsSelection";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PremiumHome />} />
        <Route path="/courts" element={<CourtSelection />} />
        <Route path="/select-time/:courtId" element={<TimeSelection />} />
        <Route path="/select-options/:courtId/:time" element={<OptionsSelection />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;



