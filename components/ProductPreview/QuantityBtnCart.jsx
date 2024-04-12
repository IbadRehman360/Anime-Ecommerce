import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItem } from "../../app/Global/Features/cartSlice";
import { useState } from "react";

export default function ProductBtn({
  product,
  selectedColor,
  selectedSize,
  currentItemQtyAvaialable,
  price,
  discount_price,
}) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const maxPurchaseLimit = 3;

  const handleAddToCart = () => {
    dispatch(
      addItem({
        product,
        quantity,
        color: selectedColor,
        size: selectedSize,
        price: price,
        discount_price: discount_price,
        maxPurchaseLimit: maxPurchaseLimit,
        currentItemQtyAvailable: currentItemQtyAvaialable,
      })
    );
  };
  const incrementQuantity = () => {
    if (quantity < currentItemQtyAvaialable && quantity < maxPurchaseLimit) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="flex items-center pt-12 pb-5 gap-2 justify-between">
          <div className="flex border border-gray-300 bg-white">
            <button
              type="button"
              disabled={quantity <= 1}
              onClick={decrementQuantity}
              className="text-xl py-1 px-6 font-sans uppercase text-black bg-white"
            >
              -
            </button>
            <div className="py-3 px-6 font-sans uppercase text-black bg-white">
              {currentItemQtyAvaialable > 0 ? quantity : 0}
            </div>
            <button
              type="button"
              disabled={quantity >= currentItemQtyAvaialable}
              onClick={incrementQuantity}
              className="text-xl py-1 px-6 font-sans uppercase text-black bg-white"
            >
              +
            </button>
          </div>
          <button
            type="button"
            disabled={currentItemQtyAvaialable <= 0}
            onClick={handleAddToCart}
            className="flex w-full items- font-montserrat lg:py-3.5 lg:text-md lg:tracking-wider text-xs justify-center rounded-md border border-transparent bg-black py-3  opacity-90  uppercase font-medium text-white  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
        {currentItemQtyAvaialable > 0 ? (
          <Link
            onClick={handleAddToCart}
            href={`/checkout`}
            className="group relative block justify-center text-center   h-11 sm:h-12 border  w-full overflow-hidden   middle none center mr-4     py-3 px-6 font-sans text-xs font-bold uppercase text-whiteshadow-md sm:shadow-blue-500/10 transition-all hover:shadow-lg hover:shadow-blue-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg bg-white  "
          >
            <div className="absolute inset-0 w-10 bg-black opacity-90  transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <button className="relative text-black  text-opacity-90 font-montserrat lg:text-sm  group-hover:text-white">
              PURCHASE NOW
            </button>{" "}
          </Link>
        ) : (
          <div className="group relative block justify-center text-center text-black  text-opacity-90 h-11 sm:h-12 border w-full overflow-hidden middle none center mr-4 py-3 px-6 font-montserrat lg:text-sm  text-xs  font-bold uppercase text-whiteshadow-md sm:shadow-blue-500/10 transition-all rounded-lg bg-white opacity-70 pb-3 cursor-not-allowed">
            PURCHASE NOW
          </div>
        )}
      </div>
    </div>
  );
}
