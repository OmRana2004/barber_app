'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false })

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center,#1c1508 0%,#0d0d0d 70%)' }}>

      <HeroCanvas />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-xs tracking-[4px] uppercase text-[#c9a84c] border border-[#c9a84c] px-4 py-1.5 mb-6 inline-block">
          Est. 2018 — Premium Grooming
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold uppercase tracking-widest leading-none mb-4">
          The <span className="text-[#c9a84c]">Sharp</span><br />Edge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="text-[#888] text-lg italic tracking-wide mb-8">
          Where every cut tells a story
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          className="flex flex-wrap gap-4 justify-center">
          <a href="#book-now"
            className="bg-[#c9a84c] text-black px-8 py-4 text-xs tracking-[3px] uppercase font-bold hover:bg-[#e8c76a] transition-colors">
            Book Appointment
          </a>
          <a href="#services"
            className="border border-[#c9a84c] text-[#c9a84c] px-8 py-4 text-xs tracking-[3px] uppercase hover:bg-[#c9a84c] hover:text-black transition-colors">
            Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          className="flex gap-8 md:gap-16 mt-14 flex-wrap justify-center">
          {[['5000+', 'Clients Served'], ['8+', 'Years Experience'], ['4.9★', 'Avg Rating']].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#c9a84c]">{n}</div>
              <div className="text-[10px] tracking-[2px] uppercase text-[#888] mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}