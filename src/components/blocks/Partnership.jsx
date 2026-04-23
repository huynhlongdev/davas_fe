import React from "react";
import Heading from "../Heading";

const Partnership = ({ data: { partners, heading } }) => {
  return (
    <section id="partners" className="py-25 bg-gray-50 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-10">
        <Heading data={heading} />

        {/* Partner Carousel - Simplified */}
        <div className="mt-13 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((logo, i) => (
            <div
              key={i}
              className="bg-white border border-gray-300 rounded-[10px] px-6.5 py-3.25 flex items-center justify-center min-h-[62px] transition-all duration-180 hover:shadow-md hover:border-gray-400"
            >
              <span className="font-display text-sm font-bold text-gray-600 tracking-[0.04em]">
                {logo?.url && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${logo.url}`}
                    alt=""
                  />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
