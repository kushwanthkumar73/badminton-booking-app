import Navbar from "../components/ui/Navbar";
import Hero from "../components/ui/Hero";
import Stepper from "../components/ui/Stepper";
import PremiumCourts from "../components/ui/PremiumCourts";

export default function PremiumHome() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <Stepper />
        <PremiumCourts />
      </main>
    </div>
  );
}
