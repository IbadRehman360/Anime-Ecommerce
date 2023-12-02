"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsInstagram } from "react-icons/bs";
const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesToShow(1.2);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1450) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(7);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const handleNext = () => {
    const nextIndex = currentReviewIndex + 1;
    if (nextIndex < reviews.length) {
      sliderRef.current.slickNext();
      setCurrentReviewIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    const previousIndex = currentReviewIndex - 1;
    if (previousIndex >= 0) {
      sliderRef.current.slickPrev();
      setCurrentReviewIndex(previousIndex);
    }
  };
  return (
    <div className="  px-4  sm:px-6 lg:py-16 pt-4 lg:pt-10 pb-20">
      <div className="relative">
        <div className="mx-auto grid justify-center items-center">
          <div className="flex justify-center my-4  text-3xl ">
            <BsInstagram />
          </div>
          <h4
            alt="instagram"
            className="    font-poppins font-semibold text-gray-600   "
          >
            FOLLOW & TAG US ON INSTAGRAM{" "}
          </h4>
        </div>
        <div className="grid gap-1 md:gap-2 xl:grid-cols-6 grid-cols-3 py-5 grid-rows-2 xl:grid-rows-1">
          {reviews.map((person, index) => (
            <div key={person.name} className="flex-none   md:py-6">
              <div className=" ">
                <img
                  src={`/assets/reviewImg/${index + 1}.webp`}
                  alt={`Review by ${person.name}`}
                  className="w-full max-h-28   sm:max-h-56 lg:max-h-56"
                />
              </div>
            </div>
          ))}
        </div>

        <h6
          className=" text-center my-8 font-montserrat text-2xl    italic"
          style={{ fontWeight: "900" }}
        >
          {" "}
          TOP Anime Clothing{" "}
        </h6>
        <div
          className="  justify-center    grid-cols-2 grid-rows-3     grid  xl:grid-cols-6 sm:grid-cols-3 sm:grid-rows-2 xl:grid-rows-1
          items-center gap-4 lg:gap-10 text-xs font-poppins "
        >
          <button className="border-black border  hover:border-gray-700  bg-white text-black p-3 px-8">
            BUTTON UPS
          </button>
          <button className="border-black border bg-white  hover:border-gray-700 text-black p-3 px-8">
            JERSEYS
          </button>
          <button className="border-black border bg-white  hover:border-gray-700 text-black p-3 px-8">
            STREETWEAR
          </button>
          <button className="border-black border bg-white  hover:border-gray-700 text-black p-3 px-8">
            XMAS SWEATERS
          </button>
          <button className="border-black border bg-white  hover:border-gray-700 text-black p-3 px-8 mt-2">
            DREAM CLOAKS
          </button>
          <button className="border-black border bg-white  hover:border-gray-700 text-black p-3 px-8 mt-1">
            OODIES
          </button>
        </div>
      </div>
    </div>
  );
};

var reviews = [
  {
    name: "John Doe",
    comment: "Great products and fast shipping! customer service 1.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    comment: "Awesome quality and fantastic customer service 2.",
    rating: 4,
  },
  {
    name: "John Doe",
    comment: "Great products and fast shipping! customer service 3.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    comment: "Awesome quality and fantastic customer service 4.",
    rating: 4,
  },
  {
    name: "John Doe",
    comment: "Great products and fast shipping! customer service 5.",
    rating: 5,
  },
  {
    name: "John Doe",
    comment: "Great products and fast shipping! customer service 5.",
    rating: 5,
  },
];
export default Testimonials;
