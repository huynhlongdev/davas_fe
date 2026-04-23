"use client";

import React, { useState } from "react";

const governmentData = [
  {
    name: "Mr. Ho Quang Buu",
    role: "Vice Chairman",
    org: "People's Committee of Da Nang City",
    img: "https://davas.vc/uploads/article/guest-mr-ho-quang-buu-1773815187.png",
    bio: "Vice Chairman of the People's Committee of Da Nang City.",
  },
];

export default function Speakers() {
  const [activeTab, setActiveTab] = useState("gov");

  return (
    <section id="speakers" className="py-25 bg-white">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="inline-flex items-center gap-2.25 text-xs font-bold tracking-[0.13em] text-red-600 uppercase mb-3.5">
          <span className="w-5 h-0.5 bg-red-600" />
          DAVAS 2026
        </div>
        <h2 className="font-display text-[clamp(30px,3.8vw,50px)] font-bold tracking-[-0.03em] text-gray-900 leading-1.08 mb-4.5">
          Distinguished Guests
          <br />
          &amp; Speakers
        </h2>
        <p className="text-base text-gray-600 max-w-[600px] leading-1.78 font-light mb-11">
          Government leaders, venture capitalists, global investors, and
          innovation ecosystem builders from across Southeast Asia and beyond.
        </p>

        {/* Tab Buttons */}
        <div className="inline-flex gap-0 mb-9 bg-gray-100 p-1 rounded-[10px] border border-gray-300">
          {[
            { id: "gov", label: "Government" },
            { id: "spk", label: "Speakers & Investors" },
            { id: "gst", label: "Guests" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-display text-xs font-bold tracking-[0.05em] px-5 py-2.25 rounded transition-all duration-180 ${
                activeTab === tab.id
                  ? "bg-white text-gray-900 shadow-md"
                  : "bg-transparent text-gray-500 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Speaker Grid - Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5 mb-7">
          {/* Speakers would be rendered here */}
          <div className="aspect-square bg-gray-100 rounded-[12px] animate-pulse" />
        </div>
      </div>
    </section>
  );
}
