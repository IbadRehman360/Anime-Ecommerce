"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import HeroImages from "./HeroImages";

export default function HeroCarousel() {
  const images = Array.from({ length: 1 }, (_, index) => `${index + 1}.webp`);

  return (
    <div
      className="w-full 
      "
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={imageUrl}>
            <img className="w-full  h-0.5 bg-black" src="/assets/lll.webp" />

            <HeroImages index={index} imageUrl={imageUrl} />
            <img className="w-full  h-0.5 bg-black" src="/assets/lll.webp" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
