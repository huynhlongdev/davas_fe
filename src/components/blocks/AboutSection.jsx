import React from "react";
import Heading from "../Heading";
import Icon from "@/components/SvgFromUrl";

export default function About({ data }) {
  const { heading, cards } = data;
  return (
    <section id="about" className="py-25 bg-off">
      <div className="max-w-[1360px] px-4 mx-auto">
        <Heading
          data={heading}
          className="gap-x-20 grid grid-cols-2 items-end"
        />

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
              <div className="w-[46px] h-[46px] rounded-[10px] bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center mb-4.5 text-red">
                <Icon icon={card.icon} className="w-6 h-6 shrink-0" />

                {/* {card.icon?.url && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${card.icon.url}`}
                    alt=""
                  />
                )} */}
              </div>

              {/* Title */}
              <h3 className="font-display text-base font-semibold mb-2">
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
