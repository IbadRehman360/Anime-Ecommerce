import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../app/Global/Features/cartSlice";

function CartCheckOut() {
  const products = useSelector(selectCartItems);

  const subtotal = products.reduce((total, product) => {
    const price = product.product.discount_price || product.product.price;
    const quantity = product.quantity || 1; // default to 1 if quantity is not present
    return total + price * quantity;
  }, 0);

  const shippingCost = 149.99;
  const taxRate = 0.08;

  const shipping = shippingCost;
  const tax = subtotal * taxRate;

  const totalAmount = subtotal + shipping + tax;

  const isCartEmpty = products.length === 0;

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">
            Rs {subtotal.toFixed(2)}
          </dd>
        </div>

        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <dt className="flex items-center text-sm text-gray-600">
            <span>Shipping estimate</span>
            <a
              href="#"
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">
                Learn more about how shipping is calculated
              </span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            Rs {products.length > 0 ? ` ${shipping.toFixed(2)}` : "0.00"}
          </dd>
        </div>

        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <dt className="flex text-sm text-gray-600">
            <span>Tax estimate</span>
            <a
              href="#"
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">
                Learn more about how tax is calculated
              </span>
              <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            Rs {tax.toFixed(2)}
          </dd>
        </div>
        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <dt className="text-base font-medium text-gray-900">Order total</dt>
          <dd className="text-base  font-medium text-gray-900">
            Rs {products.length > 0 ? ` ${totalAmount.toFixed(2)}` : "0.00"}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <Link href={isCartEmpty ? "#" : "/checkout"}>
          <button
            className={`w-full bg-slate-800 uppercase font-montserrat border border-transparent rounded-md shadow-sm py-3 px-4 tracking-wide text-xs sm:text-sm text-white ${
              isCartEmpty
                ? "cursor-not-allowed opacity-70"
                : "hover:bg-slate-800"
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
