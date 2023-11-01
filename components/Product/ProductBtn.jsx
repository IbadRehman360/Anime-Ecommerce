import { useState } from "react";

function ProductBtn() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex flex-wrap">
      <div className="w-full    ">
        <div className="flex items-center pt-12 pb-5  gap-2 justify-between">
          <div className="flex   border   border-gray-400 rounded-md bg-[#f9f9f9]  ">
            <button
              onClick={decreaseQuantity}
              className="w-10 h-10 flex items-center justify-center text-2xl   text-black"
            >
              -
            </button>
            <div className="w-10 h-10 flex  font-semibold items-center justify-center  ] ">
              {quantity}
            </div>
            <button
              onClick={increaseQuantity}
              className="w-10 h-10 flex items-center justify-center text-xl   text-black"
            >
              +
            </button>
          </div>
          <button
            type="submit"
            className=" flex w-full items- font-montserrat   text-xs justify-center rounded-md border border-transparent bg-gray-900 py-2.5 uppercase  font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>

        <button
          type="submit"
          className="  flex w-full items-center justify-center font-montserrat   rounded-md border border-transparent bg-gray-900      uppercase  py-3 text-xs font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to bag
        </button>
      </div>
    </div>
  );
}

export default ProductBtn;
