import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Heading from "../Heading";

function IconComponent({ icon }) {
  const icons = {
    clock: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    chart: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    users: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    monitor: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    layers: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    building: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  };
  return icons[icon] || null;
}

export default function About({ data }) {
  const { heading, cards } = data;
  return (
    <section id="about" className="py-25 bg-gray-50">
      <div className="max-w-[1360px] mx-auto px-10">
        <Heading data={heading} className="w-[600px]" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards?.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 rounded-[12px] p-8 transition-all duration-200 hover:shadow-lg hover:border-gray-400 hover:-translate-y-0.75 relative overflow-hidden group"
            >
              {/* Top border animation */}
              <div className="absolute top-0 left-0 right-0 h-0.75 bg-gradient-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-280 origin-left" />

              {/* Icon */}
              <div className="w-[46px] h-[46px] rounded-[10px] bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center mb-4.5 text-red-600">
                {/* <IconComponent icon={card.icon} /> */}
                {card.icon?.url && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${card.icon.url}`}
                    alt=""
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="font-display text-base font-bold mb-2">
                {card.primaryText}
              </h3>

              {/* subText */}
              <p className="text-sm text-gray-600 leading-1.65">
                {card.subText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
