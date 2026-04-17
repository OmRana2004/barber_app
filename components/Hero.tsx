"use client";

import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export default function Hero() {
  useHeroAnimation();

  return (
  <section
  id="hero"
  className="
    relative
    min-h-auto sm:min-h-[calc(100vh-64px)]
    flex
    items-start sm:items-center
    justify-center
    text-center
    px-3 sm:px-6
    pt-16 sm:pt-16
    pb-4 sm:pb-16
    overflow-hidden
    bg-[radial-gradient(ellipse_at_center,#1c1508_0%,#0d0d0d_70%)]
  "
>
      {/* Animation Layer */}
      <div
        id="hero-tools"
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg sm:max-w-2xl md:max-w-4xl">

        {/* Tag */}
        <div className="text-[9px] sm:text-xs tracking-[3px] sm:tracking-[4px] uppercase text-[#c9a84c] mb-4 sm:mb-6 border border-[#c9a84c] px-3 sm:px-5 py-1 sm:py-2">
          EST. 2018 — PREMIUM GROOMING
        </div>

        {/* Title */}
        <h1 className="text-[26px] sm:text-[42px] md:text-[64px] lg:text-[80px] tracking-[2px] sm:tracking-[4px] uppercase leading-tight mb-3 sm:mb-4">
          THE <span className="text-[#c9a84c]">SHARP</span>
          <br />
          EDGE
        </h1>

        {/* Subtitle */}
        <p className="text-[#888] italic text-[11px] sm:text-sm md:text-lg mb-6 sm:mb-10 max-w-xs sm:max-w-md">
          Where every cut tells a story
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-2 sm:gap-4 mb-10 sm:mb-16 w-full justify-center">

          <button className="flex-1 sm:flex-none bg-[#c9a84c] text-black px-4 sm:px-8 py-2.5 sm:py-4 text-[9px] sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase font-semibold hover:bg-[#e8c76a] transition">
            Book Appointment
          </button>

          <button className="flex-1 sm:flex-none border border-[#c9a84c] text-[#c9a84c] px-4 sm:px-8 py-2.5 sm:py-4 text-[9px] sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase hover:bg-[#c9a84c] hover:text-black transition">
            Our Services
          </button>

        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-4 sm:gap-10 flex-nowrap">

          <Stat number="5000+" label="Clients" />
          <Divider />
          <Stat number="8+" label="Years" />
          <Divider />
          <Stat number="4.9★" label="Rating" />

        </div>

      </div>
    </section>
  );
}

function Stat({ number, label }: any) {
  return (
    <div className="text-center min-w-17.5">
      <div className="text-lg sm:text-2xl md:text-3xl text-[#c9a84c] font-semibold">
        {number}
      </div>
      <div className="text-[9px] sm:text-xs tracking-[1px] sm:tracking-[2px] uppercase text-[#888] mt-1">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="w-px h-6 sm:h-10 bg-[#2a2a2a]" />;
}