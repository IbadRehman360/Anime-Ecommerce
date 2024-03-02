import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../app/Global/Features/cartSlice";
import Shipping from "./Shipping";

function CartCheckOut() {
  const products = useSelector(selectCartItems);
  const isCartEmpty = products.length === 0;

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <Shipping products={products} />
      <div className="mt-6">
        <Link href={isCartEmpty ? "#" : "/checkout"}>
          <button
            className={`w-full bg-black opacity-90 uppercase font-montserrat border border-transparent rounded-md shadow-sm py-3 px-4 tracking-wide text-xs sm:text-sm text-white ${
              isCartEmpty
                ? "cursor-not-allowed opacity-90"
                : "hover:bg-black hover:opacity-80"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500`}
            disabled={isCartEmpty}
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CartCheckOut;
