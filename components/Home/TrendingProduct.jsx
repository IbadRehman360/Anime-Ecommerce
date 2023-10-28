"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import LatestDropDisplay from "./DisplayProducts";
import Link from "next/link";
import SlideButton from "@components/Home/SliderButton";
import { MdTrendingUp, MdWhatshot } from "react-icons/md";

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
function TrendingProduct() {
  const [sliceEnd, setSliceEnd] = useState(calculateSliceEnd());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedProducts1, setDisplayedProducts1] = useState([]);
  const [displayedProducts2, setDisplayedProducts2] = useState([]);

  function calculateSliceEnd() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1800) {
      return 5;
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
    <div className="md:mt-16 mx-auto max-w-2xl md:px-6 px-2 py-2 mt-6  pb-16 border-t  md:max-w-[110rem] w-full  ">
      <div className="text-center lg:mt-6 pt-10 pb-4">
        <h2 className="text-3xl lg:text-4xl sm:text-5xl flex justify-center  items-center text-gray-900 font-bungee">
          Trending <span className="hidden sm:flex pl-3">Products</span>
          <MdTrendingUp className="inline-block  ml-3 mb-3.5 " />
        </h2>
      </div>
      {/* <Link href={"/dashboard"}>
        <div className="hidden items-center gap-2 sm:flex">
          <span>Discover All</span>
          <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
            <a onClick={handleNextPage} href="#" className="">
              <MdKeyboardArrowRight />
            </a>
          </div>
        </div>
      </Link> */}
      <div className="carousel mt-2 w-full justify-items-stretch sm:mt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
        <div
          id="featuredProductsSlide3"
          className="carousel-item mx-auto my-2 md:my-4 w-full gap-1 sm:w-full md:gap-3"
        >
          {displayedProducts1.map((product) => (
            <LatestDropDisplay key={product.id} products={product} />
          ))}
        </div>
        <div
          id="featuredProductsSlide4"
          className="carousel-item mx-auto my-2 md:my-4 w-full gap-1 sm:w-full md:gap-3"
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
        featuredProductsSlide1={"#featuredProductsSlide3"}
        featuredProductsSlide2={"#featuredProductsSlide4"}
      />
    </div>
  );
}

export default TrendingProduct;
