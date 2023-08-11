import { NextResponse } from "next/server";
import type { Recipe } from "@/utils/spoonacular/types";

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

  const recipes: Recipe[] = (await spoonReq.json()).results;

  return NextResponse.json(recipes);
};
