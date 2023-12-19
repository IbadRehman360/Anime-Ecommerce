import { selectCartItems } from "@app/Global/Features/cartSlice";
import { QuestionMarkCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useProductUtils } from "@utils/productUtils";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useState } from "react";
function OrderSummary({
  isSubmitting,
  subtotal,
  shipping,
  totalAmount,
  isCartEmpty,
  cartItems,
  tax,
}) {
  const { handleRemoveItem, handleUpdateQuantity } = useProductUtils();
  const [shippingHover, setShippingHover] = useState(false);
  const [taxHover, setTaxHover] = useState(false);
  return (
    <div className="mt-10 lg:mt-0">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h3 className="sr-only">Items in your cart</h3>
        <ul role="list" className="divide-y divide-gray-200">
          {cartItems.map((product, index) => (
            <li key={index} className="flex py-6 px-4 sm:px-6">
              <div className="flex-shrink-0">
                <Image
                  width={90}
                  alt=""
                  height={90}
                  src={`${product.product.images}`}
                  className=" rounded-md"
                />
              </div>

              <div className=" ml-4   sm:ml-6 flex-1 flex flex-col">
                <div className="flex">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-md">
                      <a className="font-medium text-gray-700 hover:text-gray-800 line-clamp-1">
                        {product.quantity}x - {product.product.title}
                      </a>
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(product.product._id)}
                    className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Remove</span>
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="flex items-center mt-4 justify-between">
                  <div className="flex flex-col">
                    <p className="text-[0.7rem] uppercase tracking-wider  font-lato text-gray-500">
                      Color: {product.color}
                    </p>
                    <p className="text-[0.7rem] uppercase tracking-wider  mt-1 font-lato text-gray-500">
                      Size: {product.size}
                    </p>
                  </div>
                  <div className="relative inline-block">
                    <select
                      defaultValue={product.quantity}
                      onChange={(e) => {
                        handleUpdateQuantity(
                          product,
                          parseInt(e.target.value, 10),
                          product.size,
                          product.color
                        );
                      }}
                      className="block appearance-none w-full text-sm  bg-white border border-gray-300 text-gray-700 py-1 pl-3 sm:pl-4 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
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
                className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500 relative"
                onMouseEnter={() => setShippingHover(true)}
                onMouseLeave={() => setShippingHover(false)}
              >
                <span className="sr-only">
                  Learn more about how shipping is calculated
                </span>
                <QuestionMarkCircleIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
                {shippingHover && (
                  <div className="absolute bg-gray-50 border z-20 text-gray-700 font-poppins text-xs   bottom-6 w-48 p-2 rounded-lg mt-2">
                    Choose between Standard and Express shipping for varying
                    costs. Select the best option for your delivery needs on
                    checkout.
                  </div>
                )}
              </a>
            </dt>
            <dd className="text-sm font-medium text-gray-800">
              Rs {!isCartEmpty > 0 ? ` ${shipping.toFixed(2)}` : "0.00"}
            </dd>
          </div>
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <dt className="flex text-sm text-gray-600">
              <span>Tax estimate</span>
              <a
                href="#"
                className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500 relative"
                onMouseEnter={() => setTaxHover(true)}
                onMouseLeave={() => setTaxHover(false)}
              >
                <span className="sr-only">
                  Learn more about how tax is calculated
                </span>
                <QuestionMarkCircleIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
                {taxHover && (
                  <div className="absolute bg-gray-50 border z-20 text-gray-700 font-poppins text-xs   bottom-6 w-48 p-2 rounded-lg mt-2">
                    Tax is estimated based on the total amount of your selected
                    products.
                  </div>
                )}
              </a>
            </dt>
            <dd className="text-sm font-medium text-gray-900">
              Rs {tax.toFixed(2)}
            </dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-base font-medium text-gray-900">
              {" "}
              Total Amount
            </dt>
            <dd className="text-base font-medium text-gray-900">
              Rs {!isCartEmpty > 0 ? ` ${totalAmount.toFixed(2)}` : "0.00"}
            </dd>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <button
            type="submit"
            className="w-full bg-black opacity-90 hover:opacity-80   font-montserrat uppercase text-xs md:text-sm tracking-wider border border-transparent rounded-md shadow-sm py-3 px-4    text-white   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Placing Order..." : "Continue to shipping"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
