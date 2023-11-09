"use client";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";

const ProductCard = ({ products }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="product-card w-full relative overflow-hidden">
      <div>
        <div
          className={`relative w-full sm:h-72 lg:80 rounded-lg overflow-hidden ${
            isHovered ? "shadow-lg" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={products.image_url}
            alt={products.imageAlt}
            className="w-full h-full object-center object-cover object-contain transition-transform transform hover:scale-105"
          />
          <div className="absolute top-0   inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
          </div>
          {isHovered && (
            <div className="absolute bottom-4 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer">
              <TiShoppingCart size={22} />
            </div>
          )}
        </div>
        <div className="product-details mt-3 md:mt-6 text-center">
          <h2 className="products-title text-sm lg:text-[1.15rem] line-clamp-1   font-cabin   font-medium text-center">
            Attack on Titans Bracelet
          </h2>
          <p className="text-sm lg:text-[1.1rem] font-medium mt-1 lg:mt-2">
            {products.discount_price ? (
              <span>
                <span className="text-red-500">
                  Rs {products.discount_price.toFixed(2)}
                </span>
                <del className="text-gray-600 ml-3">
                  Rs {products.price.toFixed(2)}
                </del>
              </span>
            ) : (
              <span>Rs {products.price.toFixed(2)}</span>
            )}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
