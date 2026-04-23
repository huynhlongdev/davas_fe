"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import CardList from "./CardList";

export default function GuestSection({ data }) {
  const { item: sections = [] } = data;

  console.log(">>GuestSection", sections);

  return (
    <div>
      {sections.map((s, index) => (
        <section key={s?.id || index} className="py-12">
          <div className="container mx-auto px-4">
            {/* Heading */}
            {s?.heading && (
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {s.heading.heading}
                </h2>

                {s?.heading?.description && (
                  <div className="text-gray-600 max-w-2xl mx-auto">
                    <BlocksRenderer content={s.heading.description} />
                  </div>
                )}
              </div>
            )}

            {/* Card List */}
            {s?.cards && <CardList data={s?.cards} />}
          </div>
        </section>
      ))}
    </div>
  );
}
