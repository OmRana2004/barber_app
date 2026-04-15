"use client";

import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export default function Hero() {
  useHeroAnimation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 overflow-hidden bg-[radial-gradient(ellipse_at_center,#1c1508_0%,#0d0d0d_70%)]"
    >
      {/* 🔥 BACKGROUND ANIMATION */}
      <div
        id="hero-tools"
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl">

        {/* Tag */}
        <div className="text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] uppercase text-[#c9a84c] mb-5 sm:mb-6 border border-[#c9a84c] px-3 sm:px-5 py-1.5 sm:py-2">
          EST. 2018 — PREMIUM GROOMING
        </div>

        {/* Title */}
        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] tracking-[2px] sm:tracking-[4px] uppercase leading-tight mb-3 sm:mb-4">
          THE <span className="text-[#c9a84c]">SHARP</span>
          <br />
          EDGE
        </h1>

        {/* Subtitle */}
        <p className="text-[#888] italic text-sm sm:text-base md:text-lg mb-8 sm:mb-10">
          Where every cut tells a story
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto">

          <button className="bg-[#c9a84c] text-black px-6 sm:px-10 py-3 sm:py-4 text-[10px] sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase font-semibold hover:bg-[#e8c76a] transition w-full sm:w-auto">
            Book Appointment
          </button>

          <button className="border border-[#c9a84c] text-[#c9a84c] px-6 sm:px-10 py-3 sm:py-4 text-[10px] sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase hover:bg-[#c9a84c] hover:text-black transition w-full sm:w-auto">
            Our Services
          </button>

        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">

          <Stat number="5000+" label="Clients Served" />
          <Divider />
          <Stat number="8+" label="Years Experience" />
          <Divider />
          <Stat number="4.9★" label="Avg. Rating" />

        </div>

      </div>
    </section>
  );
}

function Stat({ number, label }: any) {
  return (
    <div className="text-center">
      <div className="text-xl sm:text-2xl md:text-3xl text-[#c9a84c] font-semibold">
        {number}
      </div>
      <div className="text-[10px] sm:text-xs tracking-[1px] sm:tracking-[2px] uppercase text-[#888] mt-1">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden sm:block w-px h-8 sm:h-10 bg-[#2a2a2a]" />
  );
}