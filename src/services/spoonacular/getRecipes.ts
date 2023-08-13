import type { Recipe, cuisines, diets, intolerances } from "./types";

const getRecipes = async (
  count: number = 1,
  offset: number = 0,
  query: string = "",
  cuisines: cuisines[] = [],
  diets: diets[] = [],
  intolerances: intolerances[] = [],
  tags: string = ""
): Promise<Recipe[]> => {
  if (count <= 0) {
    throw new Error("Count must be a positive number.");
  }

  try {
    const req = await fetch(
      `http://localhost:3000/api/recipes?number=${count}&tags=${tags}&offset=${offset}&query=${query}&cuisine=${cuisines.toString()}&diet=${diets.toString()}&intolerances=${intolerances.toString()}&limitLicense=true`
    );

    if (!req.ok) {
      throw new Error(`Request failed with status: ${req.status}`);
    }

    const recipes: Recipe[] = await req.json();

    return recipes;
  } catch (error: any) {
    throw new Error(`Error occurred: ${error.message}`);
  }
};

export default getRecipes;
