"use client";

import React, { useState } from "react";
import Heading from "../Heading";
import Speaker from "../Speaker";
import Button from "../Button";

export default function GuestSection({ data }) {
  const { heading, guests } = data;

  const [activeTab, setActiveTab] = useState(guests?.[0]?.documentId || null);
  const currentGuest = guests?.find((guest) => guest.documentId === activeTab);
  const speakers = currentGuest?.peoples || [];

  const displayedSpeakers = speakers.slice(0, 8);
  const hasMoreSpeakers = speakers.length > 8;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  console.log("isPopupOpen", currentGuest);

  return (
    <section id="speakers" className="py-25 bg-white">
      <div className="max-w-[1360px] mx-auto px-10">
        <Heading data={heading} />

        {guests && guests.length > 0 && (
          <div className="inline-flex gap-0 mb-9 bg-off2 p-1 rounded-[10px] border border-border flex-wrap">
            {guests.map((tab) => (
              <button
                key={tab.documentId}
                onClick={() => setActiveTab(tab.documentId)}
                className={`cursor-pointer font-display text-sm font-semibold tracking-[0.05em] px-5 py-2.25 rounded transition-all duration-180 ${
                  activeTab === tab.documentId
                    ? "bg-white text-t1"
                    : "text-t3 hover:text-t1"
                }`}
              >
                {tab.text || tab.type}
              </button>
            ))}
          </div>
        )}

        {displayedSpeakers.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4.5 mb-7">
            {displayedSpeakers.map((speaker, index) => (
              <Speaker key={speaker.documentId || index} data={speaker} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No speakers available for this category
          </div>
        )}

        <div className="flex items-center justify-between mt-7 pt-6 border-t-[1px] border-border">
          <span className="text-t3">
            Showing 8 of {speakers.length} representatives
          </span>
          <Button
            data={{
              text: `View All ${currentGuest?.text || "View All"}`,
              variant: "style3",
            }}
            onClick={() => setIsPopupOpen(true)}
            className="bg-off py-2"
          />
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-10 py-7 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.11)]">
            {/* Popup Header */}
            <div className="sticky top-0 flex items-center justify-between px-10 py-7 border-b border-border bg-white">
              <div>
                <h2 className="text-3xl font-bold text-t1 mb-1.5">
                  {currentGuest?.text || currentGuest?.type}
                </h2>
                <p className="text-t3">
                  All {speakers.length <= 8 ? speakers.length : 8}
                  {currentGuest?.text} at DAVAS 2026
                </p>
              </div>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-10 py-7 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4.5 mb-8">
                {speakers.map((speaker, index) => (
                  <Speaker key={speaker.documentId || index} data={speaker} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
