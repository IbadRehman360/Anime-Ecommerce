import { useProductUtils } from "@utils/productUtils";
import React from "react";

function Quantity({ quantity, border, product }) {
  const { incrementQuantity, decrementQuantity } = useProductUtils();
  return (
    <div className={`flex items-center`}>
      <button
        type="button"
        onClick={() =>
          decrementQuantity(product.product, product.size, product.color)
        }
        className={`${
          border === "true" ? "border px-2.5 p-0.5" : "px-2 p-1"
        } text-gray-600  focus:outline-none`}
      >
        -
      </button>
      <p
        className={`text-gray-500 font-semibold px-5 p-1 ${
          border === "true" ? "border text-sm" : " text-md"
        }`}
      >
        {quantity}
      </p>
      <button
        type="button"
        onClick={() =>
          incrementQuantity(product.product, product.size, product.color)
        }
        className={`${
          border === "true" ? "border px-2.5 p-0.5" : "px-2 p-1"
        } text-gray-600  focus:outline-none`}
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
