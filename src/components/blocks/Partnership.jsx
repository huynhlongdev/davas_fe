"use client";

import React, { useState, useEffect } from "react";
import Heading from "../Heading";

const Partnership = ({ data: block }) => {
  const { partners, heading } = block || {};

  // State để lưu các mảng đã được random
  const [randomizedRows, setRandomizedRows] = useState({
    row1: [],
    row2: [],
    row3: [],
  });

  // Hàm random mảng
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Random khi component mount hoặc partners thay đổi
  useEffect(() => {
    if (partners && partners.length > 0) {
      setRandomizedRows({
        row1: shuffleArray(partners),
        row2: shuffleArray(partners),
        row3: shuffleArray(partners),
      });
    }
  }, [partners]);

  // Nếu chưa có partners hoặc chưa random xong, không render
  if (!partners || partners.length === 0 || randomizedRows.row1.length === 0) {
    return null;
  }

  return (
    <section id="partners" className="py-25 bg-off overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-10 mb-13">
        <Heading data={heading} />
      </div>

      <div className="overflow-hidden">
        {/* Row 1 - Left to Right */}
        <div className="p-row rl mb-4">
          <div className="p-track grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {randomizedRows.row1.map((logo, i) => (
              <div
                key={`row1-${i}`}
                className="bg-white border border-gray-300 rounded-[10px] px-6.5 py-3.25 flex items-center justify-center w-[200px] transition-all duration-180 hover:shadow-md hover:border-gray-400"
              >
                {logo?.url && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${logo.url}`}
                    className="h-15 object-contain"
                    alt={logo.alt || `Partner ${i + 1}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left (reverse order for variety) */}
        <div className="p-row rr mb-4">
          <div className="p-track grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {randomizedRows.row2.map((logo, i) => (
              <div
                key={`row2-${i}`}
                className="bg-white border border-gray-300 rounded-[10px] px-6.5 py-3.25 flex items-center justify-center w-[200px] transition-all duration-180 hover:shadow-md hover:border-gray-400"
              >
                {logo?.url && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${logo.url}`}
                    className="h-15 object-contain"
                    alt={logo.alt || `Partner ${i + 1}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Left to Right với random order khác */}
        <div className="p-row rl2">
          <div className="p-track grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {randomizedRows.row3.map((logo, i) => (
              <div
                key={`row3-${i}`}
                className="bg-white border border-gray-300 rounded-[10px] px-6.5 py-3.25 flex items-center justify-center w-[200px] transition-all duration-180 hover:shadow-md hover:border-gray-400"
              >
                {logo?.url && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${logo.url}`}
                    className="h-15 object-contain"
                    alt={logo.alt || `Partner ${i + 1}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
