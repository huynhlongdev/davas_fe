"use client";

import React, { useState } from "react";
import RegisterModal from "./modals/RegisterModal";

export default function Register() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="register"
      className="relative py-25 bg-gray-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(200, 16, 46, 0.28) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200, 16, 46, 0.4), transparent)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center relative z-10">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.13em] text-orange-300 uppercase mb-5">
            <span className="w-5 h-0.5 bg-orange-300" />
            Join DAVAS
          </div>
          <h2 className="font-hero text-[clamp(48px,5.5vw,80px)] leading-[0.96] text-white mb-6">
            Secure Your{" "}
            <em className="text-red-600 font-style-normal not-italic">Spot</em>
          </h2>
          <p className="text-base text-white/50 leading-1.75 font-light mb-10 max-w-[500px]">
            Register now to join Vietnam's premier innovation and investment
            summit in Da Nang.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red-600 text-white font-display font-bold text-sm tracking-[0.07em] px-9 py-3.75 rounded transition-all duration-180 hover:bg-red-700 hover:-translate-y-0.5 shadow-lg"
          >
            Register Now →
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-white/5 border border-white/10 rounded-[16px] p-10 backdrop-blur">
          <h3 className="font-display text-2xl font-bold text-white mb-1.5">
            Early Bird Benefits
          </h3>
          <p className="text-sm text-white/40 mb-7">
            Registered attendees receive exclusive perks
          </p>
          <div className="space-y-3.5">
            {[
              "✓ Full access to all summit sessions",
              "✓ Networking event invitations",
              "✓ Pitch competition access",
              "✓ Exclusive exhibition floor access",
            ].map((perk, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-white/70"
              >
                <div className="w-8 h-8 rounded-[8px] bg-red-600/25 flex items-center justify-center flex-shrink-0 text-red-300">
                  {perk.split(" ")[0]}
                </div>
                <span>{perk.split(" ").slice(1).join(" ")}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RegisterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
