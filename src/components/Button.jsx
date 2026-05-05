"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import Icon from "@/components/SvgFromUrl";
import { usePopup } from "@/providers/PopupProvider";

const VARIANTS = {
  style1: "bg-red text-white hover:opacity-90",
  style2: "bg-white border border-border text-t1 hover:bg-off",
};

const Button = ({ data: button, className: customClass = "", onClick }) => {
  if (!button) return null;

  const { openPopup } = usePopup();
  const { text, link, icon, variant, action, iconPosition = "left" } = button;

  const variantClass = VARIANTS[variant] || VARIANTS.style1;
  const className = `inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-bold gap-2 cursor-pointer capitalize transition-all duration-200 ${variantClass} ${customClass}`;

  const renderIcon = useCallback(
    () => icon && <Icon icon={icon} className="w-4 h-4 shrink-0" />,
    [icon],
  );

  const content = (
    <>
      {icon && iconPosition === "left" && renderIcon()}
      <span>{text}</span>
      {icon && iconPosition === "right" && renderIcon()}
    </>
  );

  const handleClick = useCallback(
    (e) => {
      onClick?.(e);
      e.preventDefault();
    },
    [onClick],
  );

  // Kiểm tra link có phải anchor (#) không
  const isAnchorLink = link?.startsWith("#");
  // Kiểm tra link ngoài (external)
  const isExternalLink = link?.startsWith("http") || link?.startsWith("https");

  // Nếu có onClick -> ưu tiên button
  if (onClick) {
    return (
      <button className={className} onClick={handleClick}>
        {content}
      </button>
    );
  }

  // Nếu action là popup
  if (action === "popup") {
    return (
      <button className={className} onClick={openPopup}>
        {content}
      </button>
    );
  }

  // Nếu có link
  if (link) {
    // Anchor link (#) -> dùng thẻ a thường
    if (isAnchorLink) {
      return (
        <a href={link} className={className}>
          {content}
        </a>
      );
    }

    // External link -> dùng thẻ a với target="_blank"
    if (isExternalLink) {
      return (
        <a
          href={link}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    // Internal link -> dùng Link của Next.js
    return (
      <Link href={link} className={className}>
        {content}
      </Link>
    );
  }

  // Fallback: button thường
  return <button className={className}>{content}</button>;
};

export default React.memo(Button);
