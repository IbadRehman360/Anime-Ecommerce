"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const reviews = [
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

const Testimonials = () => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4, // Set slidesToScroll to the number of slides to show
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    const nextIndex = currentIndex + settings.slidesToScroll;
    if (nextIndex < reviews.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - settings.slidesToScroll);
    }
  };

  return (
    <div className="pt-10 pb-28 px-4 w-full lg:max-w-[107rem] mx-auto">
      <div className="">
        <h2 className="text-3xl font-bold mb-6">
          CUSTOMERS ARE OUR INFLUENCERS
        </h2>
        <p className="mb-4">@senpaimerch Follow us on Instagram</p>

        <div className="relative">
          <Slider {...settings} ref={(slider) => (slider = slider)}>
            {reviews.map((review, index) => (
              <div key={index} className="mb-28 px-2">
                <div className="bg-[#1c1c1c] pb-6 rounded-lg shadow-lg">
                  <img
                    src="/assets/Categories/1.jpg"
                    alt={`Review by ${review.name}`}
                    className="object-cover h-72 w-full lg:h-80 lg:w-full object-center"
                  />
                  <div className="text-white rounded-b-lg">
                    <div className="flex px-4 pt-3 items-center justify-between mb-2">
                      <div>
                        {Array.from(Array(review.rating).keys()).map(
                          (star, index) => (
                            <span
                              key={index}
                              className="text-yellow-400 text-2xl mr-2"
                            >
                              ★
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <p className="text-sm ml-4 text-white">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            {currentIndex > 0 && (
              <button
                onClick={prev}
                className="bg-blue-500 text-white px-4 py-2 mr-2"
              >
                Prev
              </button>
            )}
            {currentIndex < reviews.length - settings.slidesToShow && (
              <button
                onClick={next}
                className="bg-blue-500 text-white px-4 py-2"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
