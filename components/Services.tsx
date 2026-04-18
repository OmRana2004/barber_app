'use client'

import Image from "next/image";
import { motion, useScroll,  useMotionValue, useTransform } from "framer-motion"
import { useRef } from "react"
import { SERVICES } from '@/lib/data'

export default function ServicesSection() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section
      id="services"
      className="py-16 sm:py-20 px-4 bg-[#0d0d0d]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] mb-2">
            What We Offer
          </p>

          <h2 className="text-2xl sm:text-4xl uppercase tracking-[3px]">
            Services & Pricing
          </h2>

          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto mt-4" />
        </div>

        {/* Masonry */}
        <div
          ref={containerRef}
          className="columns-2 sm:columns-3 gap-4 space-y-4"
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} scroll={scrollYProgress} />
          ))}
        </div>

      </div>
    </section>
  )
}


function ServiceCard({ s, i, scroll }: any) {

  const ref = useRef<HTMLDivElement>(null)

  // 🎯 TILT (smaller = premium feel)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-50, 50], [6, -6])
  const rotateY = useTransform(x, [-50, 50], [-6, 6])

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const px = e.clientX - rect.left
    const py = e.clientY - rect.top

    x.set(px - rect.width / 2)
    y.set(py - rect.height / 2)
  }

  function resetTilt() {
    x.set(0)
    y.set(0)
  }

  // 🌊 REAL PARALLAX (based on scroll)
  const parallaxY = useTransform(
    scroll,
    [0, 1],
    [i % 2 === 0 ? 20 : -20, 0]
  )

  // 🎲 Pinterest height
  const heights = ["h-[220px]", "h-[260px]", "h-[300px]"]
  const heightClass = heights[i % heights.length]

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        y: parallaxY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08 }}
      viewport={{ once: true }}
      className="break-inside-avoid"
    >

      <div className="group relative overflow-hidden rounded-2xl">

        {/* IMAGE */}
        <div className={`relative w-full ${heightClass}`}>
          <Image
            src={s.image}
            alt={s.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 p-4 sm:p-5">

          <h3 className="text-sm sm:text-lg uppercase tracking-[2px] mb-1">
            {s.name}
          </h3>

          <p className="text-[11px] sm:text-sm text-[#bbb] italic mb-2 line-clamp-2">
            {s.desc}
          </p>

          <span className="text-[#c9a84c] text-base sm:text-lg font-semibold">
            {s.price}
          </span>

        </div>

      </div>

    </motion.div>
  )
}