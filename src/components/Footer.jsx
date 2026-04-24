"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { renderIcon } from "@/components/SvgFromUrl";

export default function Footer({ data }) {
  const { logo, by, text, address, copyright } = data || {};

  return (
    <footer className="text-t4 bg-ink text-sm">
      <div className="container mx-auto px-4 py-15">
        <div className="flex gap-8">
          <div className="space-x-100">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${logo?.media?.url}`}
              alt="footer logo"
              className="h-10 w-auto mb-4"
            />
            <div>
              <ul className="space-y-2">
                {address?.map((item) => (
                  <>
                    {item.text && (
                      <li key={item.id}>
                        <a
                          href={item?.link || "#"}
                          className="hover:text-white transition flex gap-2 items-start"
                        >
                          {item?.icon &&
                            renderIcon({
                              icon: item.icon,
                              className: "inline-flex w-4 shrink-0 mt-[6px]",
                            })}
                          <span>{item.text}</span>
                        </a>
                      </li>
                    )}{" "}
                  </>
                ))}
              </ul>
            </div>
          </div>

          <div className="text mt-10">
            <BlocksRenderer content={text} />
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between border-t border-t4 py-5.5 text-sm">
          <p>{copyright}</p>
          <p>{by}</p>
        </div>
      </div>
    </footer>
  );
}
