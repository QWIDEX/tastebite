import { NextResponse } from "next/server";
import type { Recipe } from "@/utils/spoonacular/types";

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

  if (!spoonReq.ok) {
    throw new Error(`Request failed with status: ${spoonReq.status}`);
  }

  const recipes: Recipe[] = await spoonReq.json();

  return NextResponse.json(recipes);
};
