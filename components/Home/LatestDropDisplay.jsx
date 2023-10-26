"use client";

import { useState } from "react";

export default function LatestDropDisplay() {
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

  const visibleProducts = products.slice(
    currentSlide * 4,
    (currentSlide + 1) * 4
  );
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:max-w-[110rem]">
        <div className="mt-6 grid grid-cols-6 gap-x-8">
          {visibleProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
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
              href="#trendingGiftCardsSlide1"
              onClick={handlePrevPage}
              className={`mr-1 block h-[4px] w-[28px] rounded-2xl ${
                currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
              } `}
              id="prevPage"
            />
            <a
              href="#trendingGiftCardsSlide2"
              onClick={handleNextPage}
              className={`mr-1 block h-[4px] w-[28px] rounded-2xl ${
                currentSlide === 1 ? "bg-[#f03827]" : "bg-[#888888]"
              } `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
