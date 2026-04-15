"use client";

import toast from "react-hot-toast";

export default function BookingForm() {
  return (
    <section id="booking" className="bg-[#141414] py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">

        {/* LEFT */}
        <div>
          <p className="text-[10px] tracking-[3px] text-[#c9a84c] uppercase mb-2">
            Reserve Your Spot
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl tracking-[2px] uppercase leading-tight">
            Book an <br /> Appointment
          </h2>

          <div className="w-12 h-0.5 bg-[#c9a84c] my-4"></div>

          <p className="text-[#888] italic text-sm sm:text-base mb-6 max-w-sm">
            Walk-ins welcome, but booking ahead guarantees your preferred time.
          </p>

          {/* Timings (compact) */}
          <div className="space-y-2 text-xs sm:text-sm">
            <p><span className="text-[#c9a84c] uppercase">Mon–Fri:</span> <span className="text-[#888]">9am–8pm</span></p>
            <p><span className="text-[#c9a84c] uppercase">Sat:</span> <span className="text-[#888]">8am–9pm</span></p>
            <p><span className="text-[#c9a84c] uppercase">Sun:</span> <span className="text-[#888]">10am–6pm</span></p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-4 sm:p-6 space-y-4">

          {/* Name + Phone in 2 cols even on mobile */}
          <div className="grid grid-cols-2 gap-3">
            <Input label="Name" placeholder="Rahul" />
            <Input label="Phone" placeholder="+91..." />
          </div>

          {/* Service */}
          <Select label="Service" options={["Haircut", "Beard", "Shave"]} />

          {/* Date + Time */}
          <div className="grid grid-cols-2 gap-3">
            <Input label="Date" type="date" />
            <Select label="Time" options={["10 AM", "12 PM", "3 PM"]} />
          </div>

          {/* Button */}
          <button
            onClick={() => toast.success("Booking Confirmed")}
            className="w-full bg-[#c9a84c] text-black py-3 text-xs tracking-[3px] uppercase font-semibold hover:bg-[#e8c76a] transition"
          >
            Confirm Booking
          </button>

          <p className="text-center text-[10px] text-[#888] italic">
            We’ll confirm within 30 minutes
          </p>

        </div>

      </div>
    </section>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="text-[9px] tracking-[2px] uppercase text-[#888] block mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full p-2.5 text-sm border border-[#2a2a2a] text-white focus:border-[#c9a84c] outline-none"
      />
    </div>
  );
}

function Select({ label, options }: any) {
  return (
    <div>
      <label className="text-[9px] tracking-[2px] uppercase text-[#888] block mb-1">
        {label}
      </label>
      <select className="w-full p-2.5 text-sm border border-[#2a2a2a] text-gray-600 focus:border-[#c9a84c] outline-none">
        <option>— Select —</option>
        {options.map((o: string) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}