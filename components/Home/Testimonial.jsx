"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
        setSlidesToShow(4);
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
    <div className="mx-3 sm:px-4 lg:px-6 lg:py-24 pt-4 lg:pt-10 pb-20">
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((person, index) => (
            <ul
              key={person.name}
              className="flex-none rounded-md   py-5 md:py-6"
            >
              <li className="py-5 md:py-7 px-4 bg-gray-100 rounded-lg xl:px-5 mr-4 xl:text-left">
                <div className="space-y-4">
                  <img
                    src={`/assets/reviewImg/${index + 1}.webp`}
                    alt={`Review by ${person.name}`}
                    className="w-full h-80 object-cover rounded-md rounded-t-lg"
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <div className="text-white rounded-b-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            {Array.from(Array(person.rating).keys()).map(
                              (star, index) => (
                                <span
                                  key={index}
                                  className="text-yellow-400 text-2xl md:text-3xl mr-2"
                                >
                                  ★
                                </span>
                              )
                            )}
                          </div>
                        </div>
                        <p className="text-[0.9rem] lg:text-[1rem] font-poppins opacity-90 text-black">
                          {person.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </Slider>
        <button
          onClick={handlePrevious}
          className={`absolute top-1/2 transform -translate-y-1/2 left-8 text-xl    bg-white text-red-600 rounded-full p-2 hover:bg-gray-900 focus:outline-none ${
            currentReviewIndex === 0 ? "hidden" : ""
          }`}
        >
          <IoIosArrowBack />
        </button>
        {console.log(currentReviewIndex === reviews.length - slidesToShow)}
        <button
          onClick={handleNext}
          className={`absolute ${
            slidesToShow === 1.2 ? "hidden" : ""
          } top-1/2 transform -translate-y-1/2 right-10 text-xl    bg-white text-red-600 rounded-full p-2 hover:bg-gray-900 focus:outline-none ${
            currentReviewIndex === reviews.length - slidesToShow
              ? " hidden"
              : ""
          }`}
        >
          <IoIosArrowForward />
        </button>
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
    name: "Jane Smith",
    comment: "Awesome quality and fantastic customer service 6.",
    rating: 4,
  },
];
export default Testimonials;
