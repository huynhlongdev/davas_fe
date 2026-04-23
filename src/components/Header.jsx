"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ data }) {
  const { logo, menu, cta } = data || {};

  return (
    <header className=" bg-white border-b border-border w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between h-18">
          {/* LEFT: Logo */}
          <div className="flex items-center">
            <Link href={logo?.link || "/"} className="flex items-center">
              {logo?.media?.url && (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${logo?.media?.url}`}
                  alt="logo"
                  className="h-10 w-auto"
                />
              )}
            </Link>
          </div>

          <div className="inline-flex items-center gap-2.5">
            {/* CENTER: Menu */}
            <nav className="hidden md:flex items-center gap-0.5">
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

            {/* RIGHT: CTA & Language Switcher */}
            <div className="flex items-center gap-4">
              {cta?.isExternal ? (
                <a
                  href={cta?.linkTo || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red hover:bg-red-light text-white font-display font-medium text-sm border-0 cursor-pointer px-5.5 py-1.5 transition rounded-[7px] uppercase"
                >
                  {cta?.text || "Button"}
                </a>
              ) : (
                <Link
                  href={cta?.linkTo || "/"}
                  className="bg-red hover:bg-red-light text-white font-display font-medium text-sm border-0 cursor-pointer px-5.5 py-1.5 transition rounded-[7px] uppercase"
                >
                  {cta?.text || "Button"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
