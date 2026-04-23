"use client";

import React, { useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Heading from "../Heading";

const investmentFunds = [
  { name: "Quest Ventures", type: "Early-Stage VC" },
  { name: "Antler", type: "Startup Generator" },
  { name: "GenAI Fund", type: "AI-Focused Fund" },
];

export default function InvestmentSection({ data }) {
  const [activeInvestment, setActiveInvestment] = useState(0);

  const { items, heading } = data;

  return (
    <section id="investment" className="py-25 bg-white">
      <div className="max-w-[1360px] mx-auto px-10">
        <Heading data={heading} />

        {/* Investment List and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 border border-border rounded-[14px] overflow-hidden mt-13">
          {/* Sidebar */}
          <div className="bg-off border-r border-border">
            <div className="text-t3 border-b-[1px] border-border text-sm font-medium uppercase py-3.5 px-6 ">
              Fund Categories
            </div>
            <div className="max-h-[760px] overflow-y-auto">
              {items.map((fund, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveInvestment(idx)}
                  className={`px-6 py-4.25 relative cursor-pointer transition-all duration-150 border-b border-gray-300 ${
                    activeInvestment === idx
                      ? "bg-white border-l-[3px] border-l-red-600 pl-[21px]"
                      : "hover:bg-white"
                  }`}
                >
                  <div className="font-display text-sm font-medium">
                    {fund.text}
                  </div>
                  <span className="inv-arr absolute top-3.5 right-3.75">›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="p-11 bg-white max-h-[800px] overflow-y-auto">
            <h3 className="font-display text-[30px] font-bold mb-3.5">
              {items[activeInvestment].text}
            </h3>

            <div className="text-sm text-gray-600 font-light">
              {items[activeInvestment].icon?.url && (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${items[activeInvestment].icon.url}`}
                  height={40}
                  width={150}
                  className="mb-5"
                  alt=""
                />
              )}
              <BlocksRenderer content={items[activeInvestment].content} />
              {items[activeInvestment].media?.url && (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${items[activeInvestment].media.url}`}
                  className="w-full rounded-xl"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
