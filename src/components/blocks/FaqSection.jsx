"use client";

import { useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Heading from "@/components/Heading";

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-gray-300 rounded-[10px] overflow-hidden">
      <button
        type="button"
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
      >
        <span className="font-display text-base font-semibold text-gray-900 text-left">
          {question}
        </span>

        <div
          className={`w-6.5 h-6.5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
            isOpen ? "bg-red-600 rotate-45" : ""
          }`}
        >
          <svg
            className={`w-3 h-3 ${isOpen ? "text-white" : "text-gray-700"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-5 text-sm text-gray-600">
          <BlocksRenderer content={answer} />
        </div>
      )}
    </div>
  );
}

export default function FaqSection({ data }) {
  const [openIndex, setOpenIndex] = useState(data?.faqs?.length ? 0 : null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const { text, content } = data?.textBox || {};

  return (
    <section id="faq" className="py-25 bg-white">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-20 items-start">
          {/* Sidebar */}
          <div>
            <Heading data={data?.heading} />

            <div className="faq-contact bg-off border border-border p-7 rounded-xl mt-6">
              {text && (
                <div className="font-bold text-t3 uppercase mb-1.5">{text}</div>
              )}

              {content && (
                <div className="faq-c-val">
                  <BlocksRenderer content={content} />
                </div>
              )}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-2">
            {data?.faqs?.map((item, i) => (
              <FAQItem
                key={i}
                question={item?.text}
                answer={item?.content}
                isOpen={openIndex === i}
                onClick={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
