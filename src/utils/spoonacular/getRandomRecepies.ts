import { Recipe } from "./types";

export default async function getRandomRecepies(
  count: number = 1,
  tags: string = ""
): Promise<Recipe[]> {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

  const req = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${count}&tags=${tags}&limitLicense=true`
  );

  const recipes = (await req.json()).recipes;

  return recipes;
}
