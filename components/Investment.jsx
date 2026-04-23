"use client";

import React, { useState } from "react";

const investmentFunds = [
  { name: "Quest Ventures", type: "Early-Stage VC" },
  { name: "Antler", type: "Startup Generator" },
  { name: "GenAI Fund", type: "AI-Focused Fund" },
];

export default function Investment() {
  const [activeInvestment, setActiveInvestment] = useState(0);

  return (
    <section id="investment" className="py-25 bg-white">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="inline-flex items-center gap-2.25 text-xs font-bold tracking-[0.13em] text-red-600 uppercase mb-3.5">
          <span className="w-5 h-0.5 bg-red-600" />
          Investment Partners
        </div>
        <h2 className="font-display text-[clamp(30px,3.8vw,50px)] font-bold tracking-[-0.03em] text-gray-900 leading-1.08 mb-4.5">
          Investment & Venture Capital
        </h2>
        <p className="text-base text-gray-600 max-w-[600px] leading-1.78 font-light mb-13">
          Connect with top-tier venture capital funds, angel investors, and
          corporate venture partners.
        </p>

        {/* Investment List and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 border border-gray-300 rounded-[14px] overflow-hidden">
          {/* Sidebar */}
          <div className="bg-gray-50 border-r border-gray-300">
            {investmentFunds.map((fund, idx) => (
              <div
                key={idx}
                onClick={() => setActiveInvestment(idx)}
                className={`px-6 py-4.25 cursor-pointer transition-all duration-150 border-b border-gray-300 ${
                  activeInvestment === idx
                    ? "bg-white border-l-[3px] border-l-red-600 pl-[21px]"
                    : "hover:bg-white"
                }`}
              >
                <div className="font-display text-sm font-semibold">
                  {fund.name}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{fund.type}</div>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="p-11 bg-white">
            <div className="text-xs font-bold tracking-[0.12em] text-red-600 uppercase mb-2">
              Fund Category
            </div>
            <h3 className="font-display text-[30px] font-bold tracking-[-0.025em] mb-3.5">
              {investmentFunds[activeInvestment].name}
            </h3>
            <p className="text-sm text-gray-600 leading-1.78 font-light mb-8 max-w-[600px]">
              Connect with innovative investment funds shaping Southeast Asia's
              startup ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
