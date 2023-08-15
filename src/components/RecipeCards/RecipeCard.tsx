import { RawRecipe } from "@/services/spoonacular/types";
import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }: { recipe: RawRecipe }) => {
  const { image, title, sourceName, sourceUrl, id } = recipe;

  return (
    <div className="p-5 flex flex-col justify-between rounded-lg max-w-[490px] w-full gap-4 bg-gray-50 shadow-md border-gray-200 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
      <Link
        href={`/recipe/${id}`}
        className="flex h-[87%] flex-col justify-between"
      >
        <Image
          src={image}
          width={450}
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

export default RecipeCard;
