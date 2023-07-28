export interface Recipe {
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
