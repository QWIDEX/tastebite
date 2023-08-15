import type { RecipeReviews } from "@/utils/mongoDB/types";

export interface RawRecipe {
  aggregateLikes: number;
  analyzedInstructions: any[];
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: Array<string>;
  dairyFree: boolean;
  diets: string[];
  dishTypes: string[];
  extendedIngredients: any[];
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  license: string;
  lowFodmap: boolean;
  occasions: string[];
  originalId: string | null;
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  summary: string;
  sustainable: boolean;
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
}

export interface Recipe extends RecipeReviews, RawRecipe {}

export interface SimilarRecipe {
  id: number;
  imageType: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
}

export interface RawRecipeWithNutritions extends RawRecipe {
  nutrition: {
    nutrients: any[];
    weightPerServing: any[];
    caloricBreakdown: any[];
    ingredients: any[];
    flavonoids: any[];
    properties: any[];
  };
}

export interface RecipeWithNutritions
  extends RecipeReviews,
    RawRecipeWithNutritions {}

export type cuisines =
  | "african"
  | "asian"
  | "american"
  | "british"
  | "cajun"
  | "caribbean"
  | "chinese"
  | "eastern european"
  | "european"
  | "french"
  | "german"
  | "greek"
  | "indian"
  | "irish"
  | "italian"
  | "japanese"
  | "jewish"
  | "korean"
  | "latin american"
  | "mediterranean"
  | "mexican"
  | "middle eastern"
  | "nordic"
  | "southern"
  | "spanish"
  | "thai"
  | "vietnamese";

export type diets =
  | "Gluten Free"
  | "Whole30"
  | "Low FODMAP"
  | "Primal"
  | "Paleo"
  | "Pescetarian"
  | "Vegan"
  | "Ovo-Vegetarian"
  | "Lacto-Vegetarian"
  | "Vegetarian"
  | "Ketogenic";

export type intolerances =
  | "Dairy"
  | "Egg"
  | "Gluten"
  | "Grain"
  | "Peanut"
  | "Seafood"
  | "Sesame"
  | "Shellfish"
  | "Soy"
  | "Sulfite"
  | "Tree Nut"
  | "Wheat";
