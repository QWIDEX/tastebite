import Catalog from "@/components/Catalog/Catalog";
import getRandomRecepies from "@/utils/spoonacular/getRandomRecepies";

export default async function Home() {
  const recipes = await getRandomRecepies(5);

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <section className="relative">
        <Catalog recipes={recipes} />
      </section>
    </div>
  );
}
