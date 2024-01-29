"use client";
import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";
// import { FaGreaterThan } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CategoryCard from "./CategoryCard";

export default function Example() {
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

  const visibleData = callouts.slice(currentSlide * 6, (currentSlide + 1) * 6);
  return (
    <div className="pt-1 pb-1">
      <div className=" bg-white sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-16  pt-10 pb-4   dark">
        <div className="border-gray-200 ">
          <div className="text-center ">
            <div className="  flex items-center justify-between">
              <h2 className="mx-auto flex text-center  justify-center items-center font-montserrat pl-4 sm:pl-28 text-[1.7rem] tracking-wide leading-9 font-extrabold sm:text-[2.2rem] lg:text-[2.6rem] uppercase sm:pb-2 lg:pb-2 text-gray-900">
                SHOP BY ANIME
              </h2>
              <Link href={"/category/all-products"}>
                <div className=" items-center md:flex hidden gap-2">
                  <span className="font-poppins mr-1">Discover All</span>
                  <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
                    <a onClick={handleNextPage} href="#" className="">
                      <MdKeyboardArrowRight />
                    </a>
                  </div>
                </div>
              </Link>
              <div className="sm:hidden mr-1.5 mb-1">
                {currentSlide < 1 && (
                  <div className="rounded-full border-[1px] border-black   bg-white p-0.5 shadow-sm">
                    <a
                      onClick={handleNextPage}
                      href="#mbTrendingGiftCardsSlide2"
                      className=""
                    >
                      <MdKeyboardArrowRight />
                    </a>
                  </div>
                )}
                {currentSlide > 0 && (
                  <div className="rounded-full border-[1px] border-black   bg-white p-1 shadow-sm">
                    <a
                      onClick={handlePrevPage}
                      href="#mbTrendingGiftCardsSlide1"
                      className=""
                    >
                      <MdKeyboardArrowLeft />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8  overflow-hidden  bg-[#fdfdfd]">
          <div className="carousel-center mx-6   hidden w-full gap-x-4 rounded-lg xl:carousel">
            <div
              id="trendingGiftCardsSlide1"
              className="carousel-item   w-full gap-2  xl:gap-4"
            >
              {visibleData.slice(0, 7).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
            <div
              id="trendingGiftCardsSlide2"
              className="carousel-item w-full gap-4 sm:gap-5 lg:gap-8"
            >
              {visibleData.slice(0, 7).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
          </div>
          <div className="carousel-center mx-6 hidden  xl:hidden w-full gap-x-4 rounded-lg lg:carousel">
            <div
              id="trendingGiftCardsSlide1"
              className="carousel-item   w-full gap-2  xl:gap-4"
            >
              {visibleData.slice(0, 5).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
            <div
              id="trendingGiftCardsSlide2"
              className="carousel-item w-full gap-4 sm:gap-5 lg:gap-8"
            >
              {visibleData.slice(0, 5).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
          </div>

          <div className="carousel hidden md:flex mx-4 relative w-full gap-x-4 rounded-lg lg:hidden">
            <div
              id="mbTrendingGiftCardsSlide1"
              className="carousel-item   w-full gap-2  xl:gap-4"
            >
              {callouts.slice(0, 5).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
            <div
              id="mbTrendingGiftCardsSlide2"
              className="carousel-item   w-full gap-2  xl:gap-4"
            >
              {callouts.slice(3, 8).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
          </div>
          <div className="carousel-item w-full  md:hidden  gap-1 sm:gap-5 md:gap-10">
            {callouts.slice(0, 3).map((Anime) => (
              <CategoryCard key={Anime.id} Anime={Anime} />
            ))}
          </div>
          <div className="carousel-item w-full  md:hidden   gap-1 sm:gap-5 md:gap-10">
            {callouts.slice(3, 6).map((Anime) => (
              <CategoryCard key={Anime.id} Anime={Anime} />
            ))}
          </div>

          <div className="mt-2 flex  font-opensans   justify-center text-xs sm:mt-4 md:mt-6">
            <p
              className="text-[0.97rem] pt-2 pb-3 sm:text-[1rem] md:hidden"
              style={{ letterSpacing: "0.1em" }}
            >
              {currentSlide < 1 ? "1/4" : "2/2"}
            </p>
            <div className="hidden justify-center md:flex">
              <a
                href="#trendingGiftCardsSlide1"
                onClick={handlePrevPage}
                className={`mr-1 block h-[5px] w-[28px] rounded-2xl ${
                  currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
                } `}
                id="prevPage"
              />
              <a
                href="#trendingGiftCardsSlide2"
                onClick={handleNextPage}
                className={`mr-1 block h-[5px] w-[28px] rounded-2xl ${
                  currentSlide === 1 ? "bg-[#f03827]" : "bg-[#888888]"
                } `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

var callouts = [
  {
    name: "Baruto",
    description: "Work from home accessories",
    imageSrc:
      "//www.animehouse.co.nz/cdn/shop/collections/31ebc4370166f179d3bfdc3e4fceb5b0_960x540.jpg?v=1611116599",
    path: "/category/654cc5ce72d1fa8b7fc130f3",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Code Grease",
    description: "Journals and note-taking",
    imageSrc:
      "//www.animehouse.co.nz/cdn/shop/collections/Naruto_960x540.jpg?v=1611117629",
    path: "/category/654cc5ce72d1fa8b7fc130f3",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Naruto",
    path: "/category/654cc5ce72d1fa8b7fc130f3",
    description: "Daily commute essentials",
    imageSrc:
      "//www.animehouse.co.nz/cdn/shop/collections/one_piece_960x540.jpg?v=1611117687",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Food War",
    path: "/category/654cc5ce72d1fa8b7fc130f3",
    description: "Daily commute essentials",
    imageSrc:
      "//www.animehouse.co.nz/cdn/shop/collections/unnamed_31aae112-c360-4063-b4a1-bb2a35775188_960x540.jpg?v=1611117349",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Berserk",
    path: "/category/654cc5ce72d1fa8b7fc130f3",
    description: "Daily commute essentials",
    imageSrc:
      "//www.animehouse.co.nz/cdn/shop/collections/my_hero_960x540.jpg?v=1611117614",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Attack on Titans",
    description: "Daily commute essentials",
    imageSrc:
      "//www.animehouse.co.nz/cdn/shop/collections/sypoeebfdvox_960x540.jpg?v=1611116633",

    path: "/category/654cc5d172d1fa8b7fc13105",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Half City",
    description: "Daily commute essentials",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    path: "/category/654cc5d172d1fa8b7fc13105",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "One Piece",
    description: "Daily commute essentials",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    path: "/category/654cc5d172d1fa8b7fc13105",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Death Note",
    description: "Daily commute essentials",
    path: "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Jujustsu Kaisen",
    description: "Daily commute essentials",
    path: "/category/654cc5d172d1fa8b7fc13105",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
