"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    ["💈", "Classic Haircut", "Precision cut tailored to your face shape and style.", "₹250"],
    ["🪒", "Beard Trim", "Shape, edge and style your beard to perfection.", "₹150"],
    ["✦", "Hot Towel Shave", "Traditional straight-razor shave with hot towel prep.", "₹299"],
    ["🎨", "Hair Color", "Professional coloring with premium salon products.", "₹499"],
    ["💆", "Head Massage", "Relaxing oil massage for scalp health and stress relief.", "₹199"],
    ["✂", "Kids Cut", "Gentle, patient cuts for boys under 12.", "₹150"],
  ];

  return (
    <section
      id="services"
      className=" pt-12 sm:pt-16 flex justify-center bg-[#0d0d0d]"
    >
      <div className="w-full max-w-105 sm:max-w-6xl px-3 sm:px-6 text-center">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-[4px] text-[#c9a84c] uppercase"
        >
          What We Offer
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-4xl md:text-5xl tracking-[3px] uppercase mt-1"
        >
          Services & Pricing
        </motion.h2>

        <div className="w-14 h-0.5 bg-[#c9a84c] mx-auto my-4"></div>

        {/* Grid (same feel everywhere) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 border border-[#2a2a2a] mt-8">

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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.04 }}
      className="
        border border-[#2a2a2a] 
        px-4 sm:px-6 
        py-6 sm:py-12 
        flex flex-col items-center text-center
        transition-all duration-300
        hover:bg-[#1a1a1a]
        hover:border-[#c9a84c]
        hover:shadow-[0_0_20px_rgba(201,168,76,0.15)]
      "
    >
      {/* Icon */}
      <div className="text-2xl sm:text-4xl mb-3 sm:mb-5">
        {icon}
      </div>

      {/* Title */}
      <div className="uppercase tracking-[2px] sm:tracking-[3px] text-sm sm:text-xl mb-2 sm:mb-3">
        {name}
      </div>

      {/* Description */}
      <p className="text-[#888] italic text-[11px] sm:text-base leading-relaxed max-w-45 sm:max-w-xs mb-4 sm:mb-6">
        {desc}
      </p>

      {/* Price Label */}
      <div className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-[#666] uppercase mb-1">
        Starting At
      </div>

      {/* Price */}
      <div className="text-[#c9a84c] text-lg sm:text-3xl font-semibold">
        {price}
      </div>
    </motion.div>
  );
}