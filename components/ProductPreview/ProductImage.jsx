"use client";

import React, { useState } from "react";
import ProductMoreImage from "./ProductMoreImage";

function ProductImage({ product }) {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  const handleImageClick = (src) => {
    setCurrentImage(src);
  };

  return (
    <div className="relative w-full h-full">
      <img
        src={currentImage}
        className="border-2 border-black    max-h-[60vh] lg:h-[650px] w-full   object-fill "
        alt="Product Image"
      />
      <div className="absolute left-0 right-0   lg:bottom-32 bottom-4 p-2 flex justify-center items-center">
        {product.images.map((src, index) => (
          <div
            key={index}
            className={`w-2 h-2 xl:h-2.5 xl:w-2.5 bg-white rounded-full mx-1 cursor-pointer ${
              currentImage === src && "bg-red-600"
            }`}
            onClick={() => handleImageClick(src)}
          ></div>
        ))}
      </div>
      <div className="block">
        <div className="lg:hidden flex absolute bottom-2 left-4 z-10">
          <ProductMoreImage
            product={product}
            handleImageClick={handleImageClick}
          />
        </div>
        <div className="lg:flex hidden">
          <ProductMoreImage
            product={product}
            handleImageClick={handleImageClick}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImage;