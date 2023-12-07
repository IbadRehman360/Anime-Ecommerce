"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import HeroImages from "./HeroImages";
import Image from "next/image";

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
            <HeroImages index={index} imageUrl={imageUrl} />
            <Image
              width={10}
              height={10}
              className="w-full  h-[1px] bg-black"
              src="/assets/lll.webp"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
