"use client";

import React from "react";

const partnerLogos = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
];

export default function Partners() {
  return (
    <section id="partners" className="py-25 bg-gray-50 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="inline-flex items-center gap-2.25 text-xs font-bold tracking-[0.13em] text-red-600 uppercase mb-3.5">
          <span className="w-5 h-0.5 bg-red-600" />
          Our Partners
        </div>
        <h2 className="font-display text-[clamp(30px,3.8vw,50px)] font-bold tracking-[-0.03em] text-gray-900 leading-1.08 mb-4.5">
          Strategic Partners & Sponsors
        </h2>

        {/* Partner Carousel - Simplified */}
        <div className="mt-13 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {partnerLogos.map((logo, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 rounded-[10px] px-6.5 py-3.25 flex items-center justify-center min-h-[62px] transition-all duration-180 hover:shadow-md hover:border-gray-400"
            >
              <span className="font-display text-sm font-bold text-gray-600 tracking-[0.04em]">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
