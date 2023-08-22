import Catalog from "@/components/Catalog/Catalog";
import RecipeCard from "@/components/RecipeCards/RecipeCard";
import getRecipes from "@/services/spoonacular/getRecipes";
import FiltersFrame from "@/components/FiltersFrame/FiltersFrame";

export default async function Recipes({
  searchParams,
}: {
  searchParams: { [key: string]: any };
}) {
  console.log(searchParams.sortBy, searchParams.sortDir);
  const recipes = await getRecipes({
    count: 10,
    sort: searchParams.sortBy,
    sortDirection: searchParams.sortDir,
  });

  return (
    <FiltersFrame recipesCount={recipes.totalRecipes}>
      <Catalog
        RecipeCard={RecipeCard}
        className="w-full"
        recipes={recipes.recipes}
      />
    </FiltersFrame>
  );
}
