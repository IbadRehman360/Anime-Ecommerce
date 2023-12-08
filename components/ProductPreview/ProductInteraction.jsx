"use client";
import ProductBtn from "./ProductBtn";
import ProductColor from "./ProductColor";
import ProductSizes from "./ProductSizes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "../../app/Global/Features/cartSlice";
import { useProductUtils } from "@utils/productUtils";

function ProductInteraction({
  product,
  selectedColor,
  setSelectedColor,
  sizeNames,
  setSelectedSize,
  selectedSize,
}) {
  const { incrementQuantity, decrementQuantity } = useProductUtils();

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = () => {
    dispatch(
      addItem({
        product,
        quantity: 1,
        color: selectedColor,
        size: selectedSize,
      })
    );
  };

  return (
    <form
      className={` border-t ${
        setSelectedSize && selectedSize && ""
      }   "pt-6"     ${!selectedColor && !selectedSize ? "" : "pt-6"} `}
    >
      <div className={`${!selectedColor ? "hidden" : "flex"} `}>
        <ProductColor
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <div className={`${!selectedSize ? "hidden" : "grid"} `}>
        <ProductSizes
          product={product}
          setSelectedSize={setSelectedSize}
          selectedSize={selectedSize}
          sizeNames={sizeNames}
        />{" "}
      </div>
      <div>
        <ProductBtn
          product={product}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          handleAddToCart={handleAddToCart}
          cartItems={cartItems}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />
      </div>
    </form>
  );
}

export default ProductInteraction;
