import RateReceipt from "@/components/RateReceipt/RateReceipt";
import H1 from "@/ui/H1";
import getRecipe from "@/utils/spoonacular/getRecipe";
import { Metadata } from "next";
import Image from "next/image";

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
  } = await getRecipe(id);

  return (
    <div className="w-4/5 mx-auto">
      <div>
        <h1 className="font-serif text-5xl font-semibold ">{title}</h1>
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
      <div className="mt-14 flex gap-5">
        <div className="w-2/3 after:absolute relative after:h-full after:rounded-full after:w-0.5 after:bg-gray-200 rounded-lg  after:top-0 after:-right-2 pr-5">
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
          <div className="mt-10">
            <H1 className="">Ingredients</H1>
            <ul className="ml-5 mt-4">
              {extendedIngredients.map((ingridient) => (
                <li className="relative before:absolute before:rounded-full before:-left-4 before:h-2.5 before:w-2.5 before:border-[2px] before:border-black before:top-[50%] before:translate-y-[-50%] my-1.5 text-lg">
                  {ingridient.original}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-7">
            <H1>Instructions</H1>
            <ol className="ml-7 list-decimal mt-4">
              {analyzedInstructions[0].steps.map((step: any) => (
                <li
                  key={step.number}
                  className={`relative before:absolute marker:text-white marker:font-medium before:-left-[26px] before:h-[26px] before:top-[1px] before:content-[''] before:w-[26px] before:text-base before:bg-[#ff642f] before:-z-10  before:rounded-full before:p-0.5  before:block my-1.5 text-lg`}
                >
                  {step.step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="w-1/3 pl-5">
          <div className="bg-gray-50 shadow last:after:hidden rounded-lg max-w-[350px] ml-auto py-10 px-5">
            <H1>Nutrition Facts</H1>
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
                      className="my-1.5 text-lg after:absolute relative after:w-full after:h-0.5 after:bg-gray-200 after:left-0 after:-bottom-1  "
                    >
                      {nutrient.name} {nutrient.amount} {nutrient.unit}
                    </li>
                  );
                } else return null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
