"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function Footer({ data }) {
  const { logo, by, text, address, copyright } = data || {};

  return (
    <footer className="text-[#ffffff4d] bg-ink text-[14px">
      <div className="container mx-auto px-4 py-10">
        {/* GRID */}
        <div className="flex flex-col">
          {/* COL 1: Logo + copyright */}
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${logo?.media?.url}`}
              alt="footer logo"
              className="h-10 w-auto mb-4"
            />
          </div>

          <div className="text">
            <BlocksRenderer content={text} />
          </div>

          {/* COL 2: Nav 1 */}
          <div>
            <ul className="space-y-2">
              {address?.map((item) => (
                <li key={item.id}>
                  <a
                    href={item?.link || "#"}
                    className="hover:text-white transition"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between">
          <p className="text-sm">{copyright}</p>
          <p>{by}</p>
        </div>
      </div>
    </footer>
  );
}
