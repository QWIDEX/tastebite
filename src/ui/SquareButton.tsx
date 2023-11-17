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
      className="px-7 py-2 rounded-lg  hover:bg-[#ff642f] shadow-lg hover:shadow-md bg-black font-medium text-lg text-white transition-all duration-300"
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
}
