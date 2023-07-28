import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";

export default function Header(): React.ReactElement {
  return (
    <>
      <Link href="/" className="w-fit mx-auto block mt-6 mb-10">
        <Image
          priority={true}
          src={logo}
          height={78}
          width={255}
          className="max-w-[250px] !aspect-auto !h-auto mx-auto !w-full"
          alt="logo"
        />
      </Link>
      <div className="sticky shadow-md mx-auto justify-items-center mb-10 z-50 top-0 grid grid-cols-6 rounded-br-full rounded-bl-full w-3/4 bg-white border-slate-200 border min-h-[40px] px-10 py-2">
        <button className="group w-fit justify-self-start">
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
        <Link
          href="/"
          className="font-medium w-fit hover:text-[#ff642f] transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href="/recipes"
          className="font-medium w-fit hover:text-[#ff642f] transition-all duration-300"
        >
          Recipes
        </Link>
        <Link
          href="/recipes/categories"
          className="font-medium w-fit hover:text-[#ff642f] transition-all duration-300"
        >
          Categories
        </Link>
        <Link
          href="/favorites"
          className="font-medium w-fit hover:text-[#ff642f] transition-all duration-300"
        >
          Favorites
        </Link>
        <button className="group w-fit justify-self-end">
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
      </div>
    </>
  );
}
