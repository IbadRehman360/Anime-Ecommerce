"use client";

import FakeProduct from "@components/data/fakeProduct";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

function RelatedProduct() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      aria-labelledby="related-heading"
      className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
    >
      <h2 className="text-[1.2rem]    sm:text-[1.5rem]    flex  text-gray-800   font-inter   ">
        Customers also bought
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {FakeProduct.slice(0, 4).map((product) => (
          <div key={product.id}>
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full h-72 rounded-lg overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover transition-transform transform hover:scale-105"
                />

                {isHovered && (
                  <div className="absolute bottom-4 right-3 bg-gray-100 p-2 z-50 rounded-full shadow-md cursor-pointer">
                    <TiShoppingCart size={22} />
                  </div>
                )}
              </div>
              <div className="product-details mt-3 md:mt-6 text-center">
                <h2 className="products-title text-sm lg:text-[1.1rem] font-cabin   font-medium text-center">
                  Attack on Titans Bracelet
                </h2>
                <p className="text-sm lg:text-[1rem] font-medium mt-1 lg:mt-2">
                  {product.discountPrice ? (
                    <span>
                      <span className="text-red-500">
                        Rs {product.discountPrice.toFixed(2)}
                      </span>
                      <del className="text-gray-600 ml-3">
                        Rs {product.price.toFixed(2)}
                      </del>
                    </span>
                  ) : (
                    <span>Rs {product.price.toFixed(2)}</span>
                  )}
                </p>
              </div>

              <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedProduct;
