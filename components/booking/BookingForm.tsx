'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SERVICES, TIME_SLOTS } from '@/lib/data'

export default function BookingSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  })
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
    <section id="book-now" className="py-8 sm:py-10 px-4 bg-[#141414]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] tracking-[4px] uppercase text-[#c9a84c] mb-2">
            Reserve Your Spot
          </p>

          <h2 className="text-2xl sm:text-4xl uppercase tracking-[3px] mb-4">
            Book an Appointment
          </h2>

          <div className="w-12 h-[2px] bg-[#c9a84c] mb-6" />

          <p className="text-[#888] text-sm sm:text-base italic leading-relaxed mb-8">
            Walk-ins welcome, but booking ahead guarantees your preferred time and barber.
          </p>

          <div className="space-y-3">
            {[
              ['Monday – Friday', '9:00 AM – 8:00 PM'],
              ['Saturday', '8:00 AM – 9:00 PM'],
              ['Sunday', '10:00 AM – 6:00 PM']
            ].map(([d, t]) => (
              <div key={d}>
                <div className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">
                  {d}
                </div>
                <div className="text-[#888] text-sm">{t}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
            relative
            rounded-2xl
            border border-[#2a2a2a]
            bg-[#1a1a1a]/80
            backdrop-blur
            p-5 sm:p-8
            shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
        >

          {!confirmed ? (
            <>
              {/* INPUTS */}
              {[
                { label: 'Your Name', id: 'name', type: 'text', placeholder: 'Rahul Sharma' },
                { label: 'Phone / WhatsApp', id: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
              ].map(f => (
                <div key={f.id} className="mb-4 sm:mb-5">
                  <label className="block text-[10px] tracking-[2px] uppercase text-[#888] mb-2">
                    {f.label}
                  </label>

                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.id as keyof typeof form]}
                    onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                    className="
                      w-full
                      bg-[#111]
                      border border-[#2a2a2a]
                      px-3 sm:px-4 py-2.5 sm:py-3
                      text-sm
                      focus:border-[#c9a84c]
                      outline-none
                      transition
                    "
                  />
                </div>
              ))}

              {/* SERVICE */}
              <div className="mb-4 sm:mb-5">
                <label className="block text-[10px] tracking-[2px] uppercase text-[#888] mb-2">
                  Service
                </label>

                <select
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#111] border border-[#2a2a2a] px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:border-[#c9a84c] outline-none"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map(s => (
                    <option key={s.name}>
                      {s.name} — {s.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* DATE + TIME */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
                <input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                  className="bg-[#111] border border-[#2a2a2a] px-3 py-2.5 text-sm focus:border-[#c9a84c] outline-none"
                />

                <select
                  value={form.time}
                  onChange={e => setForm({ ...form, time: e.target.value })}
                  className="bg-[#111] border border-[#2a2a2a] px-3 py-2.5 text-sm focus:border-[#c9a84c] outline-none"
                >
                  <option value="">Time</option>
                  {TIME_SLOTS.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                className="
                  w-full
                  bg-[#c9a84c]
                  text-black
                  py-3 sm:py-4
                  text-xs sm:text-sm
                  tracking-[2px]
                  uppercase
                  font-bold
                  hover:bg-[#e8c76a]
                  transition
                "
              >
                Confirm Booking
              </button>

              <p className="text-[10px] text-[#666] text-center mt-3 italic">
                We'll confirm via WhatsApp
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="text-4xl mb-3">✦</div>

              <h3 className="text-lg uppercase tracking-[2px] text-[#5cb85c] mb-2">
                Booking Received
              </h3>

              <p className="text-[#888] text-sm italic">
                Thanks, {form.name}! We'll contact you shortly.
              </p>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  )
}