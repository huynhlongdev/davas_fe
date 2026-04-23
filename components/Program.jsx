"use client";

import React, { useState } from "react";

export default function Program() {
  const [activeDay, setActiveDay] = useState("d1");

  return (
    <section id="program" className="py-25 bg-gray-50">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="inline-flex items-center gap-2.25 text-xs font-bold tracking-[0.13em] text-red-600 uppercase mb-3.5">
          <span className="w-5 h-0.5 bg-red-600" />
          DAVAS 2026
        </div>
        <h2 className="font-display text-[clamp(30px,3.8vw,50px)] font-bold tracking-[-0.03em] text-gray-900 leading-1.08 mb-4.5">
          Program Agenda
        </h2>
        <p className="text-base text-gray-600 max-w-[600px] leading-1.78 font-light mb-12">
          Three days of curated sessions, pitches, exhibitions, and one-on-one
          meetings across Da Nang.
        </p>

        {/* Day Tabs */}
        <div className="flex gap-0 mb-0">
          {[
            { id: "d1", label: "Day 01", date: "May 25, 2026" },
            { id: "d2", label: "Day 02", date: "May 26, 2026" },
            { id: "d3", label: "Day 03", date: "May 27, 2026" },
          ].map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`flex-1 text-center py-4 px-5 font-display text-sm font-bold tracking-[0.04em] border transition-all duration-200 ${
                activeDay === day.id
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-500 border-gray-300 hover:text-gray-600"
              } ${
                day.id === "d1"
                  ? "rounded-tl-[10px]"
                  : day.id === "d3"
                    ? "rounded-tr-[10px]"
                    : ""
              }`}
            >
              {day.label}
              <div className="text-xs font-normal opacity-55 tracking-[0.07em] mt-0.5">
                {day.date}
              </div>
            </button>
          ))}
        </div>

        {/* Schedule Placeholder */}
        <div className="bg-white border border-gray-300 border-t-0 rounded-b-[12px] p-9">
          <div className="text-gray-400 text-center py-16">
            Schedule content here
          </div>
        </div>
      </div>
    </section>
  );
}
