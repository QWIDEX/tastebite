"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RawRecipe } from "@/services/spoonacular/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RecipesSwiper.css";
import Link from "next/link";

export default function RecipesSwiper({ recipes }: { recipes: RawRecipe[] }) {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      navigation={true}
      className="mySwiper"
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {recipes.map((recipe) => (
        <SwiperSlide key={recipe.id}>
          <div className="w-[90%] max-w-[1500px] relative mx-auto aspect-video">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full rounded-3xl aspect-square sm:aspect-video"
            />
            <div className="absolute sm:p-14 p-5 pb-[13%] flex flex-col justify-end sm:gap-7 gap-1 top-0 left-0 h-full w-full bg-[rgba(0,0,0,.3)] rounded-3xl">
              <Link
                href={`catalog/${recipe.id}`}
                className="text-white text-lg sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl w-full sm:w-[80%] font-serif"
              >
                {recipe.title}
              </Link>
              <h3 className="text-white  md:!text-xl text-xs sm:!text-lg w-[80%]">
                by {recipe.sourceName}
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
