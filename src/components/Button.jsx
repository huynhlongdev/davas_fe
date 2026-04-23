"use client";

import React, { useEffect, useState } from "react";
import { usePopup } from "@/providers/PopupProvider";

import Link from "next/link";
import { renderIcon } from "@/components/SvgFromUrl";

const Button = ({ data: button, className: customClass = "" }) => {
  if (!button) return null;

  const { openPopup } = usePopup();

  const { text, link, hasLink, icon, isExternal, variant, iconPosition } =
    button;

  const baseClass = `inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-bold gap-2 cursor-pointer capitalize transition-all duration-200 ${customClass}`;

  const variants = {
    style1: "bg-red text-white hover:opacity-90",
    style2: "bg-white border border-border text-t1 hover:bg-off",
  };

  const className = `${baseClass} ${variants[variant] || variants.primary}`;

  const content = (
    <>
      {iconPosition === "left" &&
        renderIcon({ icon, className: "w-4 h-4 shrink-0" })}

      <span>{text}</span>

      {iconPosition === "right" &&
        renderIcon({ icon, className: "w-4 h-4 shrink-0" })}
    </>
  );

  if (!hasLink || !link) {
    return <button className={className}>{content}</button>;
  }

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={openPopup}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={link} className={className} onClick={openPopup}>
      {content}
    </Link>
  );
};

export default Button;
