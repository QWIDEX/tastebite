"use client";
import { useState } from "react";
import Link from "next/link";

const BurgerMenu = ({ className }: { className: string }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={className}>
      <button
        className="sm:hidden justify-self-end w-6 h-6 relative "
        onClick={() => setOpened(!opened)}
      >
        <div
          className={`w-full h-0.5 rounded-full bg-black top-1 absolute transition-all duration-300 left-0 ${
            opened ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-full h-0.5 rounded-full bg-black absolute transition-all duration-300 top-3 left-3 -translate-x-1/2 ${
            opened ? "!w-0" : ""
          }`}
        ></div>
        <div
          className={`w-full h-0.5 rounded-full bg-black top-5 absolute transition-all duration-300  left-0 ${
            opened ? "-rotate-45 -translate-y-2 0" : ""
          }`}
        ></div>
      </button>
      <div
        className={`sm:!hidden absolute flex flex-col gap-1 right-5 top-[100%] transition-all duration-300  rounded-lg z-10 bg-white shadow-md h-[124px] p-2 overflow-hidden ${
          opened ? "" : "!h-0 !py-0"
        }`}
      >
        <Link
          href="/"
          className="font-medium w-fit  hover:text-[#ff642f] transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href="/recipes"
          className="font-medium w-fit  hover:text-[#ff642f] transition-all duration-300"
        >
          Recipes
        </Link>
        <Link
          href="/recipes/categories"
          className="font-medium w-fit  hover:text-[#ff642f] transition-all duration-300"
        >
          Categories
        </Link>
        <Link
          href="/favorites"
          className="font-medium w-fit  hover:text-[#ff642f] transition-all duration-300"
        >
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
