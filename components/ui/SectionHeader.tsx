export default function SectionHeader({
  label,
  title,
  center = true,
}: any) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      <div className="text-xs tracking-[4px] text-[#c9a84c] mb-2 uppercase">
        {label}
      </div>

      <h2 className="text-3xl md:text-5xl tracking-[2px] uppercase">
        {title}
      </h2>

      <div className="w-16 h-0.5 bg-[#c9a84c] mt-4 mx-auto"></div>
    </div>
  );
}
