import pastaImg from "@/images/categories/Pasta.png";
import pizzaImg from "@/images/categories/Pizza.png";
import desertsImg from "@/images/categories/Desserts.png";
import smoothiesImg from "@/images/categories/Smoothies.png";
import meatImg from "@/images/categories/Meat.png";
import sandwichesImg from "@/images/categories/Sandwiches.png";
import Category from "./Category";
import H1 from "@/ui/H1";

export default function CategoriesSmall({
  className = "",
}: {
  className?: string;
}): React.ReactElement {
  return (
    <div className={className}>
      <H1 className="mb-5">Popular Categories</H1>
      <div className="flex gap-5 flex-wrap justify-between">
        <Category
          label="Pasta"
          className="max-w-[calc(30%-10px)]"
          src={pastaImg}
        />
        <Category
          label="Pizza"
          src={pizzaImg}
          className="max-w-[calc(30%-10px)]"
        />
        <Category
          label="Deserts"
          src={desertsImg}
          className="max-w-[calc(30%-10px)]"
        />
        <Category
          label="Smoothies"
          src={smoothiesImg}
          className="max-w-[calc(30%-10px)]"
        />
        <Category
          label="Sandwiches"
          src={sandwichesImg}
          className="max-w-[calc(30%-10px)]"
        />
        <Category
          label="Meat"
          src={meatImg}
          className="max-w-[calc(30%-10px)]"
        />
      </div>
    </div>
  );
}
