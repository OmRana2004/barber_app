'use client'

import { motion } from 'framer-motion'
import { OFFERS } from '@/lib/data'

export default function OffersSection() {
  return (
    <section
      id="offers"
      className="py-6 sm:py-6 px-2 bg-[#141414] flex justify-center"
    >
      <div className="w-full max-w-[720px] sm:max-w-6xl">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] mb-2">
            This Month's Deals
          </p>

          <h2 className="text-xl sm:text-4xl uppercase tracking-[3px]">
            Special Offers
          </h2>

          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">

          {OFFERS.map((o, i) => (
            <OfferCard key={o.title + i} o={o} i={i} />
          ))}

        </div>

      </div>
    </section>
  )
}

function OfferCard({ o, i }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08 }}
      viewport={{ once: true }}
      className="group relative"
    >

      {/* 🌟 Glow */}
      <div className="
        absolute -inset-[1px]
        bg-gradient-to-br from-[#c9a84c]/30 via-transparent to-[#c9a84c]/20
        opacity-0 group-hover:opacity-100
        blur-xl
        transition duration-500
      " />

      {/* 💎 Card */}
      <div className="
        relative
        h-full
        rounded-xl sm:rounded-2xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        overflow-hidden
        transition-all duration-500
        shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        group-hover:border-[#c9a84c]/40
        p-4 sm:p-6
      ">

        {/* Badge */}
        <div
          className="absolute top-0 right-0 px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] tracking-[2px] uppercase font-bold rounded-bl-md"
          style={{
            background: o.badgeColor,
            color: o.badgeColor === '#c9a84c' ? '#000' : '#fff',
          }}
        >
          {o.badge}
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-lg uppercase tracking-[2px] mb-2 sm:mb-3">
          {o.title}
        </h3>

        {/* Description */}
        <p className="text-[#888] text-[11px] sm:text-sm italic leading-relaxed mb-3 sm:mb-5 line-clamp-3">
          {o.desc}
        </p>

        {/* Price */}
        <div className="text-[#c9a84c] text-lg sm:text-3xl font-bold">
          {o.price}

          {o.original && (
            <span className="text-[10px] sm:text-base text-[#888] line-through font-normal ml-2">
              {o.original}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="text-[8px] sm:text-[10px] tracking-[2px] uppercase text-[#666] mt-2">
          {o.expires}
        </div>

      </div>

    </motion.div>
  )
}