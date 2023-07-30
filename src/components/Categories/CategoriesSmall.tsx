import pastaImg from "@/images/categories/Pasta.png";
import pizzaImg from "@/images/categories/Pizza.png";
import desertsImg from "@/images/categories/Desserts.png";
import smoothiesImg from "@/images/categories/Smoothies.png";
import meatImg from "@/images/categories/Meat.png";
import sandwichesImg from "@/images/categories/Sandwiches.png";
import Category from "./Category";

export default function CategoriesSmall(): React.ReactElement {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-5 leading-normal font-serif">
        Popular Categories
      </h1>
      <div className="flex gap-7 flex-wrap justify-between">
        {/* document.documentElement.scrollWidth / 3 - 40 > 156 ? 156 : document.documentElement.scrollWidth / 3 - 40 */}
        <Category label="Pasta" src={pastaImg} />
        <Category label="Pizza" src={pizzaImg} />
        <Category label="Deserts" src={desertsImg} />
        <Category label="Smoothies" src={smoothiesImg} />
        <Category label="Sandwiches" src={sandwichesImg} />
        <Category label="Meat" src={meatImg} />
      </div>
    </>
  );
}
