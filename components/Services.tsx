"use client";

import { useEffect, useRef } from "react";

export default function Services() {
  const services = [
    ["💈", "Classic Haircut", "Precision cut tailored to your face shape and style.", "₹250"],
    ["🪒", "Beard Trim", "Shape, edge and style your beard to perfection.", "₹150"],
    ["✦", "Hot Towel Shave", "Traditional straight-razor shave with hot towel prep.", "₹299"],
    ["🎨", "Hair Color", "Professional coloring with premium salon products.", "₹499"],
    ["💆", "Head Massage", "Relaxing oil massage for scalp health and stress relief.", "₹199"],
    ["✂", "Kids Cut", "Gentle, patient cuts for boys under 12.", "₹150"],
  ];

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <p className="text-[10px] sm:text-xs tracking-[4px] text-[#c9a84c] uppercase">
          What We Offer
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-[3px] uppercase mt-2">
          Services & Pricing
        </h2>

        <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto my-6"></div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-[#2a2a2a] mt-12 opacity-0 translate-y-10 transition-all duration-700"
        >
          {services.map(([icon, name, desc, price], i) => (
            <ServiceCard
              key={i}
              icon={icon}
              name={name}
              desc={desc}
              price={price}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ icon, name, desc, price }: any) {
  return (
    <div
      className="
        border border-[#2a2a2a] 
        px-6 py-10 sm:py-12 
        flex flex-col items-center text-center
        transition-all duration-300
        hover:bg-[#1a1a1a]
        hover:border-[#c9a84c]
        hover:scale-[1.03]
      "
    >
      {/* Icon */}
      <div className="text-3xl sm:text-4xl mb-5">
        {icon}
      </div>

      {/* Title */}
      <div className="uppercase tracking-[3px] text-lg sm:text-xl mb-3">
        {name}
      </div>

      {/* Description */}
      <p className="text-[#888] italic text-sm sm:text-base leading-relaxed max-w-xs mb-6">
        {desc}
      </p>

      {/* Price Label */}
      <div className="text-[10px] tracking-[3px] text-[#666] uppercase mb-1">
        Starting At
      </div>

      {/* Price */}
      <div className="text-[#c9a84c] text-2xl sm:text-3xl font-semibold">
        {price}
      </div>
    </div>
  );
}