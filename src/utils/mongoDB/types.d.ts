import { ObjectId } from "mongodb";

export interface RecipeReviews {
  docId: string;
  reviews: [
    {
      id: string;
      comment: string;
      rating: number;
      userId: number | string;
    }?
  ];
}

export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}
