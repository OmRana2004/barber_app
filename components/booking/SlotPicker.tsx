export default function SlotPicker({
  slots,
  selected,
  onSelect,
}: any) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {slots.map((slot: string) => (
        <button
          key={slot}
          onClick={() => onSelect(slot)}
          className={`p-2 border text-sm ${
            selected === slot
              ? "bg-[#c9a84c] text-black"
              : "border-[#2a2a2a] hover:border-[#c9a84c]"
          }`}
        >
          {slot}
        </button>
      ))}
    </div>
  );
}