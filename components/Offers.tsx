'use client'
import { motion } from 'framer-motion'
import { OFFERS } from '@/lib/data'

export default function OffersSection() {
  return (
    <section id="offers" className="py-20 px-6 bg-[#141414]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] mb-2">This Month's Deals</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest">Special Offers</h2>
          <div className="w-14 h-0.5 bg-[#c9a84c] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFERS.map((o, i) => (
            <motion.div key={o.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ borderColor: '#c9a84c', scale: 1.02 }}
              className="relative bg-[#1a1a1a] border border-[#2a2a2a] p-8 overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 px-3 py-1.5 text-[10px] tracking-[2px] uppercase font-bold"
                style={{ background: o.badgeColor, color: o.badgeColor === '#c9a84c' ? '#000' : '#fff' }}>
                {o.badge}
              </div>
              <h3 className="text-xl uppercase tracking-widest mb-3">{o.title}</h3>
              <p className="text-[#888] text-sm italic leading-relaxed mb-5">{o.desc}</p>
              <div className="text-3xl font-bold text-[#c9a84c]">
                {o.price} <span className="text-base text-[#888] line-through font-normal ml-2">{o.original}</span>
              </div>
              <div className="text-[10px] tracking-[1px] uppercase text-[#666] mt-2">{o.expires}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}