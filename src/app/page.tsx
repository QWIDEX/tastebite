import Catalog from "@/components/Catalog/Catalog";
import CategoriesSmall from "@/components/Categories/CategoriesSmall";
import RecipesSwiper from "@/components/RecipesSwiper/RecipesSwiper";
import getRandomRecepies from "@/utils/spoonacular/getRandomRecepies";
import { Recipe } from "@/utils/spoonacular/types";

export default async function Home() {
  let error: Error | boolean = false;
  let recipes: Recipe[] = [];
  await getRandomRecepies(5)
    .then((data) => (recipes = data))
    .catch((err) => (error = err));

  return (
    <div>
      <RecipesSwiper recipes={recipes} />
      <section className="relative w-10/12 mx-auto">
        <h1 className="text-4xl mt-10 font-semibold mb leading-normal font-serif">
          Random Recipes
        </h1>
        <Catalog recipes={recipes} />
        <CategoriesSmall />
      </section>
    </div>
  );
}
