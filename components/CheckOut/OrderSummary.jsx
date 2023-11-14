import { selectCartItems } from "@app/Global/Features/cartSlice";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useProductUtils } from "@utils/productUtils";
import { useSelector } from "react-redux";
function OrderSummary() {
  const cartItems = useSelector(selectCartItems);
  const { handleRemoveItem, handleupdateQuantity } = useProductUtils();

  return (
    <div className="mt-10 lg:mt-0">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h3 className="sr-only">Items in your cart</h3>
        <ul role="list" className="divide-y divide-gray-200">
          {cartItems.map((product) => (
            <li key={product.product._id} className="flex py-6 px-4 sm:px-6">
              <div className="flex-shrink-0">
                <img src={product.product.images} className="w-20 rounded-md" />
              </div>

              <div className="ml-6 flex-1 flex flex-col">
                <div className="flex">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm">
                      <a className="font-medium text-gray-700 hover:text-gray-800">
                        {product.product.title}
                      </a>
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.product.color}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.product.size}
                    </p>
                  </div>

                  <div className="ml-4 flex-shrink-0 flow-root">
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(product.product._id)}
                      className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Remove</span>
                      <TrashIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 pt-2 flex items-end justify-between">
                  {/* <p className="text-sm lg:text-[0.95rem]    font-roboto   tracking-wide mt-1 lg:mt-2">
                    {product.product.discount_price ? (
                      <span>
                        <span className="text-red-500">
                          Rs {product.product.discount_price.toFixed(2)}
                        </span>
                        <del className="text-gray-600 ml-3">
                          Rs {product.product.price.toFixed(2)}
                        </del>
                      </span>
                    ) : (
                      <span>Rs {product.product.price.toFixed(2)}</span>
                    )}
                  </p> */}

                  <div className="relative inline-block">
                    <select
                      defaultValue={product.quantity}
                      onChange={(e) => {
                        handleupdateQuantity(
                          product,
                          parseInt(e.target.value, 10)
                        );
                      }}
                      className="block appearance-none w-full  bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
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
            <dt className="text-sm">Subtotal</dt>
            <dd className="text-sm font-medium text-gray-900">Rs 64.00</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Shipping</dt>
            <dd className="text-sm font-medium text-gray-900">Rs 5.00</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Taxes</dt>
            <dd className="text-sm font-medium text-gray-900">Rs 5.52</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-base font-medium">Total</dt>
            <dd className="text-base font-medium text-gray-900">Rs 75.52</dd>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <button
            type="submit"
            className="w-full bg-slate-800   font-montserrat uppercase text-sm tracking-wider border border-transparent rounded-md shadow-sm py-3 px-4    text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
          >
            Continue to shipping
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
