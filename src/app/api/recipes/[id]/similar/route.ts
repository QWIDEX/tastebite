import getRecipe from "@/services/spoonacular/getRecipe";
import type { SimilarRecipe } from "@/services/spoonacular/types";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const { searchParams } = new URL(req.url);

  const number = searchParams.get("number")!;

  try {
    const req = await fetch(
      `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}&limitLicense=true&${searchParams.toString()}`,
      { cache: "force-cache" }
    );

    if (!req.ok) {
      throw new Error(`Request failed with status: ${req.status}`);
    }

    const similarRecipes: SimilarRecipe[] = await req.json();

    const fullRecipes = await Promise.all(
      similarRecipes
        .slice(0, parseInt(number))
        .map((recipe) => getRecipe(recipe.id))
    );

    return NextResponse.json(fullRecipes);
  } catch (error: any) {
    throw new Error(`Error occurred: ${error.message}`);
  }
}
