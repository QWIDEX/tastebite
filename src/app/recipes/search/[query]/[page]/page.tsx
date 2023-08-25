import Catalog from "@/components/Catalog/Catalog";
import RecipeCard from "@/components/RecipeCards/RecipeCard";
import getRecipes from "@/services/spoonacular/getRecipes";
import FiltersFrame from "@/components/FiltersFrame/FiltersFrame";
import CatalogPageSwitchers from "@/components/CatalogPageSwitchers/CatalogPageSwitchers";
import Image from "next/image";
import H3 from "@/ui/H3";
import emptyPlateImg from "@/images/emptyPlateImg.jpg";
import SearchBar from "@/components/SearchBar/SearchBar";

export default async function SearchResults({
  params: { query, page },
  searchParams,
}: {
  params: { query: string; page: string };
  searchParams: { [key: string]: any };
}) {
  const recipes = await getRecipes({
    offset: parseInt(page) - 1,
    query: query,
    count: 20,
    sort: searchParams.sortBy,
    sortDirection: searchParams.sortDir,
    diets: searchParams.diets,
    cuisines: searchParams.cuisine,
    excludeCuisine: searchParams.excludeCuisine,
    intolerances: searchParams.intolerances,
  });

  return (
    <>
      <SearchBar />
      <FiltersFrame
        baseUrl={`/recipes/search/${query}`}
        recipesCount={recipes.totalRecipes}
        page={parseInt(page)}
        showedRecipes={20}
        recipesLength={recipes.recipes.length}
      >
        <div className="flex w-full flex-col gap-7">
          <Catalog
            RecipeCard={RecipeCard}
            className="w-full h-fit"
            recipes={recipes.recipes}
          />
          {recipes.recipes.length === 0 && (
            <div className="sm:h-[70dvh] h-[50dvh] w-full flex justify-center items-center">
              <div>
                <Image src={emptyPlateImg} alt="" />
                <H3 className="font-sans text-center mt-5">
                  Nothing was found
                </H3>
              </div>
            </div>
          )}
          <CatalogPageSwitchers
            searchParams={searchParams}
            baseUrl={`/recipes/search/${query}`}
            showedRecipes={20}
            page={parseInt(page)}
            totalRecipes={recipes.totalRecipes}
          />
        </div>
      </FiltersFrame>
    </>
  );
}
