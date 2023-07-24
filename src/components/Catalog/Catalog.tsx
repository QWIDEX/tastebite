import { Recipe } from "@/utils/spoonacular/types";
import Image from "next/image";
import Link from "next/link";

export default function Catalog({ recipes = [] }: { recipes: Array<Recipe> }) {
  return (
    <div className="flex flex-wrap w-full justify-center relative left-1/2 -translate-x-1/2  mx-auto px-[auto] p-5 gap-x-5 gap-y-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const { image, title, sourceName, sourceUrl, id } = recipe;

  return (
    <div className="p-5 flex flex-col justify-between rounded-lg max-w-[540px] w-full gap-4 bg-white shadow-md border-gray-200 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
      <Link
        href={`/recipes/${id}`}
        className="flex h-[87%] flex-col justify-between"
      >
        <Image
          src={image}
          width={500}
          unoptimized
          height={281.25}
          alt={title}
          className="rounded-lg aspect-video w-full max-w-[500px] mb-4"
        />
        <h2 className="font-semibold text-lg group-hover:text-[#ff642f] transition-all duration-300">
          {title}
        </h2>
      </Link>
      <p className="font-medium">
        by:{" "}
        <a
          href={sourceUrl}
          className="transition-all duration-300 hover:text-blue-500"
        >
          {sourceName}
        </a>
      </p>
    </div>
  );
};
