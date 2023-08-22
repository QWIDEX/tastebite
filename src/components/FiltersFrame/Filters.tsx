"use client";
import H2 from "@/ui/H2";
import { useRef, useState } from "react";

export default function Filters({
  toggleFilters,
  filtersToggled,
}: {
  toggleFilters: Function;
  filtersToggled: boolean;
}) {
  const filtersBlockRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={filtersBlockRef}
      style={
        filtersToggled
          ? {
              minWidth: "200px",
              left: "0px",
              width: "25%",
              padding: "20px",
            }
          : {
              minWidth: "0px",
              left: `-${filtersBlockRef.current?.scrollWidth}px`,
              width: "0px",
              padding: "0px",
            }
      }
      className="w-1/4 py-7 min-w-[200px] px-5 relative rounded-tr-md left-0 rounded-br-md bg-gray-50 shadow-md transition-all duration-300"
    >
      <H2>Filters</H2>
      <button
        type="button"
        onClick={() => toggleFilters()}
        className="top-3 absolute group right-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24    "
          viewBox="0 0 15 15"
        >
          <path
            fill="black"
            className="group-hover:fill-[#ff642f] transition-all duration-300"
            d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
          />
        </svg>
      </button>
    </div>
  );
}
