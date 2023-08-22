import Catalog from "@/components/Catalog/Catalog";
import RateReceipt from "@/components/RateReceipt/RateReceipt";
import SmallRecipeCard from "@/components/RecipeCards/SmallRecipeCard";
import H2 from "@/ui/H2";
import getRecipe from "@/services/spoonacular/getRecipe";
import { Metadata } from "next";
import Image from "next/image";
import getSimilarRecipes from "@/services/spoonacular/getSimilarRecipes";
import H1 from "@/ui/H1";
import getRandomRecipes from "@/services/spoonacular/getRandomRecepies";
import RecipeCreateReview from "@/components/RecipeCreateReview/RecipeCreateReview";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

export function gemnerateStaticParams() {
  return {
    slug: [
      644965, 721185, 637458, 633126, 716245, 637535, 657377, 638343, 639537,
      635182, 636641, 636601, 643916, 715538, 660322, 644857, 1045246, 639644,
      656329, 631785, 649131, 633678, 655573, 641066, 637187, 648474, 650593,
      663051, 792705, 638245, 660284, 653234, 661544, 660685, 651990, 662859,
      663219, 649598, 632481, 648769, 642468, 644842, 634437, 658007, 635070,
      635291, 638199, 654018, 646877, 631863, 649132, 654614, 642276, 663985,
      641284, 660243, 655406, 643268, 632552, 664087, 661834, 634511, 640366,
      640844, 642129, 665352, 715494, 658318, 663833, 636766, 641308, 642453,
      662463, 664501, 716202, 655132, 652111, 647555, 664969, 661340, 639125,
      640927, 637883, 716279, 792587, 975070, 662038, 640451, 662535, 715477,
      655078, 641005, 642096, 638604, 666262, 632847, 664408, 664269, 1046983,
      660048,
    ],
  };
}

export default async function Recipe({ params: { id } }: Props) {
  const {
    title,
    sourceName,
    sourceUrl,
    image,
    readyInMinutes,
    servings,
    extendedIngredients,
    analyzedInstructions,
    nutrition,
    reviews,
  } = await getRecipe(id);

  const similarRecipes = await getSimilarRecipes(id, 100);

  return (
    <div className="xl:w-4/5 sm:px-7 px-3 mx-auto">
      <div>
        <H1>{title}</H1>
        <div className="flex items-center mb-20 after:w-full relative after:absolute after:content-[''] after:-bottom-8 after:h-0.5 after:rounded-full after:bg-gray-200 rounded-lg gap-5 mt-7">
          <a
            className="font-medium text-lg transition-all duration-300 hover:text-blue-400 "
            href={sourceUrl}
          >
            {sourceName}
          </a>
          <div className="flex gap-2 text-gray-400">
            <RateReceipt editing={false} /> 0 Reviews
          </div>
        </div>
        <Image
          src={image}
          width={1200}
          sizes="(max-width: 1200px) 1200px,  90vw"
          priority={true}
          className="w-full  rounded-lg mx-auto aspect-video "
          height={720}
          alt={title}
        />
      </div>
      <div className="mt-10 flex lg:flex-row items-center lg:items-start flex-col gap-5">
        <div className="lg:w-2/3 after:absolute after:hidden lg:after:block relative after:h-full after:rounded-full after:w-0.5 after:bg-gray-200 rounded-lg  after:top-0 after:-right-2 lg:pr-5">
          <div className="flex gap-7 ">
            <div className="relative after:absolute after:h-full after:-right-3.5 after:w-0.5 after:bg-gray-200 rounded-lg  after:rounded-full after:content-[''] after:top-0">
              <h4 className="text-gray-400 text-center uppercase">prep time</h4>
              <p className="uppercase text-center">{readyInMinutes} min</p>
            </div>
            <div>
              <h4 className="text-gray-400 text-center uppercase">servings</h4>
              <p className="uppercase text-center">{servings} people</p>
            </div>
          </div>
          <div className="mt-7">
            <H2 className="">Ingredients</H2>
            <ul className="ml-5 mt-4">
              {extendedIngredients.map((ingridient, idx, arr) =>
                arr.findIndex((ingrid) => ingrid.id === ingridient.id) ===
                idx ? (
                  <li
                    key={ingridient.id}
                    className="relative before:absolute before:rounded-full before:-left-4 before:h-2.5 before:w-2.5 before:border-[2px] before:border-black before:top-[50%] before:translate-y-[-50%] my-1.5 text-lg"
                  >
                    {ingridient.original}
                  </li>
                ) : (
                  <></>
                )
              )}
            </ul>
          </div>
          <div className="mt-7">
            <H2>Instructions</H2>
            <ol className="ml-7 list-decimal mt-4">
              {analyzedInstructions[0].steps.map((step: any) => (
                <li
                  key={step.number}
                  className={`relative before:absolute marker:text-white marker:font-medium before:-left-[26.5px] before:h-[26px] before:top-[1px] before:content-[''] before:w-[26px] before:text-base before:bg-[#ff642f] before:-z-10  before:rounded-full before:p-0.5  before:block my-1.5 text-lg`}
                >
                  {step.step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="lg:w-1/3 w-full lg:pl-5 flex lg:flex-col justify-between flex-wrap lg:items-end">
          <div className="bg-gray-50 h-fit shadow last:after:hidden rounded-lg max-w-[350px]  py-10 px-5">
            <H2>Nutrition Facts</H2>
            <ul className="mt-3">
              {nutrition.nutrients.map((nutrient) => {
                if (
                  [
                    "potassium",
                    "protein",
                    "sodium",
                    "cholesterol",
                    "sugar",
                    "carbohydrates",
                    "saturated Fat",
                    "calories",
                    "fat",
                  ].includes(nutrient.name.toLowerCase())
                ) {
                  return (
                    <li
                      key={nutrient.name}
                      className="my-1.5 text-lg flex justify-between after:absolute relative after:w-full after:h-0.5 after:bg-gray-200 after:left-0 after:-bottom-1  "
                    >
                      <span>{nutrient.name}</span>
                      <span>
                        {nutrient.amount} {nutrient.unit}
                      </span>
                    </li>
                  );
                } else return <></>;
              })}
            </ul>
          </div>
          {similarRecipes.length > 0 ? (
            <div className="lg:mt-7 mt-10 w-[300px]">
              <H2 className="!w-fit">Simmilar Recipes</H2>
              <Catalog
                RecipeCard={SmallRecipeCard}
                className="mt-4"
                recipes={similarRecipes}
              />
            </div>
          ) : (
            <div className="lg:mt-7 mt-10 w-[300px]">
              <H2 className="!w-fit">Fresh Recipes</H2>
              <Catalog
                RecipeCard={SmallRecipeCard}
                className="mt-4"
                recipes={await getRandomRecipes(5)}
              />
            </div>
          )}

          {/* TODO: Make and insert here mail subscription*/}
        </div>
      </div>
      <RecipeCreateReview className="mt-28" />
      <div className="mt-28">
        <div className="w-full relative after:absolute after:rounded-full after:bg-slate-200 after:h-0.5 after:w-full after:-bottom-5 mb-14 after:left-0">
          <H1 className="w-fit inline-block mr-1">Comments</H1>
          <span>({reviews.length})</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}
