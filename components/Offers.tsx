"use client";

import { motion } from "framer-motion";

export default function Offers() {
  return (
    <section
      id="offers"
      className="bg-[#141414] py-12 sm:py-16 flex justify-center"
    >
      <div className="w-full max-w-105 sm:max-w-5xl px-3 sm:px-6 text-center">

        <p className="text-[10px] tracking-[4px] text-[#c9a84c] mb-2 uppercase">
          This Month's Deals
        </p>

        <h2 className="text-xl sm:text-3xl md:text-4xl tracking-[2px] uppercase">
          Special Offers
        </h2>

        <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto my-5"></div>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <OfferCard
            badge="HOT DEAL"
            badgeColor="bg-red-700"
            title="Weekend Special"
            desc="Haircut + beard trim + hot towel shave combo."
            price="₹399"
            old="₹599"
            footer="SAT & SUN ONLY"
          />

          <OfferCard
            badge="NEW"
            badgeColor="bg-[#c9a84c]"
            title="First Visit"
            desc="30% off your first service."
            price="30% OFF"
            sub="first visit"
            footer="NEW CUSTOMERS"
          />

          <div className="col-span-2">
            <OfferCard
              badge="MONTHLY"
              badgeColor="bg-red-700"
              title="Student Discount"
              desc="Special haircut pricing with ID."
              price="₹199"
              old="₹299"
              footer="MON–FRI"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
    

function OfferCard({
  badge,
  badgeColor,
  title,
  desc,
  price,
  old,
  sub,
  footer,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="
        relative 
        bg-[#1a1a1a] 
        border border-[#2a2a2a] 
        p-5 sm:p-7 
        text-left 
        transition-all duration-300
        hover:border-[#c9a84c]
        hover:shadow-[0_0_25px_rgba(201,168,76,0.15)]
      "
    >

      {/* Badge */}
      <div
        className={`absolute top-0 right-0 text-[9px] tracking-[2px] uppercase px-3 py-1 text-black ${badgeColor}`}
      >
        {badge}
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl tracking-[2px] uppercase mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#888] italic text-sm leading-relaxed mb-5">
        {desc}
      </p>

      {/* Price */}
      <div className="text-[#c9a84c] text-2xl sm:text-3xl font-semibold">
        {price}

        {sub && (
          <span className="text-[#888] text-sm ml-2 line-through">
            {sub}
          </span>
        )}

        {old && (
          <span className="text-[#888] text-sm ml-3 line-through">
            {old}
          </span>
        )}
      </div>

      {/* Footer */}
      <p className="text-[10px] tracking-[2px] uppercase text-[#666] mt-4">
        {footer}
      </p>

    </motion.div>
  );
}