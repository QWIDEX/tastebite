import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import SearchHandler from "./SearchHandler";

export default function Header(): React.ReactElement {
  return (
    <>
      <Link
        href="/"
        className="w-1/3 max-w-[250px] min-w-[150px] mx-auto block mt-6 mb-5 sm:mb-10"
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
      <header className="sticky shadow-md mx-auto justify-items-center  w-11/12 lg:w-3/4 mb-10 z-30 top-0  rounded-br-full  rounded-bl-full  bg-white border-slate-200 border min-h-[50px] px-5 sm:!px-10 py-2">
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
          <BurgerMenu className="sm:hidden" />
        </div>
      </header>
    </>
  );
}
