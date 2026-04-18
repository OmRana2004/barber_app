'use client'

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#2a2a2a] px-3 sm:px-4 py-10 sm:py-16">

      <div className="max-w-6xl mx-auto">

        {/* BRAND */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-sm sm:text-2xl tracking-[2px] sm:tracking-[4px] text-[#c9a84c] uppercase font-bold">
            ✦ The Sharp Edge
          </h2>

          <p className="text-[#888] text-[10px] sm:text-sm italic mt-2">
            Where every cut tells a story
          </p>
        </div>

        {/* 🔥 SIDE-BY-SIDE ALWAYS */}
        <div className="
          grid 
          grid-cols-3 
          gap-3 sm:gap-12 
          text-center
        ">

          <FooterCol
            title="Location"
            lines={[
              'Main Bazaar Road',
              'Dehradun',
              '248001'
            ]}
          />

          <FooterCol
            title="Contact"
            lines={[
              '+91 98765',
              'email.com',
              '@sharpedge'
            ]}
          />

          <FooterCol
            title="Hours"
            lines={[
              'Mon–Fri: 9–8',
              'Sat: 8–9',
              'Sun: 10–6'
            ]}
          />

        </div>

        {/* DIVIDER */}
        <div className="mt-8 sm:mt-14 h-[1px] bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

        {/* COPYRIGHT */}
        <p className="text-center mt-4 sm:mt-6 text-[#444] text-[9px] sm:text-xs">
          © 2026 The Sharp Edge
        </p>

      </div>
    </footer>
  )
}

function FooterCol({ title, lines }: any) {
  return (
    <div>
      <h4 className="text-[8px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase text-[#c9a84c] mb-2 sm:mb-3">
        {title}
      </h4>

      <div className="space-y-0.5 sm:space-y-1">
        {lines.map((l: string) => (
          <p
            key={l}
            className="
              text-[#888] 
              text-[9px] sm:text-sm 
              leading-tight sm:leading-relaxed 
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