"use client";

export default function SquareButton({
  className = "",
  type = "button",
  children,
  onClick = () => {},
}: {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      type={type}
      className={`text-lg font-medium transition-all duration-300 hover:bg-black hover:text-white border-black rounded-sm border px-7 py-2 ${className}`}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
}
