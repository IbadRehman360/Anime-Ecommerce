"use client";
import ProductBtn from "./ProductBtn";
import ProductColor from "./ProductColor";
import ProductSizes from "./ProductSizes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "../../app/Global/Features/cartSlice";
import { useProductUtils } from "@utils/productUtils";

function ProductInteraction({ product }) {
  const { incrementQuantity, decrementQuantity } = useProductUtils();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const sizeNames = Object.keys(product.sizes);
  const [selectedSize, setSelectedSize] = useState(sizeNames[0]);
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
    <form className="pt-6 border-t">
      <ProductColor
        product={product}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <ProductSizes
        product={product}
        setSelectedSize={setSelectedSize}
        selectedSize={selectedSize}
        sizeNames={sizeNames}
      />
      <ProductBtn
        product={product}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        handleAddToCart={handleAddToCart}
        cartItems={cartItems}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />
    </form>
  );
}

export default ProductInteraction;
