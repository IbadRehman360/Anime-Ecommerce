"use client";
import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const sliderRef = useRef(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
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
    <div className=" bg-[#fdfdfd] ">
      <div className="lg:pt-16    mt-2 px-2 w-full lg:max-w-[107rem] mx-auto">
        <div className=" text-center">
          <div className=" text-center">
            <h2 className="text-2xl lg:text-3xl font-bold   mb-4">
              CUSTOMERS ARE OUR INFLUENCERS
            </h2>

            <p className="mb-8 text-center   text-gray-700 ">
              <span className="text-lg font-semibold mb-2 mr-2 ">
                @Senpaimerch
              </span>
              Follow us on Instagram
            </p>
          </div>
          <div className="relative">
            <Slider ref={sliderRef} {...settings}>
              {reviews.map((review, index) => (
                <div key={index} className="mb-28 px-2">
                  <div className="bg-black pb-6 rounded-lg shadow-lg">
                    <img
                      src={`/assets/reviewImg/${index + 1}.webp`}
                      alt={`Review by ${review.name}`}
                      className="w-full h-96"
                    />
                    <div className="text-white rounded-b-lg">
                      <div className="flex px-4 pt-3 items-center justify-between mb-2">
                        <div>
                          {Array.from(Array(review.rating).keys()).map(
                            (star, index) => (
                              <span
                                key={index}
                                className="text-yellow-400 text-3xl mr-2"
                              >
                                ★
                              </span>
                            )
                          )}
                        </div>
                      </div>
                      <p className="lg:text-xl ml-4 opacity-90  text-white">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <button
              onClick={handlePrevious}
              className={`absolute top-1/3  ${
                currentReviewIndex === 0 ? "hidden" : ""
              }  transform -translate-y-1/3 left-4 text-2xl lg:text-3xl text-white bg-black rounded-full p-2 hover:bg-gray-900 focus:outline-none`}
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className={`absolute top-1/3 transform -translate-y-1/3 right-4 text-2xl lg:text-3xl text-white bg-black ${
                slidesToShow + currentReviewIndex - 1 === reviews.length - 1
                  ? "hidden"
                  : ""
              } rounded-full p-2 hover:bg-gray-900 focus:outline-none`}
            >
              <IoIosArrowForward />
            </button>
          </div>
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
    name: "Jane Smith",
    comment: "Awesome quality and fantastic customer service 6.",
    rating: 4,
  },
];
export default Testimonials;
