"use client";
import { useState } from "react";
import Filters from "./Filters";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

const FiltersFrame = ({
  children,
  recipesCount,
}: {
  children: React.ReactNode;
  recipesCount: number;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [filtersToggled, setFiltersToggled] = useState(true);

  const toggleFilters = () => {
    setFiltersToggled(!filtersToggled);
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div>
      <div className="bg-gray-50 shadow-md w-full mb-7 py-2 px-[10%]  flex items-center justify-between">
        <button
          onClick={toggleFilters}
          className="flex group items-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 21 18"
            fill="none"
          >
            <path
              d="M20.0238 3.14286H6.92858M4.54763 3.14286H0.976196M20.0238 15.0476H6.92858M4.54763 15.0476H0.976196M14.0714 9.09524H0.976196M20.0238 9.09524H16.4524M5.7381 0.761905C6.05384 0.761905 6.35664 0.88733 6.5799 1.11059C6.80315 1.33385 6.92858 1.63665 6.92858 1.95238V4.33333C6.92858 4.64907 6.80315 4.95187 6.5799 5.17513C6.35664 5.39838 6.05384 5.52381 5.7381 5.52381C5.42237 5.52381 5.11957 5.39838 4.89631 5.17513C4.67305 4.95187 4.54763 4.64907 4.54763 4.33333V1.95238C4.54763 1.63665 4.67305 1.33385 4.89631 1.11059C5.11957 0.88733 5.42237 0.761905 5.7381 0.761905V0.761905ZM5.7381 12.6667C6.05384 12.6667 6.35664 12.7921 6.5799 13.0153C6.80315 13.2386 6.92858 13.5414 6.92858 13.8571V16.2381C6.92858 16.5538 6.80315 16.8566 6.5799 17.0799C6.35664 17.3031 6.05384 17.4286 5.7381 17.4286C5.42237 17.4286 5.11957 17.3031 4.89631 17.0799C4.67305 16.8566 4.54763 16.5538 4.54763 16.2381V13.8571C4.54763 13.5414 4.67305 13.2386 4.89631 13.0153C5.11957 12.7921 5.42237 12.6667 5.7381 12.6667ZM15.2619 6.71429C15.5776 6.71429 15.8804 6.83971 16.1037 7.06297C16.327 7.28623 16.4524 7.58903 16.4524 7.90476V10.2857C16.4524 10.6014 16.327 10.9043 16.1037 11.1275C15.8804 11.3508 15.5776 11.4762 15.2619 11.4762C14.9462 11.4762 14.6434 11.3508 14.4201 11.1275C14.1969 10.9043 14.0714 10.6014 14.0714 10.2857V7.90476C14.0714 7.58903 14.1969 7.28623 14.4201 7.06297C14.6434 6.83971 14.9462 6.71429 15.2619 6.71429V6.71429Z"
              stroke="black"
              className="group-hover:stroke-[#ff6531] transition-all duration-300"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium leading-none text-xl transition-all duration-300 group-hover:text-[#ff6531]">
            Filters
          </span>
        </button>
        <div>
          <span className="font-medium text-lg text-gray-400">
            Showing 1 / 10 of {recipesCount} recipes
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>
            <span className="text-lg font-medium mr-1">Sort by:</span>
            <select
              onChange={(e) => {
                router.push(
                  pathname + "?" + createQueryString("sortBy", e.target.value)
                );
              }}
              value={searchParams.get("sortBy") || "random"}
              className="rounded-lg py-1 px-2 bg-white shadow-inner"
            >
              <option value="random">Random</option>
              <option value="popularity">Popularity</option>
              <option value="healthiness">Healthiness</option>
              <option value="time">Time</option>
              <option value="price">Price</option>
              <option value="protein">Protein</option>
              <option value="alcohol">Alcohol</option>
              <option value="sugar">Sugar</option>
              <option value="energy">Energy</option>
              <option value="caffeine">Caffeine</option>
              <option value="calories">Calories</option>
              <option value="fiber">Fiber</option>
            </select>
          </div>
          <div>
            <span className="text-lg font-medium mr-1">Direction:</span>
            <select
              onChange={(e) => {
                router.push(
                  pathname + "?" + createQueryString("sortDir", e.target.value)
                );
              }}
              value={searchParams.get("sortDir") || "desc"}
              className="rounded-lg py-1 px-2 bg-white shadow-inner"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </div>
      <div
        className="flex gap-7"
        style={filtersToggled ? { gap: "28px" } : { gap: "0px" }}
      >
        <Filters
          toggleFilters={toggleFilters}
          filtersToggled={filtersToggled}
        />
        {children}
      </div>
    </div>
  );
};

export default FiltersFrame;
