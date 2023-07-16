import { Recipe } from "@/utils/spoonacular/types";
import Image from "next/image";
import Link from "next/link";

export default function Catalog(recipes: Array<Recipe>) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-4">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const { image, title, sourceName, sourceUrl, id } = recipe;

  return (
    <Link
      href={`/recipes/${id}`}
      className="p-5 flex flex-col gap-4 shadow border-gray-200 hover:scale-110 transition-all duration-300 group"
    >
      <Image src={image} alt={title} height={100} width={100} />
      <h2 className="font-medium text-lg">{title}</h2>
      <p>
        by: <a href={sourceUrl}>{sourceName}</a>
      </p>
    </Link>
  );
};
