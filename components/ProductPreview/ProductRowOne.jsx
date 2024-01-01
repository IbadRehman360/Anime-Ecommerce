"use client";

import { useEffect, useState } from "react";
import BreadCrumbs from "./BreadCrumbs";
import ProductHighLights from "./ProductHighLights";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductInteraction from "./ProductInteraction";

function ProductRowOne({ product, reviews }) {
  const getProductInitialState = (product) => {
    if (product.stock.colorswithsize) {
      const colors = Object.keys(product.stock.colorswithsize);

      for (const color of colors) {
        const sizes = product.stock.colorswithsize[color];
        const availableSizes = Object.keys(sizes).filter(
          (size) => sizes[size].quantity > 0
        );

        if (availableSizes.length > 0) {
          return {
            selectedColor: color,
            selectedSize: availableSizes[0],
          };
        }
      }
    }

    if (product.stock.sizes) {
      const availableSizes = Object.keys(product.stock.sizes).filter(
        (size) => product.stock.sizes[size].quantity > 0
      );

      if (availableSizes.length > 0) {
        return {
          selectedSize: availableSizes[0],
        };
      } else {
        const allSizes = Object.keys(product.stock.sizes);
        return {
          selectedSize: allSizes.length > 0 ? allSizes[0] : null,
        };
      }
    }

    if (product.stock.colors) {
      const availableColors = Object.keys(product.stock.colors).filter(
        (color) => product.stock.colors[color].quantity > 0
      );

      if (availableColors.length > 0) {
        return {
          selectedColor: availableColors[0],
        };
      } else {
        const allColors = Object.keys(product.stock.colors);
        return {
          selectedColor: allColors.length > 0 ? allColors[0] : null,
        };
      }
    }

    return {};
  };

  const initialState = getProductInitialState(product);

  const [selectedColor, setSelectedColor] = useState(
    initialState.selectedColor || null
  );
  const [selectedSize, setSelectedSize] = useState(
    initialState.selectedSize || null
  );
  useEffect(() => {
    if (product.stock.colorswithsize) {
      const sizes = product.stock.colorswithsize[selectedColor];

      if (sizes) {
        const availableSizes = Object.keys(sizes).filter(
          (size) => sizes[size].quantity > 0
        );

        if (availableSizes.length > 0) {
          setSelectedSize(availableSizes[0]);
        } else {
          const defaultSize = Object.keys(sizes)[0];
          setSelectedSize(defaultSize);
        }
      } else {
        const defaultColor = Object.keys(product.stock.colorswithsize)[0];
        const defaultSize =
          product.stock.colorswithsize[defaultColor] &&
          Object.keys(product.stock.colorswithsize[defaultColor])[0];

        setSelectedColor(defaultColor);
        setSelectedSize(defaultSize);
      }
    }
  }, [selectedColor, product.stock.colorswithsize]);

  return (
    <>
      <ProductImage
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />

      <div className="lg:col-span-1 px-3 lg:pl-8 xl:pl-10 2xl:pl-10">
        <div className="flex flex-col  ">
          <div className="mt-3.5 mb-2.5 sm:mt-4 sm:mb-4 lg:mt-5 lg:hidden flex">
            <BreadCrumbs product={product} />
          </div>
          <ProductInfo
            product={product}
            reviews={reviews}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
          />

          <ProductHighLights product={product} />
          <ProductInteraction
            product={product}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </div>
      </div>
    </>
  );
}

export default ProductRowOne;
