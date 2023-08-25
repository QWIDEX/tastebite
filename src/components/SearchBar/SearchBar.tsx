"use client";
import H1 from "@/ui/H1";
import Link from "next/link";
import {
  usePathname,
  useSearchParams,
  useRouter,
  useParams,
} from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { query = "" } = useParams();

  const [queryUpdated, setQueryUpdated] = useState(query);

  return (
    <div className="sm:w-[80%] mb-10 sm:px-0 mx-auto px-5">
      <H1>Search Results</H1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          router.push(
            "/recipes/search/" + queryUpdated + "?" + searchParams.toString()
          );
        }}
        className="mt-5 items-center focus:border-none flex relative after:absolute after:bg-gray-300 after:h-0.5 after:w-full after:left-0 after:-bottom-3"
      >
        <Link
          href={"/recipes" + "?" + searchParams.toString()}
          className="group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 15 15"
          >
            <path
              className="group-hover:fill-[#ff642f] transition-all duration-300"
              d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
            />
          </svg>
        </Link>
        <input
          type="search"
          onChange={(e) => setQueryUpdated(e.target.value)}
          value={queryUpdated}
          className="w-full h-10 text-lg px-3"
        />
        <button type="submit" className="group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 512 512"
          >
            <path
              className="group-hover:fill-[#ff642f] transition-all duration-300"
              fill="currentColor"
              d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
