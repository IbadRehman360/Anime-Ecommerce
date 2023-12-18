"use client";

import React, { useState } from "react";
import ProductMoreImage from "./ProductMoreImage";
import DisplayImage from "./DisplayImage";

function ProductImage({ product, selectedColor, selectedSize }) {
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const handleImageClick = (src) => {
    setCurrentImage(src);
  };
  return (
    <div className="">
      <div
        className={`relative ${
          selectedColor && selectedSize ? "" : " lg:grid  lg:grid-cols-12 "
        }     gap-4`}
      >
        {!selectedSize || !selectedColor ? (
          <div className="lg:flex hidden col-span-2">
            <ProductMoreImage
              product={product}
              handleImageClick={handleImageClick}
            />
          </div>
        ) : (
          <></>
        )}
        <div className="lg:col-span-10">
          <DisplayImage
            selectedColor={selectedColor}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            selectedSize={selectedSize}
            product={product}
            handleImageClick={handleImageClick}
          />
        </div>
      </div>

      <div className="block">
        <div
          className={`       ${
            !selectedSize || !selectedColor
              ? "absolute mt-3   hidden  z-10 "
              : "   lg:flex absolute mt-3 hidden     z-10"
          }   `}
        >
          <ProductMoreImage
            product={product}
            handleImageClick={handleImageClick}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
          />
        </div>
        <div
          className={`     
             absolute  lg:hidden top-28 mt-2  right-2  z-10 
          `}
        >
          <ProductMoreImage
            product={product}
            handleImageClick={handleImageClick}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImage;
