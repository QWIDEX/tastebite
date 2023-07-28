import { Recipe, cuisines, diets, intolerances } from "./types";

const getRecipes = async (
  offset: number = 0,
  count: number = 1,
  tags: string = "",
  query: string = "",
  cuisines: cuisines[] = [],
  diets: diets[] = [],
  intolerances: intolerances[] = []
): Promise<Recipe[]> => {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

  const req = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=${count}&tags=${tags}&offset=${offset}&query=${query}&cuisine=${cuisines.toString()}&diet=${diets.toString()}&intolerances=${intolerances.toString()}&limitLicense=true`
  );

  const recipes = (await req.json()).results;

  return recipes;
};

export default getRecipes;
