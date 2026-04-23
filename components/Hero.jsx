"use client";

import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";

export default function Hero() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-[72px] bg-white overflow-hidden flex flex-col">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(200, 16, 46, 0.045) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(200, 16, 46, 0.045) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glows */}
      <div
        className="absolute -top-[180px] -right-40 w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 16, 46, 0.09) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-[120px] left-[8%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244, 121, 32, 0.06) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="max-w-[1360px] mx-auto px-10 py-[72px] pb-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
        {/* Left Column */}
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full mb-6.5">
            <div className="w-1.75 h-1.75 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.12em] text-red-600 uppercase">
              Da Nang · May 25–27, 2026
            </span>
          </div>

          {/* Title */}
          <h1 className="font-hero text-[clamp(56px,6.5vw,96px)] leading-[0.96] tracking-[0.01em] text-gray-900 mb-7">
            DA NANG <span className="text-red-600">VENTURE</span> &amp; ANGEL
            SUMMIT
          </h1>

          {/* Subtitle */}
          <p className="text-base text-gray-600 max-w-[540px] leading-1.75 mb-10 font-light">
            Vietnam's international innovation and investment forum — connecting
            startups, venture capital, and global ecosystems in Da Nang.
          </p>

          {/* Buttons */}
          <div className="flex gap-3.5 flex-wrap items-center mb-13">
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="bg-red-600 text-white font-display font-bold text-sm tracking-[0.06em] px-8 py-3.5 rounded transition-all duration-180 hover:bg-red-700 hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Register Now
            </button>
            <a
              href="#about"
              className="bg-transparent text-gray-900 font-display font-semibold text-sm tracking-[0.04em] px-7 py-3.5 rounded border-[1.5px] border-gray-400 transition-all duration-180 hover:border-gray-900 hover:bg-gray-100 inline-flex items-center"
            >
              Explore DAVAS →
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-9 mt-13 pt-11 border-t border-gray-200">
            {[
              { number: "50+", label: "Startup Pitches" },
              { number: "30+", label: "Investment Funds" },
              { number: "3", label: "Days of Events" },
              { number: "50+", label: "Exhibition Booths" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-[34px] font-bold tracking-[-0.025em] leading-none">
                  {stat.number.split("+").map((part, j) => (
                    <React.Fragment key={j}>
                      {part}
                      {j === 0 && "+" && (
                        <em className="text-red-600 font-style-normal not-italic">
                          +
                        </em>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="text-xs text-gray-500 font-semibold mt-1.25 tracking-[0.05em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Countdown Card */}
        <Countdown />
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.65s ease both;
        }
      `}</style>
    </section>
  );
}
