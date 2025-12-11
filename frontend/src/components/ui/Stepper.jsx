import React from "react";

export default function Stepper() {
  return (
    <div className="mt-6 -translate-y-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl px-6 py-4 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700">Select Court</div>
          <div className="w-10 h-px bg-slate-200" />
          <div className="px-4 py-2 rounded-full bg-slate-100 text-slate-600">Pick Time</div>
          <div className="w-10 h-px bg-slate-200" />
          <div className="px-4 py-2 rounded-full bg-slate-100 text-slate-600">Add-ons</div>
        </div>
        <div className="text-sm text-slate-500">Step 1 of 3</div>
      </div>
    </div>
  );
}
