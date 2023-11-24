"use client";
const { BsSearch } = require("react-icons/bs");
const { TiShoppingCart } = require("react-icons/ti");
import QuickView from "@components/QuickView";
import Link from "next/link";
import { useState } from "react";
export default function ProductItem({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const openQuickView = () => {
    setIsQuickViewOpen(true);
  };

  return (
    <div className="group relative bg-white rounded-lg flex flex-col overflow-hidden">
      <div
        className={`aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none 
            relative w-full sm:h-80  rounded-lg overflow-hidden ${
              isHovered ? "shadow-lg" : ""
            } `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/product/${product._id}`}>
          <img
            src={product.images}
            className="w-full h-full object-center object-cover sm:w-full sm:h-full"
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
        <h3 className="text-base font-semibold text-center text-gray-900 ">
          <Link href={`/product/${product._id}`} className="  ">
            {product.title}
          </Link>
        </h3>
        <p className="text-xs italic text-gray-500 text-center">
          Colors : {product.colors.length} | Sizes :{" "}
          {Object.values(product.sizes).filter((size) => size).length}
        </p>

        <div className=" flex justify-center  text-center mt-auto">
          <p
            className="font-satoshi tracking-wide text-red-500"
            style={{ fontWeight: 500 }}
          >
            {product.discount_price
              ? `Rs ${product.discount_price.toFixed(2)}`
              : `Rs ${product.price.toFixed(2)}`}
          </p>
          {product.discount_price && (
            <p className="text-sm mt-[1.5px] ml-2.5 tracking-wide text-gray-500 line-through">
              Rs {product.price.toFixed(2)}
            </p>
          )}
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
