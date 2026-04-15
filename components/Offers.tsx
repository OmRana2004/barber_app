export default function Offers() {
  return (
    <section id="offers" className="bg-[#141414] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <p className="text-[10px] sm:text-xs tracking-[4px] text-[#c9a84c] mb-2 uppercase">
          This Month's Deals
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[2px] uppercase">
          Special Offers
        </h2>

        <div className="w-14 h-0.5 bg-[#c9a84c] mx-auto my-6"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

          <OfferCard
            badge="HOT DEAL"
            badgeColor="bg-red-800"
            title="Weekend Special"
            desc="Haircut + beard trim + hot towel shave combo — look sharp for the week."
            price="₹399"
            old="₹599"
            footer="VALID: SAT & SUN ONLY"
          />

          <OfferCard
            badge="NEW"
            badgeColor="bg-[#c9a84c]"
            title="First Visit Offer"
            desc="New customers get 30% off their first service. Show this at the counter."
            price="30% OFF"
            sub="first visit"
            footer="VALID FOR NEW CUSTOMERS ONLY"
          />

          <OfferCard
            badge="MONTHLY"
            badgeColor="bg-red-800"
            title="Student Discount"
            desc="Any haircut at a special price. Valid student ID required at the shop."
            price="₹199"
            old="₹299"
            footer="MON–FRI, ANY TIME"
          />

        </div>

      </div>
    </section>
  );
}

function OfferCard({
  badge,
  badgeColor,
  title,
  desc,
  price,
  old,
  sub,
  footer,
}: any) {
  return (
    <div className="relative bg-[#1a1a1a] border border-[#2a2a2a] p-6 sm:p-8 text-left hover:border-[#c9a84c] transition">

      {/* Badge */}
      <div
        className={`absolute top-0 right-0 text-[10px] tracking-[2px] uppercase px-3 py-1 text-black ${badgeColor}`}
      >
        {badge}
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl tracking-[2px] uppercase mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#888] italic text-sm leading-relaxed mb-6">
        {desc}
      </p>

      {/* Price */}
      <div className="text-[#c9a84c] text-2xl sm:text-3xl font-semibold">
        {price}

        {sub && (
          <span className="text-[#888] text-sm ml-2 line-through">
            {sub}
          </span>
        )}

        {old && (
          <span className="text-[#888] text-sm ml-3 line-through">
            {old}
          </span>
        )}
      </div>

      {/* Footer */}
      <p className="text-[10px] tracking-[2px] uppercase text-[#666] mt-4">
        {footer}
      </p>

    </div>
  );
}