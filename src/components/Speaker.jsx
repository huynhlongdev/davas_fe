import React from "react";
import Image from "./Image";

const Speaker = ({ data }) => {
  const { name, position, image } = data || {};

  return (
    <div className="bg-white border border-border rounded-xl px-5 py-7 text-center cursor-pointer hover:border-[rgba(200,_16,_46,_0.25)] hover:shadow-[0 8px 26px rgba(0, 0, 0, 0.09)]">
      <div className="w-18 h-18 rounded-full mx-auto mb-4 bg-off2 border-[3px] border-white overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.11)]">
        <Image data={image} />
      </div>
      <div className="gov-name font-display text-lg font-semibold mb-1.5">
        {name}
      </div>
      <div className="gov-title text-t3 text-sm">{position}</div>
    </div>
  );
};

export default Speaker;
