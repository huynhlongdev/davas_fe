"use client";

import React from "react";

const aboutCards = [
  {
    icon: "clock",
    title: "DAVAS Champion Golf Tournament",
    description:
      "Exclusive golf tournament for sponsors, investors, and key stakeholders — high-value networking in an intimate premium setting before the main summit begins.",
  },
  {
    icon: "chart",
    title: "Investment Pitching — 50 Projects",
    description:
      "Selecting 50 domestic and international projects to compete in front of top-tier VCs and angel investors in structured pitching rounds.",
  },
  {
    icon: "users",
    title: "In-Depth 1:1 Connections",
    description:
      "Facilitate structured one-on-one meetings between venture capital funds, angel investors, and high-potential startups — curated matchmaking for real deal flow.",
  },
  {
    icon: "monitor",
    title: "Startup & Innovation Exhibition",
    description:
      "Attract over 50 booths showcasing breakthrough ventures, deep tech solutions, and innovation projects from across Vietnam and the region.",
  },
  {
    icon: "layers",
    title: "Web3 Builders' Summit 2026",
    description:
      "A dedicated conference for Web3 founders, developers, and investors — panels on DeFi, blockchain infrastructure, and Southeast Asia's digital asset landscape.",
  },
  {
    icon: "building",
    title: "Building the Future Together",
    description:
      "INNOVATION & COLLABORATION — A platform uniting government, enterprise, and startup ecosystem to shape Da Nang's identity as a global innovation city.",
  },
];

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

export default function About() {
  return (
    <section id="about" className="py-25 bg-gray-50">
      <div className="max-w-[1360px] mx-auto px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2.25 text-xs font-bold tracking-[0.13em] text-red-600 uppercase mb-3.5">
              <span className="w-5 h-0.5 bg-red-600" />
              Our Story
            </div>
            <h2 className="font-display text-[clamp(30px,3.8vw,50px)] font-bold tracking-[-0.03em] text-gray-900 leading-1.08 mb-4.5">
              About <br />
              <span className="text-red-600">DAVAS 2026</span>
            </h2>
            <p className="text-base text-gray-600 max-w-[600px] leading-1.78 font-light">
              DAVAS 2026 is an international investment forum in Da Nang,
              connecting startups with investors and venture capital —
              positioning Da Nang as the leading innovation and investment hub
              in Southeast Asia.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aboutCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 rounded-[12px] p-8 transition-all duration-200 hover:shadow-lg hover:border-gray-400 hover:-translate-y-0.75 relative overflow-hidden group"
            >
              {/* Top border animation */}
              <div className="absolute top-0 left-0 right-0 h-0.75 bg-gradient-to-r from-red-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-280 origin-left" />

              {/* Icon */}
              <div className="w-[46px] h-[46px] rounded-[10px] bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center mb-4.5 text-red-600">
                <IconComponent icon={card.icon} />
              </div>

              {/* Title */}
              <h3 className="font-display text-base font-bold mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-1.65">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
