"use client";
import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";
import { useState } from "react";

export default function Header(): React.ReactElement {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Link
        href="/"
        className="w-1/3 max-w-[250px] min-w-[150px] mx-auto block mt-6 mb-10"
      >
        <Image
          priority={true}
          src={logo}
          height={78}
          width={255}
          className="!aspect-auto !h-auto mx-auto !w-full"
          alt="logo"
        />
      </Link>
      <header className="sticky shadow-md mx-auto justify-items-center  w-11/12 lg:w-3/4 mb-10 z-50 top-0  rounded-br-full  rounded-bl-full  bg-white border-slate-200 border min-h-[50px] px-5 sm:!px-10 py-2">
        <div className="relative grid justify-items-center h-full grid-cols-3 place-items-center sm:grid-cols-6">
          <SearchHandler className="z-20" />
          <Link
            href="/"
            className="font-medium w-fit hidden sm:block hover:text-[#ff642f] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/recipes"
            className="font-medium w-fit hidden sm:block hover:text-[#ff642f] transition-all duration-300"
          >
            Recipes
          </Link>
          <Link
            href="/recipes/categories"
            className="font-medium w-fit hidden sm:block hover:text-[#ff642f] transition-all duration-300"
          >
            Categories
          </Link>
          <Link
            href="/favorites"
            className="font-medium w-fit hidden sm:block hover:text-[#ff642f] transition-all duration-300"
          >
            Favorites
          </Link>
          <button className="group w-fit justify-self-center sm:justify-self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                className="group-hover:stroke-[#ff642f] transition-all duration-300"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2Z" />
                <path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" />
              </g>
            </svg>
          </button>
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
            className={`sm:hidden absolute flex flex-col gap-1 right-5 top-[100%] transition-all duration-300  rounded-lg z-10 bg-white shadow-md h-[124px] p-2 overflow-hidden ${
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
      </header>
    </>
  );
}

const SearchHandler = ({
  className = "",
  activeWidth = "100%",
}: {
  className?: string;
  activeWidth?: string;
}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div></div>
      <div
        className={`w-6 absolute left-0 flex gap-3 transition-all justify-self-start duration-300 items-center bg-white overflow-hidden ${className}`}
        style={active ? { width: activeWidth } : {}}
      >
        <button
          className="opacity-0 group transition-all duration-300"
          style={active ? { opacity: 1 } : {}}
          onClick={() => setActive(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 15 15"
          >
            <path
              className="group-hover:fill-[#ff642f] transition-all duration-300"
              d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
            />
          </svg>
        </button>
        <input
          type="text"
          className="w-full relative border-b border-b-gray-300 mr-8 block px-3 py-1 "
        />
        <button
          style={active ? { right: 0, left: "auto" } : {}}
          className="group w-fit absolute right-[calc(100%-26px)] bg-white transition-all duration-300"
          onClick={active ? () => {} : () => setActive(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <path
              className="group-hover:fill-[#ff642f] transition-all duration-300"
              fill="currentColor"
              d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
