'use client'

import Image from "next/image";
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/data'

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 px-4 bg-[#0d0d0d] flex justify-center"
    >
      <div className="w-full max-w-[420px] sm:max-w-6xl">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] mb-2">
            What We Offer
          </p>

          <h2 className="text-xl sm:text-4xl uppercase tracking-[3px]">
            Services & Pricing
          </h2>

          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">

          {SERVICES.map((s, i) => (
            <ServiceCard key={s.name} s={s} i={i} />
          ))}

        </div>

      </div>
    </section>
  )
}

function ServiceCard({ s, i }: any) {
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
      ">

        {/* 🖼 IMAGE */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
          <Image
            src={s.image}
            alt={s.name}
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={i < 2}
          />
        </div>

        {/* 🌑 Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

        {/* ✨ Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6">

          <h3 className="text-[11px] sm:text-lg uppercase tracking-[1.5px] sm:tracking-[2px] mb-1">
            {s.name}
          </h3>

          <p className="text-[10px] sm:text-sm text-[#bbb] italic mb-2 sm:mb-3 leading-snug line-clamp-2">
            {s.desc}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[2px] text-[#777]">
              Starting
            </span>

            <span className="text-[#c9a84c] text-sm sm:text-xl font-semibold">
              {s.price}
            </span>
          </div>

        </div>

      </div>

    </motion.div>
  )
}