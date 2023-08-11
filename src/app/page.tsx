import Catalog from "@/components/Catalog/Catalog";
import CategoriesSmall from "@/components/Categories/CategoriesSmall";
import RecipesSwiper from "@/components/RecipesSwiper/RecipesSwiper";
import H1 from "@/ui/H1";
import getRandomRecepies from "@/utils/spoonacular/getRandomRecepies";
import { Recipe } from "@/utils/spoonacular/types";

export default async function Home() {
  let error: Error | boolean = false;
  let recipes: Recipe[] = [];
  await getRandomRecepies(5, "", 86400)
    .then((data) => (recipes = data))
    .catch((err) => (error = err));

  return (
    <div>
      <RecipesSwiper recipes={recipes} />
      <section className="relative w-11/12 sm:w-10/12 mx-auto">
        <H1 className="sm:ml-0 ml-5 mt-10">Random Recipes</H1>
        <Catalog recipes={recipes} />
      </section>
      <CategoriesSmall className="w-11/12 sm:w-10/12 mx-auto mt-5" />
    </div>
  );
}
