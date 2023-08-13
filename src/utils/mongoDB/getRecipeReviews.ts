import { MongoClient, ObjectId } from "mongodb";
import { RecipeReviews } from "./types";

export default async function getRecipeReviews(
  id: string
): Promise<RecipeReviews> {
  const uri = process.env.MONGODB_URI!;

  const client = new MongoClient(uri);

  try {
    const database = client.db("tastebite");

    const recipesReviews = database.collection("recipesReviews");

    const query = { id: id };

    let recipeReviews: any = await recipesReviews.findOne(query);

    if (!recipeReviews) {
      const objectId = new ObjectId();
      await recipesReviews.insertOne({ _id: objectId, reviews: [] });
      console.log(objectId.toString());
      recipeReviews = {
        _id: objectId,
        docId: objectId.toString(),
        reviews: [],
      };
    } else {
      recipeReviews = { ...recipeReviews, docId: recipeReviews._id.toString() };
    }

    delete recipeReviews._id;

    return recipeReviews;
  } finally {
    await client.close();
  }
}
