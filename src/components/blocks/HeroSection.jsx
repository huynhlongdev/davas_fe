"use client";

import Countdown from "@/components/Countdown";
import Button from "@/components/Button";

export default function Hero({ data }) {
  const { counters, countdown, buttons } = data;

  return (
    <section className="relative pt-[72px] bg-white overflow-hidden flex flex-col">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(200, 16, 46, 0.045) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(200, 16, 46, 0.045) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glows */}
      <div
        className="absolute -top-[180px] -right-40 w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 16, 46, 0.09) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-[120px] left-[8%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244, 121, 32, 0.06) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="hero-i max-w-[1360px] mx-auto px-10 py-[72px] pb-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
        <div className="">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full mb-6.5">
            <div className="w-1.75 h-1.75 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.12em] text-red-600 uppercase">
              Da Nang · May 25–27, 2026
            </span>
          </div>

          {/* Title */}
          <h1 className="font-hero text-[clamp(56px,6.5vw,70px)] font-display font-semibold leading-[1.2] tracking-[0.01em] text-gray-900 mb-7">
            DA NANG <span className="text-red-600">VENTURE</span> &amp; ANGEL
            SUMMIT
          </h1>

          {/* Subtitle */}
          <p className="text-base text-gray-600 max-w-[540px] mb-10 font-light">
            Vietnam's international innovation and investment forum — connecting
            startups, venture capital, and global ecosystems in Da Nang.
          </p>

          {/* Buttons */}
          <div className="flex gap-3.5 flex-wrap items-center mb-13">
            {buttons.map((button, index) => {
              return <Button key={index} data={button} />;
            })}
          </div>

          {/* Stats */}
          <div className="flex gap-9 mt-13 pt-11 border-t border-gray-200">
            {counters.map((stat, i) => (
              <div key={i}>
                <div className="font-display text-[34px] font-bold tracking-[-0.025em] leading-none">
                  {stat.number}{" "}
                  {stat.isPlus && (
                    <em className="text-red-600 font-style-normal not-italic">
                      +
                    </em>
                  )}
                </div>
                <div className="text-xs text-gray-500 font-semibold mt-1.25 tracking-[0.05em] uppercase">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Countdown data={countdown} />
      </div>
    </section>
  );
}
