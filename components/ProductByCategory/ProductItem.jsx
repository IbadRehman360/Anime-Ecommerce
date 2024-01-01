"use client";
const { BsSearch } = require("react-icons/bs");
const { TiShoppingCart } = require("react-icons/ti");
import QuickView from "@components/ProductByCategory/QuickView";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ProductItem({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const openQuickView = () => {
    setIsQuickViewOpen(true);
  };

  function renderPrice(details) {
    return details.discount_price > 0 ? (
      <span>
        <span className="text-red-500">
          Rs {details.discount_price.toFixed(2)}
        </span>
        <del className="text-gray-600 opacity-90 ml-3">
          Rs {details.price.toFixed(2)}
        </del>
      </span>
    ) : (
      <span className="text-[0.94rem] lg:text-[1.2rem] opacity-90 font-lato tracking-wide mt-0.5 lg:mt-1">
        Rs {details.price.toFixed(2)}
      </span>
    );
  }
  return (
    <div className="group relative border bg-white rounded-lg flex flex-col overflow-hidden">
      <div
        className={`aspect-w-3 aspect-h-4 bg-gray-200   sm:aspect-none 
            relative w-full sm:h-80  rounded-lg overflow-hidden ${
              isHovered ? "shadow-sm" : ""
            } `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/product/${product._id}`}>
          <Image
            width={400}
            height={400}
            alt=""
            src={product.images[0]}
            className="w-full h-full border  object-center object-cover sm:w-full sm:h-full"
          />
        </Link>
        {isHovered && (
          <div
            onClick={openQuickView}
            className="absolute bottom-2 right-3 z-50 bg-white p-2 rounded-full shadow-md cursor-pointer"
          >
            <TiShoppingCart size={22} />
          </div>
        )}
        {isHovered && (
          <div
            onClick={openQuickView}
            className="absolute bottom-2 right-16 bg-white p-2 rounded-full shadow-md cursor-pointer"
          >
            <BsSearch size={20} />
          </div>
        )}
      </div>
      <div className="p-4 space-y-2 flex flex-col ">
        <h2 className="products-title text-sm lg:text-[1.1rem] px-4   line-clamp-1   font-poppins  font-medium text-center">
          <Link href={`/product/${product._id}`} className="  ">
            {product.title}
          </Link>
        </h2>
        <p className="text-xs italic text-gray-500 text-center font-poppins">
          {product.colors && product.colors.length > 0 && (
            <>Colors: {product.colors.length} | </>
          )}
          {product.sizes &&
            Object.values(product.sizes).filter((size) => size).length > 0 && (
              <>
                Sizes:{" "}
                {Object.values(product.sizes).filter((size) => size).length}
              </>
            )}
        </p>
        <div className="flex justify-center text-center mt-auto">
          <p className="text-sm lg:text-[1.05rem] font-roboto px-4 tracking-wide mt-1">
            {product.stock.colorswithsize ? (
              <>
                {Object.entries(product.stock.colorswithsize).map(
                  ([color, sizes], index) => {
                    if (index === 0) {
                      const firstSizeKey = Object.keys(sizes)[0];
                      const firstSizeDetails = sizes[firstSizeKey];
                      return (
                        <span key={`${color}-${firstSizeKey}`}>
                          {renderPrice(firstSizeDetails)}
                          <div className="w-10 h-5"> </div>
                        </span>
                      );
                    }
                    return null;
                  }
                )}
              </>
            ) : product.stock.sizes ? (
              <>
                {Object.entries(product.stock.sizes).map(
                  ([size, details], index) =>
                    index === 0 && (
                      <span key={size}>
                        {renderPrice(details)}
                        <div className="w-10 h-5"> </div>
                      </span>
                    )
                )}
              </>
            ) : product.stock.colors ? (
              <>
                {Object.entries(product.stock.colors).map(
                  ([color, details], index) =>
                    index === 0 && (
                      <span key={color}>
                        {renderPrice(details)}
                        <div className="w-10 h-5"> </div>
                      </span>
                    )
                )}
              </>
            ) : (
              <>
                {product.stock && (
                  <span>
                    {renderPrice(product.stock)}
                    <div className="w-10 h-5"> </div>
                  </span>
                )}
              </>
            )}
          </p>
        </div>
      </div>
      <QuickView
        product={product}
        isOpen={isQuickViewOpen}
        onClose={setIsQuickViewOpen}
      />
    </div>
  );
}
