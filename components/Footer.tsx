export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#2a2a2a] py-12 px-6 text-center">
      <div className="text-2xl tracking-[4px] text-[#c9a84c] uppercase font-bold mb-1">✦ The Sharp Edge</div>
      <p className="text-[#888] text-sm italic mb-8">Where every cut tells a story</p>
      <div className="flex flex-wrap justify-center gap-12 mb-8">
        {[
          { title: 'Location', lines: ['123 Main Bazaar Road', 'Dehradun, Uttarakhand', '248001'] },
          { title: 'Contact', lines: ['+91 98765 43210', 'thesharpedge@email.com', '@thesharpedge'] },
          { title: 'Hours', lines: ['Mon–Fri: 9am – 8pm', 'Saturday: 8am – 9pm', 'Sunday: 10am – 6pm'] },
        ].map(col => (
          <div key={col.title}>
            <h4 className="text-[10px] tracking-[3px] uppercase text-[#c9a84c] mb-3">{col.title}</h4>
            {col.lines.map(l => <p key={l} className="text-[#888] text-sm leading-7">{l}</p>)}
          </div>
        ))}
      </div>
      <p className="text-[#444] text-xs">© 2026 The Sharp Edge. All rights reserved.</p>
    </footer>
  )
}