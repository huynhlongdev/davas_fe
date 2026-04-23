"use client";

import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [countdown, setCountdown] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = new Date("2026-05-25").getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setCountdown({ days: "0", hours: "0", minutes: "0", seconds: "0" });
      } else {
        setCountdown({
          days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0",
          ),
          hours: String(
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          ).padStart(2, "0"),
          minutes: String(
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          ).padStart(2, "0"),
          seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
            2,
            "0",
          ),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-2xl p-9 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 16, 46, 0.35) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10">
        {/* Labels */}
        <div className="text-[10.5px] font-bold tracking-[0.13em] text-white/40 uppercase mb-5">
          Event Countdown
        </div>
        <div className="font-display text-xl font-bold text-white mb-1">
          DAVAS 2026
        </div>
        <div className="text-sm text-white/45 mb-7.5">
          May 25–27, 2026 · Da Nang, Vietnam
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { value: countdown.days, unit: "Days" },
            { value: countdown.hours, unit: "Hours" },
            { value: countdown.minutes, unit: "Mins" },
            { value: countdown.seconds, unit: "Secs" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/10 rounded-[10px] p-3.5 text-center"
            >
              <div className="font-display text-[30px] font-bold text-white leading-none">
                {item.value}
              </div>
              <div className="text-[9.5px] text-white/40 mt-1 tracking-[0.09em] uppercase">
                {item.unit}
              </div>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
          <div className="w-[34px] h-[34px] rounded-[8px] bg-red-600/30 flex items-center justify-center flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              className="w-[15px] h-[15px]"
            >
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <div className="font-display text-sm font-bold text-white">
              Ariyana Convention Centre
            </div>
            <div className="text-xs text-white/40 mt-0.5">Da Nang, Vietnam</div>
          </div>
        </div>

        {/* Button */}
        <button className="w-full mt-5 bg-red-600 text-white font-display font-bold text-sm tracking-[0.07em] px-3.25 py-3.25 rounded transition-all duration-180 hover:bg-red-700">
          Secure Your Spot →
        </button>
      </div>
    </div>
  );
}
