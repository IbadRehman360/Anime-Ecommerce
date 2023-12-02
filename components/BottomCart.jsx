"use client";
import Link from "next/link";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function BottomCart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Link href={`#`} className="flex flex-col items-center">
        <FontAwesomeIcon
          icon={faShoppingCart}
          onClick={toggleCart}
          style={{ color: "gray" }}
        />
        <span className="text-xs mt-1">Cart</span>
      </Link>
      {isOpen && <Cart />}
    </>
  );
}

export default BottomCart;
