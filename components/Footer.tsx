'use client'

export default function Footer() {
  return (
    <footer className="relative bg-[#070707] border-t border-[#2a2a2a] px-4 py-12 sm:py-16">

      <div className="max-w-6xl mx-auto">

        {/* 🔥 TOP BRAND */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-lg sm:text-2xl tracking-[3px] sm:tracking-[4px] text-[#c9a84c] uppercase font-bold">
            ✦ The Sharp Edge
          </h2>

          <p className="text-[#888] text-xs sm:text-sm italic mt-2">
            Where every cut tells a story
          </p>
        </div>

        {/* 💎 GRID */}
        <div className="
          grid 
          grid-cols-1 sm:grid-cols-3 
          gap-8 sm:gap-12 
          text-center sm:text-left
        ">

          {/* LOCATION */}
          <FooterCol
            title="Location"
            lines={[
              '123 Main Bazaar Road',
              'Dehradun, Uttarakhand',
              '248001'
            ]}
          />

          {/* CONTACT */}
          <FooterCol
            title="Contact"
            lines={[
              '+91 98765 43210',
              'thesharpedge@email.com',
              '@thesharpedge'
            ]}
          />

          {/* HOURS */}
          <FooterCol
            title="Hours"
            lines={[
              'Mon–Fri: 9am – 8pm',
              'Saturday: 8am – 9pm',
              'Sunday: 10am – 6pm'
            ]}
          />

        </div>

        {/* ✨ DIVIDER */}
        <div className="mt-10 sm:mt-14 h-[1px] bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

        {/* 🧾 COPYRIGHT */}
        <div className="text-center mt-6">
          <p className="text-[#444] text-[10px] sm:text-xs">
            © 2026 The Sharp Edge. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

/* 🔥 REUSABLE COLUMN */
function FooterCol({ title, lines }: any) {
  return (
    <div>
      <h4 className="text-[10px] tracking-[3px] uppercase text-[#c9a84c] mb-3">
        {title}
      </h4>

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