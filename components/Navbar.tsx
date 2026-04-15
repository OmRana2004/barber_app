"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.95)] border-b border-[#2a2a2a]">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 h-14 sm:h-16">

        {/* Logo */}
        <div className="text-[0.9rem] sm:text-[1.1rem] md:text-[1.3rem] tracking-[2px] sm:tracking-[3px] text-[#c9a84c] uppercase font-bold whitespace-nowrap">
          ✦ The Sharp Edge
        </div>

        {/* Links */}
        <div className="flex gap-3 sm:gap-5 md:gap-8">

          <a
            href="#offers"
            className="text-[0.65rem] sm:text-[0.75rem] md:text-[0.8rem] tracking-[1px] sm:tracking-[2px] uppercase text-[#888] hover:text-[#c9a84c]"
          >
            Offers
          </a>

          <a
            href="#services"
            className="text-[0.65rem] sm:text-[0.75rem] md:text-[0.8rem] tracking-[1px] sm:tracking-[2px] uppercase text-[#888] hover:text-[#c9a84c]"
          >
            Services
          </a>

          <a
            href="#booking"
            className="text-[0.65rem] sm:text-[0.75rem] md:text-[0.8rem] tracking-[1px] sm:tracking-[2px] uppercase text-[#888] hover:text-[#c9a84c]"
          >
            Book Now
          </a>

        </div>

      </div>
    </nav>
  );
}