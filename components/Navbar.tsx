'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', s)
    return () => window.removeEventListener('scroll', s)
  }, [])

  const links = ['Offers', 'Services', 'Book Now']

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 px-6 h-16 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-black/95 border-b border-[#2a2a2a]' : 'bg-transparent'
      }`}
    >
      <span className="text-[#c9a84c] font-bold tracking-[3px] uppercase text-lg">✦ The Sharp Edge</span>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
            className="text-xs tracking-[2px] uppercase text-[#888] hover:text-[#c9a84c] transition-colors">
            {l}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
        <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}/>
        <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-all ${open ? 'opacity-0' : ''}`}/>
        <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-black/98 border-b border-[#2a2a2a] flex flex-col items-center gap-6 py-8 md:hidden"
          >
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[3px] uppercase text-[#888] hover:text-[#c9a84c]">
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}