import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function HeroImages({ index, imageUrl }) {
  const images = ["/assets/var.svg", "/assets/banner.jpg"];
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
        className="hidden sm:flex border-x-4     border-y-2  border-black border-opacity-90 3xl:max-h-[44rem]     max-h-[36rem] w-full mx-auto filter   brightness-100    contrast-100"
        src={`/assets/pcvar.svg`}
        alt={`bg ${index}`}
      />
      <div className="absolute inset-0 bg-black  opacity-5 hover:opacity-0"></div>
      <img
        src={`/assets/pcvar.svg`}
        alt={`bg ${currentIndex + 1}`}
        className="sm:hidden border w-full h-80    object-fill   border-black    mx-auto my-auto"
      />
    </div>
  );
}
