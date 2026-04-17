'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SERVICES, TIME_SLOTS } from '@/lib/data'

export default function BookingSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '' })
  const [confirmed, setConfirmed] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = () => {
    if (Object.values(form).some(v => !v)) {
      alert('Please fill in all fields.')
      return
    }
    setConfirmed(true)
  }

  return (
    <section id="book-now" className="py-20 px-6 bg-[#141414]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}>
          <p className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] mb-2">Reserve Your Spot</p>
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest mb-4">Book an Appointment</h2>
          <div className="w-14 h-0.5 bg-[#c9a84c] mb-6" />
          <p className="text-[#888] italic leading-relaxed mb-8">
            Walk-ins welcome, but booking ahead guarantees your preferred time and barber. We'll confirm via call or WhatsApp.
          </p>
          {[['Monday – Friday', '9:00 AM – 8:00 PM'], ['Saturday', '8:00 AM – 9:00 PM'], ['Sunday', '10:00 AM – 6:00 PM']].map(([d, t]) => (
            <div key={d} className="mb-3">
              <div className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">{d}</div>
              <div className="text-[#888] text-sm">{t}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] border border-[#2a2a2a] p-8">
          {!confirmed ? (
            <>
              {[
                { label: 'Your Name', id: 'name', type: 'text', placeholder: 'e.g. Rahul Sharma' },
                { label: 'Phone / WhatsApp', id: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
              ].map(f => (
                <div key={f.id} className="mb-5">
                  <label className="block text-[10px] tracking-[2px] uppercase text-[#888] mb-2">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    value={form[f.id as keyof typeof form]}
                    onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full bg-[#111] border border-[#2a2a2a] text-[#f0ece0] px-4 py-3 focus:border-[#c9a84c] outline-none transition-colors" />
                </div>
              ))}

              <div className="mb-5">
                <label className="block text-[10px] tracking-[2px] uppercase text-[#888] mb-2">Service</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#111] border border-[#2a2a2a] text-[#f0ece0] px-4 py-3 focus:border-[#c9a84c] outline-none">
                  <option value="">— Select a service —</option>
                  {SERVICES.map(s => <option key={s.name}>{s.name} — {s.price}</option>)}
                  <option>Weekend Special Combo — ₹399</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[10px] tracking-[2px] uppercase text-[#888] mb-2">Date</label>
                  <input type="date" min={today} value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-[#111] border border-[#2a2a2a] text-[#f0ece0] px-4 py-3 focus:border-[#c9a84c] outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[2px] uppercase text-[#888] mb-2">Time</label>
                  <select value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-[#111] border border-[#2a2a2a] text-[#f0ece0] px-4 py-3 focus:border-[#c9a84c] outline-none">
                    <option value="">— Time —</option>
                    {TIME_SLOTS.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <button onClick={handleSubmit}
                className="w-full bg-[#c9a84c] text-black py-4 text-xs tracking-[3px] uppercase font-bold hover:bg-[#e8c76a] transition-colors">
                Confirm Booking
              </button>
              <p className="text-xs text-[#666] text-center mt-3 italic">We'll reach out within 30 minutes to confirm.</p>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8">
              <div className="text-5xl mb-4">✦</div>
              <h3 className="text-xl uppercase tracking-widest text-[#5cb85c] mb-3">Booking Received!</h3>
              <p className="text-[#888] text-sm italic">
                Thanks, {form.name}! We'll WhatsApp {form.phone} shortly to confirm your {form.service.split('—')[0].trim()} on {new Date(form.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })} at {form.time}.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}