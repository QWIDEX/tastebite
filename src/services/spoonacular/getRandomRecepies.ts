import randomRecipes from "./RecipesInitial";
import type { Recipe } from "./types";

export default async function getRandomRecipes(
  count: number = 1,
  tags: string = "",
  revalidate?: number
): Promise<Recipe[]> {
  if (count <= 0) {
    throw new Error("Count must be a positive number.");
  }

  try {
    const req = await fetch(
      `http://localhost:3000/api/recipes/random?number=${count}&tags=${tags}&limitLicense=true`,
      { next: { revalidate: revalidate } }
    );

    if (!req.ok) {
      throw new Error(`Request failed with status: ${req.status}`);
    }

    const recipes: Recipe[] = await req.json();

    return recipes;
  } catch (error: any) {
    throw new Error(`Error occurred: ${error.message}`);
  }
}
