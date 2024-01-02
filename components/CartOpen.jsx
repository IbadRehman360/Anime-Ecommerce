"use client";
import { TiShoppingCart } from "react-icons/ti";
import Cart from "./Cart";
import { useState } from "react";
import { selectCartItems } from "@app/Global/Features/cartSlice";
import { useSelector } from "react-redux";

function CartOpen() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-10 z-50 hidden lg:flex right-8 md:bottom-3">
      <div
        className="bg-white lg:p-3 p-2.5 rounded-full border shadow-sm border-gray-300 hover:shadow-lg transition duration-300 cursor-pointer"
        style={{ display: "inline-block" }}
        onClick={toggleCart}
      >
        <TiShoppingCart className="   md:text-4xl text-3xl" />
      </div>
      <div
        className={`absolute bottom-0.5 right-0 bg-yellow-600 opacity-90 w-5 h-5 sm:w-6 sm:h-6 text-sm rounded-full flex items-center justify-center text-white hover:scale-105 transition duration-300 ${
          isOpen ? "scale-105" : ""
        }`}
      >
        {cartItems.length}
      </div>
      {isOpen && <Cart />}
    </div>
  );
}

export default CartOpen;
