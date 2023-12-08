"use client";

import { useState } from "react";
import BreadCrumbs from "./BreadCrumbs";
import ProductHighLights from "./ProductHighLights";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductInteraction from "./ProductInteraction";

function ProductRowOne({ product, reviews }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const sizeNames = Object.keys(product.sizes || []);
  const [selectedSize, setSelectedSize] = useState(sizeNames[0]);

  return (
    <>
      <ProductImage
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />

      <div className="lg:col-span-1 px-3 lg:pl-16">
        <div className="flex flex-col  ">
          <div className="mt-5 mb-4 lg:hidden flex">
            <BreadCrumbs product={product} />
          </div>
          <ProductInfo product={product} reviews={reviews} />
          <ProductHighLights product={product} />
          <ProductInteraction
            product={product}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
            sizeNames={sizeNames}
            setSelectedSize={setSelectedSize}
            selectedSize={selectedSize}
          />
        </div>
      </div>
    </>
  );
}

export default ProductRowOne;
