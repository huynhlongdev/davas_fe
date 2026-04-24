import React from "react";
import Heading from "../Heading";

export default function About({ data }) {
  const { heading, cards } = data;
  return (
    <section id="about" className="py-25 bg-off">
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
