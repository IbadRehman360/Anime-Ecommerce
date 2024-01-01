"use client";
import ProductBtn from "./ProductBtn";
import ProductColor from "./ProductColor";
import ProductSizes from "./ProductSizes";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "../../app/Global/Features/cartSlice";
import { useProductUtils } from "@utils/productUtils";
import { clearCart } from "@app/Global/Features/cartSlice";
import { useEffect } from "react";

function ProductInteraction({
  product,
  selectedColor,
  setSelectedColor,
  setSelectedSize,
  selectedSize,
}) {
  const { incrementQuantity, decrementQuantity } = useProductUtils();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const getPriceInfo = () => {
    let priceInfo = {};

    if (product.stock.colorswithsize) {
      const colorInfo = product.stock.colorswithsize[selectedColor] || {};
      priceInfo = colorInfo[selectedSize] || {};
    } else if (product.stock.sizes) {
      priceInfo = product.stock.sizes[selectedSize] || {};
    } else if (product.stock.colors) {
      priceInfo = product.stock.colors[selectedColor] || {};
    } else {
      priceInfo = product.stock;
    }

    return priceInfo;
  };

  const { price, discount_price, quantity } = getPriceInfo();

  // useEffect(() => {
  //   dispatch(clearCart());
  // }, []);
  const handleAddToCart = () => {
    dispatch(
      addItem({
        product,
        quantity: 1,
        color: selectedColor,
        size: selectedSize,
        price: price,
        discount_price: discount_price,
      })
    );
  };
  return (
    <form
      className={` border-t ${
        setSelectedSize && selectedSize && "pt-6"
      }   "pt-6"     ${!selectedColor && !selectedSize ? "" : "pt-6"} `}
    >
      <div className={`${!selectedColor ? "hidden" : "flex"} `}>
        <ProductColor
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
        />
      </div>
      <div className={`${!selectedSize ? "hidden" : "grid"} `}>
        <ProductSizes
          product={product}
          selectedColor={selectedColor}
          setSelectedSize={setSelectedSize}
          selectedSize={selectedSize}
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
          quantityNum={quantity}
          price={price}
          discount_price={discount_price}
        />
      </div>
    </form>
  );
}

export default ProductInteraction;
