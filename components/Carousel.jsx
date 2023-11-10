"use client";

import React, { useEffect, useState } from "react";
import SlideButton from "./Home/SliderButton";
import DisplayProducts from "./Home/DisplayProducts";

function Carousel({ products, Feature1, Feature2 }) {
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
  }, [sliceEnd, products]);

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
    <>
      <div className="carousel  mt-2 w-full justify-items-stretch sm:mt-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
        <div
          id={Feature1}
          className="carousel-item      mx-auto my-2 md:my-4 w-full gap-1 sm:w-full md:gap-3"
        >
          {displayedProducts1.map((product) => (
            <DisplayProducts key={product.id} products={product} />
          ))}
        </div>
        <div
          id={Feature2}
          className="carousel-item mx-auto my-2 md:my-4 w-full gap-1 sm:w-full md:gap-3"
        >
          {displayedProducts2.map((product) => (
            <DisplayProducts key={product.id} products={product} />
          ))}
        </div>
      </div>

      <SlideButton
        currentSlide={currentSlide}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        featuredProductsSlide1={Feature1}
        featuredProductsSlide2={Feature2}
      />
    </>
  );
}

export default Carousel;
