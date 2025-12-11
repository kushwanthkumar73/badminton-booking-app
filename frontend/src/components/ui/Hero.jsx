import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const nav = useNavigate();
  return (
    <section className="mt-6 rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800 via-slate-900 to-indigo-900 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
            Book Your Perfect <span className="text-teal-300">Court Session</span>
          </h2>
          <p className="mt-6 text-lg text-slate-200 max-w-xl">
            Choose premium indoor/outdoor courts, add equipment, and hire a coach — pricing updates live.
          </p>

          <div className="mt-8 flex gap-3">
            <button onClick={() => nav("/courts")} className="px-6 py-3 bg-teal-400 text-slate-900 rounded-full font-semibold hover:scale-105 transition">
              Book Court
            </button>
            <button className="px-6 py-3 bg-transparent border border-slate-300 rounded-full text-slate-100 hover:bg-white/5 transition">
              How it works
            </button>
          </div>

          <div className="mt-8 flex gap-3 flex-wrap">
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">⚡ Dynamic Pricing</span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">🏅 Pro Coaches</span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">🎾 Equipment Rental</span>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white/6 rounded-xl p-6 backdrop-blur-sm border border-white/6">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-300">Select Court</div>
                  <div className="text-lg font-semibold text-white">Garden Court</div>
                  <div className="text-sm text-slate-300">Indoor • 2-4 players</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-300">Price</div>
                  <div className="text-2xl font-bold text-white">₹400</div>
                  <div className="text-xs text-slate-400">/hour</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 bg-white/8 rounded-lg p-3">
                  <div className="text-sm text-slate-300">Available</div>
                </div>
                <div className="flex-1 bg-white/8 rounded-lg p-3">
                  <div className="text-sm text-slate-300">Add-ons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
}
