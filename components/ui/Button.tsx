type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-8 py-3 text-xs tracking-[3px] uppercase transition";

  const styles = {
    primary:
      "bg-[#c9a84c] text-black hover:bg-[#e8c76a]",
    outline:
      "border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black",
  };

  return (
    <button
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}