import { ObjectId } from "mongodb";

export interface RecipeReviews {
  docId: string;
  reviews: [
    {
      id: string;
      comment: string;
      rating: number;
      userId: number | string;
    }
  ];
}
