import type { RecipeWithNutritions } from "./types";

const getRecipe = async (id: number | string) => {
  try {
    let req;
    if (process?.env?.VERCEL === "1") {
      req = await fetch(
        `https://${process.env
          .VERCEL_URL!}/api/recipes/${id}?includeNutrition=true`,
        { cache: "force-cache" }
      );
    } else {
      req = await fetch(
        `http://localhost:3000/api/recipes/${id}?includeNutrition=true`,
        { cache: "force-cache" }
      );
    }

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
