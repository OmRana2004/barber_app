'use client'

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#2a2a2a] px-4 py-10 sm:py-14">

      <div className="max-w-6xl mx-auto">

        {/* BRAND */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-base sm:text-2xl tracking-[3px] sm:tracking-[4px] text-[#c9a84c] uppercase font-bold">
            ✦ The Sharp Edge
          </h2>

          <p className="text-[#888] text-xs sm:text-sm italic mt-2">
            Where every cut tells a story
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-center sm:text-left">

          <FooterCol
            icon={<MapPin size={14} />}
            title="Location"
            lines={[
              'Main Bazaar Road',
              'Dehradun, Uttarakhand',
              '248001'
            ]}
          />

          <FooterCol
            icon={<Phone size={14} />}
            title="Contact"
            lines={[
              '+91 98765 43210',
              'thesharpedge@email.com',
              '@thesharpedge'
            ]}
          />

          <FooterCol
            icon={<Clock size={14} />}
            title="Hours"
            lines={[
              'Mon–Fri: 9am – 8pm',
              'Saturday: 8am – 9pm',
              'Sunday: 10am – 6pm'
            ]}
          />

        </div>

        {/* WHATSAPP CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="
              flex items-center gap-2
              border border-[#2a2a2a]
              px-5 py-2.5
              text-xs tracking-[2px] uppercase
              hover:border-[#c9a84c]
              hover:text-[#c9a84c]
              transition
            "
          >
            <MessageCircle size={14} />
            Chat on WhatsApp
          </a>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 sm:mt-14 h-[1px] bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

        {/* COPYRIGHT */}
        <p className="text-center mt-4 sm:mt-6 text-[#444] text-[10px] sm:text-xs">
          © 2026 The Sharp Edge
        </p>

      </div>
    </footer>
  )
}

function FooterCol({ title, lines, icon }: any) {
  return (
    <div>
      <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-3">
        <span className="text-[#c9a84c]">{icon}</span>

        <h4 className="text-[10px] tracking-[3px] uppercase text-[#c9a84c]">
          {title}
        </h4>
      </div>

      <div className="space-y-1">
        {lines.map((l: string) => (
          <p
            key={l}
            className="
              text-[#888] 
              text-xs sm:text-sm 
              leading-relaxed 
              hover:text-white 
              transition
            "
          >
            {l}
          </p>
        ))}
      </div>
    </div>
  )
}