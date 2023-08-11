import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Recipe } from "@/utils/spoonacular/types";

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

  const recipes: Recipe[] = (await spoonReq.json()).recipes;

  return NextResponse.json(recipes, { status: spoonReq.status });
};
