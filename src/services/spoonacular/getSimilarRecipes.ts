import type { RecipeWithNutritions } from "./types";

export default async function getSimilarRecipes(
  id: number | string,
  number: number
) {
  try {
    let req;
    if (process?.env?.VERCEL === "1") {
      req = await fetch(
        `https://${process.env
          .VERCEL_URL!}/api/recipes/${id}/similar?number=${number}`
      );
    } else {
      req = await fetch(
        `http://localhost:3000/api/recipes/${id}/similar?number=${number}`
      );
    }

    if (!req.ok) {
      throw new Error(`Request failed with status: ${req.status}`);
    }

    const recipes: RecipeWithNutritions[] = await req.json();

    return recipes;
  } catch (error: any) {
    throw new Error(`Error occurred: ${error.message}`);
  }
}
