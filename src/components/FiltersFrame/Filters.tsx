"use client";
import H2 from "@/ui/H2";
import FiltersCategory from "./FiltersCategory";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import type {
  cuisines,
  diets,
  intolerances,
} from "@/services/spoonacular/types";
import { useSearchParams, useRouter } from "next/navigation";
import CheckboxInput from "@/ui/CheckbxInput";

type Filters = {
  excludeCuisine?: cuisines[];
  cuisines?: cuisines[];
  diets?: diets[];
  intolerances?: intolerances[];
};

const allDiets: diets[] = [
  "Gluten Free",
  "Whole30",
  "Low FODMAP",
  "Primal",
  "Paleo",
  "Vegan",
  "Ovo-Vegetarian",
  "Lacto-Vegetarian",
  "Vegetarian",
  "Ketogenic",
];

const allIntolerances: intolerances[] = [
  "Dairy",
  "Egg",
  "Gluten",
  "Grain",
  "Peanut",
  "Seafood",
  "Sesame",
  "Shellfish",
  "Soy",
  "Sulfite",
  "Tree Nut",
  "Wheat",
];

const allCuisines: cuisines[] = [
  "African",
  "Asian",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

export default function Filters({
  toggleFilters,
  filtersToggled,
  baseUrl,
}: {
  toggleFilters: Function;
  filtersToggled: boolean;
  baseUrl: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams()!;

  const filtersBlockRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      diets: searchParams.get("diets")?.split(",") || [],
      excludeCuisine: searchParams.get("excludeCuisine")?.split(",") || [],
      cuisine: searchParams.get("cuisine")?.split(",") || [],
      intolerances: searchParams.get("intolerances")?.split(",") || [],
    },
  });

  const handleFiltersSubmit: SubmitHandler<any> = (data: Filters) => {
    const params = new URLSearchParams(searchParams.toString());

    for (const [param, value] of Object.entries(data)) {
      if (value) {
        params.set(param, value.toString());
      }
    }

    const finalQueryString = params.toString();
    router.push(baseUrl + "?" + finalQueryString, { scroll: false });
  };

  return (
    <form
      onSubmit={handleSubmit(handleFiltersSubmit)}
      ref={filtersBlockRef}
      style={
        filtersToggled
          ? {
              minWidth: "300px",
              left: "0px",
              width: "25%",
              padding: "20px",
            }
          : {
              minWidth: "0px",
              left: `-100%`,
              width: "0px",
              padding: "0px",
            }
      }
      className="sm:w-1/4 w-3/4 h-fit py-7 min-w-[300px] px-5 sm:relative absolute rounded-tr-md left-0 rounded-br-md bg-gray-50 shadow-md transition-all duration-[600ms] sm:duration-300"
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
      <div className="pl-3 mt-2">
        <FiltersCategory label="Diets">
          {allDiets.map((diet) => (
            <CheckboxInput key={diet} register={register("diets")} value={diet}>
              {diet}
            </CheckboxInput>
          ))}
        </FiltersCategory>
        <FiltersCategory label="Intolerances">
          {allIntolerances.map((intolerance) => (
            <CheckboxInput
              key={intolerance}
              register={register("intolerances")}
              value={intolerance}
            >
              {intolerance}
            </CheckboxInput>
          ))}
        </FiltersCategory>
        <FiltersCategory label="Cuisines">
          {allCuisines.map((cuisine) => (
            <CheckboxInput
              key={cuisine}
              register={register("cuisine")}
              value={cuisine}
            >
              {cuisine}
            </CheckboxInput>
          ))}
        </FiltersCategory>
        <FiltersCategory label="Exclude Cuisines">
          {allCuisines.map((cuisine) => (
            <CheckboxInput
              key={cuisine}
              register={register("excludeCuisine")}
              value={cuisine}
            >
              {cuisine}
            </CheckboxInput>
          ))}
        </FiltersCategory>
      </div>
      <div className=" overflow-hidden bottom-0 w-[100%] justify-between flex mt-7 h-auto">
        <button
          type="button"
          className="px-7 py-2 border border-black rounded-lg text-black font-medium text-lg hover:border-[#ff642f] hover:bg-[#ff642f] transition-all duration-300 hover:text-white"
          onClick={() => {
            router.push(baseUrl);
            reset(
              {
                diets: [],
                excludeCuisine: [],
                cuisine: [],
                intolerances: [],
              },
              { keepDefaultValues: false }
            );
          }}
        >
          Clear
        </button>
        <button
          type="submit"
          className="px-7 py-2 rounded-lg  hover:bg-[#ff642f] bg-black font-medium text-lg text-white transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
