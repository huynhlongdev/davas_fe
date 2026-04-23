"use client";

import React, { useState } from "react";

const faqItems = [
  {
    q: "When is DAVAS 2026 happening?",
    a: "DAVAS 2026 takes place May 25-27, 2026 in Da Nang, Vietnam at the Ariyana Convention Centre.",
  },
  {
    q: "How do I register?",
    a: 'Click the "Register Now" button in the navigation or hero section to sign up for DAVAS 2026.',
  },
  {
    q: "Is there a registration fee?",
    a: "Registration details and pricing will be available on the registration page.",
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-[10px] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-150"
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
            className={`w-3 h-3 ${isOpen ? "text-white" : ""}`}
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
        <div className="px-6 pb-5 text-sm text-gray-600 leading-1.75">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-25 bg-white">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-20 items-start">
          {/* Sidebar */}
          <div>
            <div className="inline-flex items-center gap-2.25 text-xs font-bold tracking-[0.13em] text-red-600 uppercase mb-3.5">
              <span className="w-5 h-0.5 bg-red-600" />
              FAQ
            </div>
            <h2 className="font-display text-[clamp(30px,3.8vw,50px)] font-bold tracking-[-0.03em] text-gray-900 leading-1.08 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600 leading-1.78 font-light mb-6">
              Everything you need to know about DAVAS 2026.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-2">
            {faqItems.map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
