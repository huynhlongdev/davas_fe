"use client";

import { Link, usePathname } from "@/lib/navigation";

import { useLocale } from "next-intl";

const locales = [
  {
    code: "en",
    label: "EN",
  },
  {
    code: "vi",
    label: "VI",
  },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const locale = useLocale();

  return (
    <div className="md:ml-4.5 flex items-center gap-2 border border-border rounded-[5px] text-sm font-medium px-2.5 py-2 uppercase">
      {locales.map((item, index) => (
        <div key={item.code} className="flex items-center gap-2">
          <Link
            href={pathname}
            locale={item.code}
            className={`transition ${
              locale === item.code ? "text-red" : "text-t1 hover:text-red"
            }`}
          >
            {item.label}
          </Link>

          {index < locales.length - 1 && <span>|</span>}
        </div>
      ))}
    </div>
  );
}
