import { ObjectId } from "mongodb";

export interface RecipeReviews {
  docId: string;
  reviews: [
    {
      recipeId: string;
      comment: string;
      rating: number;
      userId: number | string;
    }?
  ];
}
