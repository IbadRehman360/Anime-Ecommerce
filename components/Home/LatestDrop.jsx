"use client";

import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import LatestDropDisplay from "./LatestDropDisplay";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];
function LatestDrop() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
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
    <div className="mt-8 mx-auto max-w-2xl px-2 py-2 sm:px-6 md:max-w-[110rem] w-full  bg-[#fdfdfd]">
      <div className="mr-2 flex items-center justify-between">
        <h2 className="  font-bungee  text-3xl lg:text-4xl tracking-wider font-semibold leading-6 text-center mt-10 lg:mt-12 text-gray-700">
          Latest Drops{" "}
        </h2>
        <Link href={"/dashboard"}>
          <div className="hidden items-center gap-2 sm:flex">
            <span>Discover All</span>
            <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
              <a onClick={handleNextPage} href="#" className="">
                <MdKeyboardArrowRight />
              </a>
            </div>
          </div>
        </Link>

        <div className="sm:hidden">
          {currentSlide < 1 && (
            <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
              <a
                onClick={handleNextPage}
                href="#mbTrendingProductsSlide2"
                className=""
              >
                <MdKeyboardArrowRight />
              </a>
            </div>
          )}
          {currentSlide > 0 && (
            <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
              <a
                onClick={handlePrevPage}
                href="#mbTrendingProductsSlide1"
                className=""
              >
                <MdKeyboardArrowLeft />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="carousel-center hidden  sm:flex w-full gap-x-4 rounded-lg sm:carousel">
        <div id="trendingProductsSlide1" className="carousel-item">
          {products.slice(0, 4).map((Product) => (
            <LatestDropDisplay key={Product.id} products={Product} />
          ))}
        </div>
        <div
          id="trendingProductsSlide"
          className="carousel-item w-full gap-4 sm:gap-5 lg:gap-8"
        >
          {products.slice(0, 4).map((Product) => (
            <LatestDropDisplay key={Product.id} products={Product} />
          ))}
        </div>
      </div>

      <div className="carousel relative w-full gap-x-4 rounded-lg sm:hidden">
        <div
          id="mbLatestDropDisplaysSlide1"
          className="carousel-item w-full gap-1 sm:gap-5 md:gap-10"
        >
          {products.slice(0, 2).map((Product) => (
            <LatestDropDisplay key={Product.id} products={Product} />
          ))}
        </div>
        <div
          id="mbLatestDropDisplaysSlide2"
          className="carousel-item w-full gap-1 sm:gap-5 md:gap-10"
        >
          {products.slice(2, 4).map((Product) => (
            <LatestDropDisplay key={Product.id} products={Product} />
          ))}
        </div>
      </div>

      <div className="mt-2 flex justify-center text-xs sm:mt-4 md:mt-6">
        <p
          className="text-[0.97rem] sm:text-[1rem] md:hidden"
          style={{ letterSpacing: "0.1em" }}
        >
          {currentSlide < 1 ? "1/2" : "2/2"}
        </p>
        <div className="hidden justify-center md:flex">
          <a
            href="#trendingProductsSlide1"
            onClick={handlePrevPage}
            className={`mr-1 block h-[4px] w-[28px] rounded-2xl ${
              currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
            id="prevPage"
          />
          <a
            href="#trending
            sSlide2"
            onClick={handleNextPage}
            className={`mr-1 block h-[4px] w-[28px] rounded-2xl ${
              currentSlide === 1 ? "bg-[#f03827]" : "bg-[#888888]"
            } `}
          />
        </div>
      </div>
    </div>
  );
}
export default LatestDrop;
