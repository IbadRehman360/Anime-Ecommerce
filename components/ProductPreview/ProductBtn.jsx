import Link from "next/link";
export default function ProductBtn({
  product,
  incrementQuantity,
  decrementQuantity,
  handleAddToCart,
  cartItems,
  selectedColor,
  selectedSize,
}) {
  const getProductSizeQuantity = (size) => {
    const cartItem = cartItems.find(
      (item) =>
        item.product._id === product._id &&
        item.size === size &&
        item.color === selectedColor
    );
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="flex items-center pt-12 pb-5 gap-2 justify-between">
          <div className="flex border first-letter: border-gray-300    bg-white ">
            <button
              type="button"
              disabled={product.stock_quantity === 0}
              onClick={() =>
                decrementQuantity(product, selectedSize, selectedColor)
              }
              className="group relative h-11  w-full overflow-hidden   middle none center  text-xl  py-1 px-6 font-sans   uppercase text-black    bg-white  "
            >
              -
            </button>
            <div className="group relative h-11  w-full overflow-hidden   middle none center  py-3 px-6 font-sans  uppercase text-black    bg-white  ">
              {getProductSizeQuantity(selectedSize)}
            </div>
            <button
              type="button"
              disabled={product.stock_quantity === 0}
              onClick={() =>
                incrementQuantity(product, selectedSize, selectedColor)
              }
              className="group relative h-11  w-full overflow-hidden   middle none center  text-xl  py-1 px-6 font-sans   uppercase text-black    bg-white  "
            >
              +
            </button>
          </div>
          <button
            type="button"
            disabled={product.stock_quantity === 0}
            onClick={handleAddToCart}
            className="flex w-full items- font-montserrat lg:py-3.5 lg:text-md lg:tracking-wider text-xs justify-center rounded-md border border-transparent bg-black py-3  opacity-90  uppercase font-medium text-white  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
        <Link
          href={` ${product.stock_quantity === 0 ? "" : "/checkout"}`}
          disabled={product.stock_quantity === 0}
          className="group relative block justify-center text-center   h-11 sm:h-12 border  w-full overflow-hidden   middle none center mr-4     py-3 px-6 font-sans text-xs font-bold uppercase text-whiteshadow-md sm:shadow-blue-500/10 transition-all hover:shadow-lg hover:shadow-blue-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg bg-white  "
        >
          <div className="absolute inset-0 w-10 bg-black opacity-90  transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <button
            disabled={product.stock_quantity === 0}
            className="relative text-black font-montserrat lg:text-sm  group-hover:text-white"
          >
            PURCHASE NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
