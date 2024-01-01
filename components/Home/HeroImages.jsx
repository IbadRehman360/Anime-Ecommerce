import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function HeroImages({ index, imageUrl }) {
  const images = [
    "/assets/mb1.png",
    "/assets/mb2.png",
    "/assets/mb3.png",
    "/assets/mb4.png",
    "/assets/mb5.png",
    "/assets/mb6.png",
    "/assets/mb7.png",
    "/assets/mb8.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);
  return (
    <div className="relative">
      <img
        className="hidden sm:flex border-x-4    border-y-2  border-black border-opacity-90      3xl:max-h-[40rem] max-h-[32rem] w-full mx-auto filter   brightness-100    contrast-100"
        src={`/assets/effect.png`}
        alt={`bg ${index}`}
      />
      <div className="absolute inset-0 bg-white  opacity-5"></div>
      <img
        src={images[currentIndex]}
        alt={`bg ${currentIndex + 1}`}
        className="sm:hidden border border-black w-full mx-auto my-auto"
      />
    </div>
  );
}
