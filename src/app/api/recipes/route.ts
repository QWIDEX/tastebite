import { NextResponse } from "next/server";
import type { RawRecipe, Recipe } from "@/services/spoonacular/types";
import getRecipeReviews from "@/utils/mongoDB/getRecipeReviews";

export const GET = async (req: Request) => {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const { searchParams } = new URL(req.url);

  const spoonReq = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&${searchParams.toString()}`,
    { cache: "force-cache" }
  );

  if (!spoonReq.ok) {
    throw new Error(`Request failed with status: ${spoonReq.status}`);
  }

  const data = await spoonReq.json();

  const recipes = await Promise.all(
    data.results.map((recipe: RawRecipe) => {
      return { ...recipe, ...getRecipeReviews(recipe.id.toString()) };
    })
  );

  return NextResponse.json({ recipes, totalRecipes: data.totalResults });
};
