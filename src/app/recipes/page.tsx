import Catalog from "@/components/Catalog/Catalog";
import RecipeCard from "@/components/RecipeCards/RecipeCard";
import getRecipes from "@/services/spoonacular/getRecipes";
import FiltersFrame from "@/components/FiltersFrame/FiltersFrame";
import CatalogPageSwitchers from "@/components/CatalogPageSwitchers/CatalogPageSwitchers";
import emptyPlateImg from "@/images/emptyPlateImg.jpg";
import Image from "next/image";
import H3 from "@/ui/H3";

export default async function Recipes({
  searchParams,
}: {
  searchParams: { [key: string]: any };
}) {
  const recipes = await getRecipes({
    count: 20,
    sort: searchParams.sortBy,
    sortDirection: searchParams.sortDir,
    diets: searchParams.diets,
    cuisines: searchParams.cuisine,
    excludeCuisine: searchParams.excludeCuisine,
    intolerances: searchParams.intolerances,
  });

  return (
    <FiltersFrame
      recipesCount={recipes.totalRecipes}
      page={1}
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
              <H3 className="font-sans text-center mt-5">Nothing was found</H3>
            </div>
          </div>
        )}
        <CatalogPageSwitchers
          searchParams={searchParams}
          page={1}
          totalRecipes={recipes.totalRecipes}
          showedRecipes={20}
        />
      </div>
    </FiltersFrame>
  );
}
