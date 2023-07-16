export default async function getRandomRecepies(
  count: number = 1,
  tags: string = ""
) {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  const req = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${count}&tags=${tags}`
  );
  return await req.json();
}
