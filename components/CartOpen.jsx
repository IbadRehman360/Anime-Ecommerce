"use client";
import { TiShoppingCart } from "react-icons/ti";
import Cart from "./Cart";
import { useState } from "react";
import {
  removeItemsWithZeroQuantity,
  selectCartItems,
  updateCartItems,
} from "@app/Global/Features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function CartOpen() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  const delay = 5000;
  const checkAvailability = async () => {
    try {
      const response = await fetch("api/availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems }),
      });

      if (!response.ok) {
        console.error("Error:", response.statusText);
        return;
      }

      const data = await response.json();

      cartItems.forEach((cartItem) => {
        const product = data.find((p) => p._id === cartItem.product._id);

        if (product.stock_quantity <= 0) {
          dispatch(removeItemsWithZeroQuantity({ productId: product._id }));
        } else if (product.stock_quantity < cartItem.quantity) {
          dispatch(
            updateCartItems({
              productId: cartItem.product._id,
              quantity: product.stock_quantity,
            })
          );
          console.log("Cart updated successfully:", data);
        }
      });
    } catch (error) {
      console.error("API error:", error.message);
    }
  };

  setInterval(checkAvailability, delay);

  return (
    <div className="fixed bottom-10  hidden lg:flex right-8 md:bottom-3">
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
