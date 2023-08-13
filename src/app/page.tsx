import Catalog from "@/components/Catalog/Catalog";
import CategoriesSmall from "@/components/Categories/CategoriesSmall";
import RecipeCard from "@/components/RecipeCards/RecipeCard";
import RecipesSwiper from "@/components/RecipesSwiper/RecipesSwiper";
import H2 from "@/ui/H2";
import getRandomRecepies from "@/services/spoonacular/getRandomRecepies";
import type { RawRecipe } from "@/services/spoonacular/types";

export default async function Home() {
  let error: Error | boolean = false;
  let recipes: RawRecipe[] = [];
  await getRandomRecepies(5, "", 86400)
    .then((data) => (recipes = data))
    .catch((err) => (error = err));

  return (
    <div>
      <RecipesSwiper recipes={recipes} />
      <section className="relative w-11/12 sm:w-10/12 mx-auto">
        <H2 className="sm:ml-0 ml-5 mt-10">Random Recipes</H2>
        <Catalog RecipeCard={RecipeCard} recipes={recipes} />
      </section>
      <CategoriesSmall className="w-11/12 sm:w-10/12 mx-auto mt-5" />
    </div>
  );
}
