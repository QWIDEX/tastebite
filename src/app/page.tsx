import Catalog from "@/components/Catalog/Catalog";
import CategoriesSmall from "@/components/Categories/CategoriesSmall";
import RecipesSwiper from "@/components/RecipesSwiper/RecipesSwiper";
import getRandomRecepies from "@/utils/spoonacular/getRandomRecepies";

export default async function Home() {
  const recipes = await getRandomRecepies(5);

  return (
    <div className="">
      <RecipesSwiper recipes={recipes} />
      <section className="relative w-10/12 mx-auto">
        <Catalog recipes={recipes} />
        <CategoriesSmall />
      </section>
    </div>
  );
}
