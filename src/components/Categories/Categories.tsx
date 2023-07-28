import pastaImg from "@/images/categories/Pasta.png";
import pizzaImg from "@/images/categories/Pizza.png";
import desertsImg from "@/images/categories/Desserts.png";
import smoothiesImg from "@/images/categories/Smoothies.png";
import meatImg from "@/images/categories/Meat.png";
import seafoodImg from "@/images/categories/SeaFood.png";
import sandwichesImg from "@/images/categories/Sandwiches.png";
import soupImg from "@/images/categories/Soup.png";
import panckakesImg from "@/images/categories/Pancakes.png";
import chickenImg from "@/images/categories/Chicken.png";
import cakeImg from "@/images/categories/Cake.png";
import saladImg from "@/images/categories/Salad.png";
import dipsImg from "@/images/categories/Dips.png";
import burgerImg from "@/images/categories/Burger.png";
import wafflesImg from "@/images/categories/Waffles.png";
import Category from "./Category";

export default function Categories() {
  return (
    <div className="flex gap-7 flex-wrap justify-around">
      <Category
        label="Seafood"
        src={seafoodImg}
        size={254}
        className="!text-2xl"
      />
      <Category label="Soup" src={soupImg} size={254} className="!text-2xl" />
      <Category
        label="Pancakes"
        src={panckakesImg}
        size={254}
        className="!text-2xl"
      />
      <Category label="Meat" src={meatImg} size={254} className="!text-2xl" />
      <Category
        label="Chicken"
        src={chickenImg}
        size={254}
        className="!text-2xl"
      />
      <Category label="Pasta" src={pastaImg} size={254} className="!text-2xl" />
      <Category label="Pizza" src={pizzaImg} size={254} className="!text-2xl" />
      <Category label="Cake" src={cakeImg} size={254} className="!text-2xl" />
      <Category label="Dips" src={dipsImg} size={254} className="!text-2xl" />
      <Category
        label="Burger"
        src={burgerImg}
        size={254}
        className="!text-2xl"
      />
      <Category
        label="Waffles"
        src={wafflesImg}
        size={254}
        className="!text-2xl"
      />
      <Category
        label="Deserts"
        src={desertsImg}
        size={254}
        className="!text-2xl"
      />
      <Category
        label="Smoothies"
        src={smoothiesImg}
        size={254}
        className="!text-2xl"
      />
      <Category
        label="Sandwiches"
        src={sandwichesImg}
        size={254}
        className="!text-2xl"
      />
      <Category label="Salad" src={saladImg} size={254} className="!text-2xl" />
    </div>
  );
}
