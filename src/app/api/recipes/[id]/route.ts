import { NextResponse } from "next/server";
import type { RawRecipe, Recipe } from "@/services/spoonacular/types";
import getRecipeReviews from "@/utils/mongoDB/getRecipeReviews";

export const GET = async (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const { searchParams } = new URL(req.url);

  const spoonReq = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&${searchParams.toString()}`,
    { cache: "force-cache" }
  );

  const reviews = await getRecipeReviews(id);

  if (!spoonReq.ok) {
    throw new Error(`Request failed with status: ${spoonReq.status}`);
  }

  const recipes: RawRecipe[] = await spoonReq.json();

  return NextResponse.json({ ...recipes, ...reviews });
};
