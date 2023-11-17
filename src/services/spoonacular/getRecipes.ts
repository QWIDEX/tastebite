import type { Recipes, cuisines, diets, intolerances, sortOpt } from "./types";

const getRecipes = async ({
  count = 1,
  offset = 0,
  query = "",
  cuisines = [],
  diets = [],
  intolerances = [],
  excludeCuisine = [],
  tags = "",
  sort = "random",
  sortDirection = "desc",
}: {
  count: number;
  offset?: number;
  query?: string;
  cuisines?: cuisines[];
  excludeCuisine?: cuisines[];
  diets?: diets[];
  intolerances?: intolerances[];
  tags?: string;
  sort?: sortOpt;
  sortDirection?: "asc" | "desc";
}): Promise<Recipes> => {
  if (count <= 0) {
    throw new Error("Count must be a positive number.");
  }

  try {
    let req;
    if (process?.env?.VERCEL === "1") {
      req = await fetch(
        `https://${process.env
          .VERCEL_URL!}/api/recipes?number=${count}&tags=${tags}&offset=${offset}&query=${query}&sort=${sort}&sortDirection=${sortDirection}&cuisine=${cuisines.toString()}&excludeCuisine=${excludeCuisine.toString()}&diet=${diets.toString()}&intolerances=${intolerances.toString()}&limitLicense=true`
      );
    } else {
      req = await fetch(
        `http://localhost:3000/api/recipes?number=${count}&tags=${tags}&offset=${offset}&query=${query}&sort=${sort}&sortDirection=${sortDirection}&cuisine=${cuisines.toString()}&excludeCuisine=${excludeCuisine.toString()}&diet=${diets.toString()}&intolerances=${intolerances.toString()}&limitLicense=true`
      );
    }

    if (!req.ok) {
      throw new Error(`Request failed with status: ${req.status}`);
    }

    const recipes: Recipes = await req.json();

    return recipes;
  } catch (error: any) {
    throw new Error(`Error occurred: ${error.message}`);
  }
};

export default getRecipes;
