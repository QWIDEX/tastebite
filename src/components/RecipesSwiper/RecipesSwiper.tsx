"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Recipe } from "@/utils/spoonacular/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RecipesSwiper.css";

export default function RecipesSwiper({ recipes }: { recipes: Recipe[] }) {
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
              className="w-full rounded-3xl aspect-video"
            />
            <div className="absolute p-14 pb-40 flex flex-col justify-end gap-7 top-0 left-0 h-full w-full bg-[rgba(0,0,0,.3)] rounded-3xl">
              <h1 className="text-white text-7xl w-[80%] font-serif">
                {recipe.title}
              </h1>
              <h3 className="text-white text-xl w-[80%]">
                by {recipe.sourceName}
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
