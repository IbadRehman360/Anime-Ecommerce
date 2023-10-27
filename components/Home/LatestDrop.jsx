"use client";

import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import LatestDropDisplay from "./DisplayProducts";
import { useEffect, useState } from "react";
import SlideButton from "@components/Home/SliderButton";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/1.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 10.0,
    color: "Black",
    discountPrice: 200.0,
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/2.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 20,
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 10.0,
    color: "Black",
    discountPrice: 120.0,
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/3.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 40,
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/6.jpg",
    discountPrice: 8,
    imageAlt: "Front of men's Basic Tee in black.",
    price: 50,
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/5.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 60,
    discountPrice: 800.0,

    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/6.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 70,
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/9.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 80,
    discountPrice: 822.0,

    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/8.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 90,
    discountPrice: 300.0,
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/9.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 100,
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/3.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 110,
    discountPrice: 200.0,

    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "assets/latest/2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 120,
    color: "Black",
  },
];
function LatestDrop() {
  const [sliceEnd, setSliceEnd] = useState(calculateSliceEnd());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedProducts1, setDisplayedProducts1] = useState([]);
  const [displayedProducts2, setDisplayedProducts2] = useState([]);

  function calculateSliceEnd() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1800) {
      return 6;
    } else if (windowWidth >= 720 && windowWidth < 900) {
      return 3;
    } else if (windowWidth >= 200 && windowWidth < 720) {
      return 2;
    } else if (windowWidth >= 800 && windowWidth < 1400) {
      return 4;
    } else {
      return 5;
    }
  }
  useEffect(() => {
    function updateSliceEnd() {
      setSliceEnd(calculateSliceEnd());
    }

    window.addEventListener("resize", updateSliceEnd);

    return () => {
      window.removeEventListener("resize", updateSliceEnd);
    };
  }, []);

  useEffect(() => {
    if (products) {
      const sliceEnd1 = sliceEnd;
      const sliceEnd2 = sliceEnd * 2;

      setDisplayedProducts1(products.slice(0, sliceEnd1));
      setDisplayedProducts2(products.slice(sliceEnd1, sliceEnd2));
    }
  }, [sliceEnd]);

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  return (
    <div className="md:mt-12 mx-auto max-w-2xl px-2 py-2 mt-6 sm:px-6 md:max-w-[110rem] w-full  ">
      <div className="text-center">
        <h2 className="font-bungee text-2xl sm:text-3xl lg:text-[2.5rem] mb-2 tracking-wider font-semibold leading-6 text-gray-900">
          LATEST ACCESSORIES
        </h2>
      </div>

      <div className="flex justify-center pt-4 pb-5 text-[0.85rem]   border-b border-gray-300   lg:mt-0">
        <div className="flex flex-col items-center   mx-3">
          <span className=" ">SHOP BY BRACELETS</span>
        </div>
        <div className="flex flex-col items-center mx-3">
          <span className="    ">SHOP BY CAPS</span>
        </div>
        <div className="flex flex-col items-center mx-3">
          <span className="  ">SHOP BY BAGS</span>
        </div>
        <div className="flex flex-col items-center mx-3">
          <span className="    ">SHOP BY NECKLACE</span>
        </div>
        <div className="flex flex-col items-center mx-3">
          <span className="  ">SHOP BY KEYCHAIN</span>
        </div>
      </div>

      <div className="carousel pt-4 w-full justify-items-stretch sm:mt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
        <div
          id="featuredProductsSlide1"
          className="carousel-item mx-auto my-4 w-full gap-2 sm:w-full md:gap-3"
        >
          {displayedProducts1.map((product) => (
            <LatestDropDisplay key={product.id} products={product} />
          ))}
        </div>
        <div
          id="featuredProductsSlide2"
          className="carousel-item mx-auto my-4 gap-2 w-full md:gap-3"
        >
          {displayedProducts2.map((product) => (
            <LatestDropDisplay key={product.id} products={product} />
          ))}
        </div>
      </div>

      <SlideButton
        currentSlide={currentSlide}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        featuredProductsSlide1={"#featuredProductsSlide1"}
        featuredProductsSlide2={"#featuredProductsSlide2"}
      />
    </div>
  );
}
export default LatestDrop;
