import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { RawRecipe } from "@/services/spoonacular/types";
import getRecipeReviews from "@/utils/mongoDB/getRecipeReviews";

export const GET = async (req: NextRequest) => {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const { searchParams } = new URL(req.url);

  const spoonReq = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&${searchParams.toString()}`,
    { cache: "no-store" }
  );

  if (!spoonReq.ok) {
    throw new Error(`Request failed with status: ${spoonReq.status}`);
  }

  const recipesRaw: RawRecipe[] = (await spoonReq.json()).recipes;

  const recipes = await Promise.all(
    recipesRaw.map((recipe: RawRecipe) => {
      return { ...recipe, ...getRecipeReviews(recipe.id.toString()) };
    })
  );

  return NextResponse.json(recipes, { status: spoonReq.status });
};
