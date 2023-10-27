"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import LatestDropDisplay from "./DisplayProducts";
import Link from "next/link";
import SlideButton from "@components/Home/SliderButton";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 10.0,
    color: "Black",
    discountPrice: 200.0,
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 20,
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 10.0,
    color: "Black",
    discountPrice: 120.0,
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 40,
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    discountPrice: 8,
    imageAlt: "Front of men's Basic Tee in black.",
    price: 50,
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 60,
    discountPrice: 800.0,

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
    <div className="md:mt-8 mx-auto max-w-2xl px-2 py-2 sm:px-6 md:max-w-[110rem] w-full  ">
      <h2 className="  font-bungee  text-2xl sm:text-3xl    lg:text-4xl mb-2  tracking-wider font-semibold leading-6 text-center mt-10 lg:mt-12  text-gray-900">
        Trending Product
      </h2>
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
          className="carousel-item mx-auto my-4 w-full gap-2 sm:w-full md:gap-3"
        >
          {displayedProducts1.map((product) => (
            <LatestDropDisplay key={product.id} products={product} />
          ))}
        </div>
        <div
          id="featuredProductsSlide4"
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
        featuredProductsSlide1={"#featuredProductsSlide3"}
        featuredProductsSlide2={"#featuredProductsSlide4"}
      />
    </div>
  );
}

export default TrendingProduct;
