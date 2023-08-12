import type { RecipeWithNutritions } from "./types";

const getRecipe = async (id: number | string) => {
  try {
    const req = await fetch(
      `http://localhost:3000/api/recipes/${id}?includeNutrition=true`
    );

    if (!req.ok) {
      throw new Error(`Request failed with status: ${req.status}`);
    }

    const recipe: RecipeWithNutritions = await req.json();

    return recipe;
  } catch (error: any) {
    throw new Error(`Error occurred: ${error.message}`);
  }
};

export default getRecipe;
