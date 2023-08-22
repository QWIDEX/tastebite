import { Recipe } from "@/services/spoonacular/types";

export default function Catalog({
  recipes = [],
  className = "",
  RecipeCard,
}: {
  recipes: Recipe[];
  className?: string;
  RecipeCard: JSX.ElementType;
}) {
  return (
    <div
      className={`flex flex-wrap w-full justify-center mx-auto px-[auto] gap-x-5 gap-y-4 ${className}`}
    >
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
