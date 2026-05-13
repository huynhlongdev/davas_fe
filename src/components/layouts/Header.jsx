"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import { usePopup } from "@/providers/PopupProvider";

export default function Header({ data }) {
  const { logo, menu, cta } = data || {};

  const { openPopup } = usePopup();

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white border-b border-border w-full fixed top-0 z-50">
      <div className="max-w-[1360px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* LEFT: Logo */}
          <div className="flex items-center shrink-0">
            <Link href={logo?.link || "/"} className="flex items-center">
              {logo?.media?.url && (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${logo?.media?.url}`}
                  alt="logo"
                  className="h-8 md:h-10 w-auto"
                />
              )}
            </Link>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:inline-flex items-center gap-2.5">
            {/* MENU */}
            <nav className="flex items-center gap-0.5">
              {menu?.map((item) => {
                const href = item?.link || "#";
                const isExternal = item?.isExternal;

                if (isExternal) {
                  return (
                    <a
                      key={item.id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-t2 hover:text-t1 hover:bg-off transition py-1.5 px-[13px] rounded-[5px]"
                    >
                      {item.text}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={href}
                    className="font-medium text-t2 hover:text-t1 hover:bg-off transition py-1.5 px-[13px] rounded-[5px]"
                  >
                    {item.text}
                  </Link>
                );
              })}
            </nav>

            <LanguageSwitcher />

            {/* CTA */}
            <Link
              href={cta?.linkTo || "/"}
              className="bg-red hover:bg-red-light text-white font-display font-medium text-sm border-0 cursor-pointer px-5 py-2 transition rounded-[7px] uppercase"
              onClick={openPopup}
            >
              {cta?.text || "Button"}
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex flex-wrap justify-center gap-4.5">
            <LanguageSwitcher />
            <button
              className={`md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 cursor-pointer ${mobileMenu ? "active" : ""}`}
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <span className="w-6 h-0.5 bg-black block" />
              <span className="w-6 h-0.5 bg-black block" />
              <span className="w-6 h-0.5 bg-black block" />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden py-6 border-t border-border min-h-[calc(100vh-64px)]">
            <nav className="flex flex-col">
              {menu?.map((item) => {
                const href = item?.link || "#";
                const isExternal = item?.isExternal;

                if (isExternal) {
                  return (
                    <a
                      key={item.id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 text-t2 font-medium border-b border-border"
                      onClick={() => setMobileMenu(false)}
                    >
                      {item.text}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={href}
                    className="py-3 text-t2 font-medium border-b border-border"
                    onClick={() => setMobileMenu(false)}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center justify-between gap-4 mt-4">
              <Link
                href={cta?.linkTo || "/"}
                className="bg-red hover:bg-red-light text-white font-display font-medium text-sm px-5 py-2 rounded-[7px] uppercase"
                onClick={() => {
                  openPopup();
                  setMobileMenu(false);
                }}
              >
                {cta?.text || "Button"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
