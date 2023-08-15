import React from "react";
import RateReceipt from "../RateReceipt/RateReceipt";
import Image from "next/image";
import { RawRecipe } from "@/services/spoonacular/types";
import Link from "next/link";

const SmallRecipeCard = ({
  className,
  recipe,
}: {
  className: string;
  recipe: RawRecipe;
}) => {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className={`w-[300px] group flex gap-3 ${className}`}
    >
      <Image
        src={recipe.image}
        width={120}
        height={70}
        className="aspect-video h-fit w-[40%] rounded-md"
        alt={`${recipe.title} image`}
      />
      <div className="flex flex-col justify-center">
        <RateReceipt editing={false} size={16} />
        <h3 className="font-medium group-hover:text-[#ff642f] transition-all duration-300">
          {recipe.title}
        </h3>
      </div>
    </Link>
  );
};

export default SmallRecipeCard;
