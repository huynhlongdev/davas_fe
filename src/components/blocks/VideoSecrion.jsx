"use client";

import React, { useState } from "react";
import Button from "../Button";
import getEmbedUrl from "@/utils/getVideoUrl";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const VideoSection = ({ data }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const { heading, videoUrl, backgroundImage } = data || {};
  const { description, subText, primaryText } = heading || {};

  const embedUrl = getEmbedUrl(videoUrl, true);

  return (
    <section
      style={
        backgroundImage?.url
          ? {
              background: `linear-gradient(to right, rgba(12, 11, 10, .85) 0%, rgba(12, 11, 10, .4) 60%, transparent 100%), url(${process.env.NEXT_PUBLIC_API_URL}${backgroundImage.url}) center / cover no-repeat`,
            }
          : {}
      }
      className="py-20"
    >
      <div className="max-w-[1360px] px-4 mx-auto">
        <div>
          {subText && (
            <div className="text-[#FF9A3C] text-sm font-semibold uppercase mb-3">
              {subText}
            </div>
          )}

          {primaryText && (
            <h2
              className="text-[clamp(38px,5vw,72px)] leading-[1.2] font-display font-semibold text-white mb-4"
              dangerouslySetInnerHTML={{ __html: primaryText }}
            ></h2>
          )}

          {description && (
            <div className="text-[rgba(255,255,255,.6)] mb-8">
              <BlocksRenderer content={description} />
            </div>
          )}
        </div>

        {embedUrl && (
          <button
            className="w-16 h-16 text-white rounded-full bg-white/15 border-2 border-white/40 inline-flex items-center justify-center cursor-pointer backdrop-blur-md transition-all duration-200 hover:bg-red hover:border-red"
            onClick={() => setOpenPopup(true)}
          >
            <svg viewBox="0 0 24 24" width={22} height={22}>
              <polygon
                fill="currentColor"
                points="5 3 19 12 5 21 5 3"
              ></polygon>
            </svg>
          </button>
        )}
      </div>

      {openPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-10 py-7 bg-black/50 backdrop-blur-sm">
          <div className="p-5 relative bg-black rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.11)]">
            {/* Popup Header */}
            <div className="rounded-lg">
              <button
                onClick={() => setOpenPopup(false)}
                className="absolute right-2 top-2 z-10 text-white hover:text-red bg-[rgba(255,255,255,.15)] w-[34px] h-[34px] flex items-center justify-center rounded-full transition-colors cursor-pointer"
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

              {/* Video Container */}
              <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={embedUrl}
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
