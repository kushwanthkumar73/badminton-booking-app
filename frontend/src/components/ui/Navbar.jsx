import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  return (
    <header className="py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-700 to-teal-400 flex items-center justify-center shadow">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
              <path d="M6 7c1-1 3-2 5-2s4 1 5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">CourtBook</h1>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => nav("/")} className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 font-medium shadow-sm hover:bg-emerald-200">
            Home
          </button>
          <button onClick={() => nav("/courts")} className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100">All Courts</button>
        </div>
      </div>
    </header>
  );
}
