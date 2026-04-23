"use client";

import React, { useState } from "react";
import RegisterModal from "./modals/RegisterModal";

export default function Navigation() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#speakers", label: "Speakers" },
    { href: "#program", label: "Program" },
    { href: "#investment", label: "Investment" },
    { href: "#partners", label: "Partners" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-200 h-[72px] bg-white/94 backdrop-blur-[20px] border-b border-gray-200">
        <div className="max-w-[1360px] mx-auto px-10 h-full flex items-center gap-0">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-[11px] no-underline mr-auto"
          >
            <div className="w-[38px] h-[38px] bg-red-600 clip-path-polygon flex items-center justify-center flex-shrink-0">
              <span className="text-white font-display font-bold text-sm tracking-tighter">
                D
              </span>
            </div>
            <span className="font-display font-bold text-[15px] tracking-wider text-gray-900">
              DAVAS{" "}
              <em className="text-red-600 font-style-normal not-italic">
                2026
              </em>
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden lg:flex gap-0.5 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="no-underline text-gray-600 text-xs font-medium tracking-[0.01em] px-3 py-1.5 rounded transition-colors duration-180 hover:text-gray-900 hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 ml-4.5">
            <button className="text-xs font-bold tracking-widest text-gray-500 px-2.5 py-1.25 border border-gray-300 rounded-xs bg-transparent transition-all duration-150 hover:border-gray-600 hover:text-gray-600">
              VI | EN
            </button>
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="bg-red-600 text-white font-display text-xs font-bold tracking-[0.07em] px-5.5 py-2.25 rounded transition-all duration-180 hover:bg-red-700 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Register Now
            </button>
          </div>
        </div>
      </nav>

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </>
  );
}
