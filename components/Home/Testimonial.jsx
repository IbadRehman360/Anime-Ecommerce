"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
  const [slidesToShow, setSlidesToShow] = useState(4);

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

  return (
    <div className="pt-10 pb-28 px-2 w-full lg:max-w-[107rem] mx-auto">
      <div className="">
        <h2 className="text-3xl font-bold mb-6">
          CUSTOMERS ARE OUR INFLUENCERS
        </h2>
        <p className="mb-4">@senpaimerch Follow us on Instagram</p>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="mb-28 px-2">
              <div className="bg-[#1c1c1c] pb-6 rounded-lg shadow-lg">
                <img
                  src={`/assets/reviewImg/${index}.jpg`}
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
      </div>
    </div>
  );
};

export default Testimonials;
