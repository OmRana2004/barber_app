"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 border-b border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 md:px-8 h-14 sm:h-16">

        {/* Logo */}
        <div className="text-[#c9a84c] font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-sm md:text-lg whitespace-nowrap">
          ✦ The Sharp Edge
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">

          <NavLink label="Offers" href="#offers" />
          <NavLink label="Services" href="#services" />
          <NavLink label="Book Now" href="#booking" />

        </div>

      </div>
    </nav>
  );
}

function NavLink({ label, href }: any) {
  return (
    <a
      href={href}
      className="
        text-[9px] sm:text-xs md:text-sm
        tracking-[1px] sm:tracking-[2px]
        uppercase
        text-[#888]
        hover:text-[#c9a84c]
        transition
        whitespace-nowrap
      "
    >
      {label}
    </a>
  );
}