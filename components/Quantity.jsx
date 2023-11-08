import { useState } from "react";

function Quantity({ border }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className={`flex items-center  `}>
      <button
        onClick={decrementQuantity}
        className={` ${
          border === "true" ? "border" : ""
        } px-2 p-1   text-gray-600  focus:outline-none`}
      >
        -
      </button>
      <p
        className={`text-gray-500    font-semibold px-5 p-1 text-md  ${
          border === "true" ? "border" : ""
        } `}
      >
        {quantity}
      </p>
      <button
        onClick={incrementQuantity}
        className={` ${
          border === "true" ? "border" : ""
        } px-2 p-1   text-gray-600  focus:outline-none`}
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
