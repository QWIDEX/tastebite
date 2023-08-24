import { useRef, useState, useEffect } from "react";
import H3 from "@/ui/H3";

const FiltersCategory = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  const [filtersHeight, setFiltersHeight] = useState(0);
  const filtersRef = useRef<HTMLDivElement>(null);
  const [toggled, setToggled] = useState(true);

  useEffect(() => {
    if (filtersRef.current) setFiltersHeight(filtersRef.current.scrollHeight);
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setToggled(!toggled);
        }}
        className="flex group justify-between w-full items-center"
      >
        <H3 className="!font-medium">{label}</H3>
        <svg
          style={
            toggled
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
          className=" transition-all duration-300"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
        >
          <g transform="rotate(180 512 512)">
            <path
              fill="black"
              className="group-hover:fill-[#ff642f] transition-all duration-300"
              d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
            />
          </g>
        </svg>
      </button>
      <div
        className="h-fit px-3 gap-1 flex flex-col  py-2 transition-all duration-300 overflow-hidden"
        ref={filtersRef}
        style={
          toggled
            ? {
                height: filtersHeight ? `${filtersHeight}px` : "fit-content",
              }
            : { height: "0px", padding: "0px", gap: "0px" }
        }
      >
        {children}
      </div>
    </div>
  );
};

export default FiltersCategory;
