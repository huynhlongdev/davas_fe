"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10 py-15 px-10">
      <div className="max-w-[1360px] mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-13 mb-13">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.75 mb-4">
              <div className="w-[38px] h-[38px] bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">
                  D
                </span>
              </div>
              <span className="font-display font-bold text-sm tracking-wider text-white">
                DAVAS <em className="text-red-600 not-italic">2026</em>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-1.75 font-light">
              Vietnam's international innovation and investment forum connecting
              startups, venture capital, and global ecosystems.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-bold tracking-[0.13em] text-white/30 uppercase mb-4">
              Navigation
            </div>
            <div className="space-y-2.25">
              {["About", "Speakers", "Program", "Investment"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-white/55 hover:text-white transition-colors duration-150 block"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="text-xs font-bold tracking-[0.13em] text-white/30 uppercase mb-4">
              Support
            </div>
            <div className="space-y-2.25">
              {["FAQ", "Contact", "Partners"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-150 block"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs font-bold tracking-[0.13em] text-white/30 uppercase mb-4">
              Follow
            </div>
            <div className="space-y-2.25">
              {["LinkedIn", "Twitter", "Facebook"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-150 block"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/25">
            © 2026 DAVAS. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/30">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600/50" />
            Live Event
          </div>
        </div>
      </div>
    </footer>
  );
}
