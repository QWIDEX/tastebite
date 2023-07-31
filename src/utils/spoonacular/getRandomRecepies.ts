import randomRecipes from "./RecipesInitial";
import { Recipe } from "./types";

export default async function getRandomRecipes(
  count: number = 1,
  tags: string = ""
): Promise<Recipe[]> {
  if (count <= 0) {
    throw new Error("Count must be a positive number.");
  }

  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

  try {
    const req = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${count}&tags=${tags}&limitLicense=true`
    );

    if (!req.ok) {
      throw new Error(`Request failed with status: ${req.status}`);
    }

    const response = await req.json();
    const recipes = response.recipes;

    return recipes;
  } catch (error: any) {
    throw new Error(`Error occurred: ${error.message}`);
  }
}
