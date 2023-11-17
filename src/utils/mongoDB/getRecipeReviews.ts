import { ObjectId } from "mongodb";
import { RecipeReviews } from "./types";
import getClient from "./getClient";

export default async function getRecipeReviews(
  id: string
): Promise<RecipeReviews> {
  try {
    const client = await getClient();
    const database = client.db("tastebite");
    const recipesReviews = database.collection("recipesReviews");

    let recipeReviews: any = await recipesReviews.findOne({ recipeId: id });

    if (!recipeReviews) {
      const objectId = new ObjectId();
      recipeReviews = {
        _id: objectId,
        recipeId: id,
        reviews: [],
      };
      await recipesReviews.insertOne(recipeReviews);
    }

    recipeReviews = { ...recipeReviews, docId: recipeReviews._id.toString() };

    if (recipeReviews.recipeId) delete recipeReviews.recipeId;
    delete recipeReviews._id;

    return recipeReviews;
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}
