"use client";

import React, { useEffect, useMemo, useState } from "react";
import Heading from "../shared/Heading";

export default function ProgramSection({ data }) {
  const tabs = data?.tabsProgram ?? [];

  /**
   * Active Day Tab
   */
  const [activeTab, setActiveTab] = useState(null);

  /**
   * Active Program Tab
   */
  const [activeSubTab, setActiveSubTab] = useState(null);

  /**
   * Popup
   */
  const [openModal, setOpenModal] = useState(false);

  /**
   * Current Day
   */
  const currentTab = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab) || tabs[0] || null;
  }, [tabs, activeTab]);

  /**
   * Programs in current tab
   */
  const programs = currentTab?.programs ?? [];

  /**
   * Current Program
   */
  const currentProgram = useMemo(() => {
    return (
      programs.find((item) => item.documentId === activeSubTab) ||
      programs[0] ||
      null
    );
  }, [programs, activeSubTab]);

  /**
   * Init active tab when data changes
   */
  useEffect(() => {
    if (!tabs.length) return;
    setActiveTab(tabs[0].id);
  }, [tabs]);

  /**
   * Reset sub tab when changing day tab
   */
  useEffect(() => {
    if (!programs.length) {
      setActiveSubTab(null);
      return;
    }

    setActiveSubTab(programs[0].documentId);
  }, [currentTab]);

  if (!tabs.length) return null;

  return (
    <section id="program" className="bg-gray-50 py-25">
      <div className="mx-auto max-w-[1360px] px-4">
        <Heading data={data?.heading} />

        <div className="overflow-hidden rounded-xl">
          {/* Day Tabs */}
          <div className="flex overflow-hidden rounded-t-xl">
            {tabs.map((day) => {
              const isActive = activeTab === day.id;

              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => setActiveTab(day.id)}
                  className={`flex-1 border px-5 py-4 text-center cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "border-ink bg-ink text-white"
                      : "border-gray-300 bg-white text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className="font-display font-semibold">
                    {day.tabName}
                  </div>

                  <div className="mt-1 text-xs opacity-70">{day.dateText}</div>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="border border-t-0 border-gray-300 bg-white p-8">
            {/* Program Tabs */}
            <div className="mb-8 flex flex-wrap gap-3">
              {programs
                ?.filter((program) => program?.title && program.title !== "|")
                .map((program) => {
                  const isActive = activeSubTab === program.documentId;

                  return (
                    <button
                      key={program.id}
                      type="button"
                      onClick={() => setActiveSubTab(program.documentId)}
                      className={`rounded-lg border-2 px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200 ${
                        isActive
                          ? "border-red-400 bg-red-50 text-red-600"
                          : "border-gray-200 bg-white text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {program.title}
                    </button>
                  );
                })}
            </div>

            {/* Program Content */}
            {currentProgram && (
              <div className="space-y-4">
                {currentProgram.timelines?.length > 0 && (
                  <div className="space-y-3">
                    {currentProgram.timelines.map((item, index) =>
                      item.title ? (
                        <div
                          key={index}
                          className="rounded-lg border p-5.5 grid grid-cols-[110px_1fr] gap-5.5 border-border"
                        >
                          <div className="font-display font-semibold text-red pt-0.2">
                            {item?.time}
                          </div>
                          <div>
                            <div className="font-display font-semibold text-t1 pt-0.2 mb-2">
                              {item.title}
                            </div>
                            <div className="text-t2 text-sm">{item?.text}</div>
                          </div>
                        </div>
                      ) : null,
                    )}
                  </div>
                )}

                {currentTab?.layoutEvent && (
                  <div className="text-right w-full">
                    <button
                      type="button"
                      onClick={() => setOpenModal(true)}
                      className="rounded-lg inline-flex gap-1.5 font-medium font-display border border-border px-4 py-2 bg-white text-sm text-t1 hover:text-red hover:border-red cursor-pointer"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                        <path d="M16 2v4M8 2v4M3 10h18"></path>
                      </svg>
                      View Full Layout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-white p-6">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4 text-xl cursor-pointer hover:text-red"
            >
              ✕
            </button>

            <h3 className="mb-5 text-xl font-semibold">Event Layout</h3>

            {currentTab?.layoutEvent?.url ? (
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${currentTab.layoutEvent.url}`}
                alt={currentTab.layoutEvent.alternativeText || "Layout Event"}
                className="w-full rounded-xl"
              />
            ) : (
              <p>No layout image.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
