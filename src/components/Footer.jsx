"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { renderIcon } from "@/components/SvgFromUrl";

export default function Footer({ data = {} }) {
  const {
    logo,
    by = "",
    text = null,
    address = [],
    copyright = "",
  } = data;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";

  const logoUrl = logo?.media?.url
    ? `${baseUrl}${logo.media.url}`
    : null;

  const renderAddressItem = (item) => {
    if (!item?.text) return null;

    const href = item.link || "#";

    return (
      <li key={item.id}>
        <a
          href={href}
          className="flex items-start gap-2 transition hover:text-white"
        >
          {item.icon &&
            renderIcon({
              icon: item.icon,
              className: "mt-1 h-4 w-4 shrink-0",
            })}

          <span>{item.text}</span>
        </a>
      </li>
    );
  };

  return (
    <footer className="bg-ink text-sm text-t4">
      <div className="container mx-auto px-4 py-15">
        <div className="grid gap-10 md:grid-cols-[320px_1fr]">
          {/* Left */}
          <div>
            {logoUrl && (
              <div className="relative mb-6 h-10 w-44">
                <Image
                  src={logoUrl}
                  alt="Footer logo"
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {address.length > 0 && (
              <ul className="space-y-3">
                {address.map(renderAddressItem)}
              </ul>
            )}
          </div>

          {/* Right */}
          <div>
            {text && <BlocksRenderer content={text} />}
          </div>
        </div>
      </div>

      <div className="border-t border-t4">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>{copyright}</p>
            <p>{by}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}