'use client'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/data'

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest">Services & Pricing</h2>
          <div className="w-14 h-0.5 bg-[#c9a84c] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 border border-[#2a2a2a]">
          {SERVICES.map((s, i) => (
            <motion.div key={s.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ background: '#1a1a1a' }}
              className="border border-[#2a2a2a] p-6 text-center transition-colors">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="text-sm uppercase tracking-[2px] mb-2">{s.name}</div>
              <p className="text-[#888] text-xs italic leading-relaxed mb-3">{s.desc}</p>
              <div className="text-[10px] uppercase tracking-[1px] text-[#888]">Starting at</div>
              <div className="text-2xl font-bold text-[#c9a84c]">{s.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}