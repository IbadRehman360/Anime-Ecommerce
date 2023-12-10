"use client";
import Image from "next/image";

import React, { useState } from "react";
import ProductMoreImage from "./ProductMoreImage";

function ProductImage({ product, selectedColor, selectedSize }) {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  const handleImageClick = (src) => {
    setCurrentImage(src);
  };
  return (
    <div className="">
      <div
        className={`relative ${
          selectedColor && selectedSize ? "" : " grid  lg:grid-cols-12 "
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
        <div className="col-span-10">
          <Image
            src={currentImage}
            className={`border-2 max-h-[80vh] ${
              selectedColor || selectedSize
                ? "lg:h-[630px]"
                : "lg:h-[560px]  w-full"
            }   w-full object-cover`}
            alt="Product Image"
            width={400}
            height={400}
          />

          <div
            className={`absolute    ${
              selectedColor && selectedSize
                ? "left-8 right-0  bottom-3 "
                : " left-0 right-0   lg:left-28   lg:right-0 bottom-4  "
            }     p-2 flex justify-center items-center`}
          >
            {product.images.map((src, index) => (
              <div
                key={index}
                className={`w-2 h-2 xl:h-2.5 xl:w-2.5 z-50  opacity-90 rounded-full mx-1 cursor-pointer ${
                  currentImage === src ? " bg-red-600 " : "bg-gray-300"
                }`}
                onClick={() => handleImageClick(src)}
              ></div>
            ))}
          </div>
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
             absolute mt-2  lg:hidden top-32  right-2  z-10 
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
