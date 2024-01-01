import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Shipping({ products }) {
  const [shippingHover, setShippingHover] = useState(false);
  const [taxHover, setTaxHover] = useState(false);

  const subtotal = products.reduce((total, product) => {
    const price = product.discount_price || product.price;
    const quantity = product.quantity || 1;
    return total + price * quantity;
  }, 0);

  const shippingCost = 149.99;
  const taxRate = 0.08;

  const shipping = shippingCost;
  const tax = subtotal * taxRate;

  const totalAmount = subtotal + shipping + tax;
  return (
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
            className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500 relative"
            onMouseEnter={() => setShippingHover(true)}
            onMouseLeave={() => setShippingHover(false)}
          >
            <span className="sr-only">
              Learn more about how shipping is calculated
            </span>
            <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
            {shippingHover && (
              <div className="absolute bg-gray-50 border z-20 text-gray-700 font-poppins text-xs   bottom-6 w-48 p-2 rounded-lg mt-2">
                Choose between Standard and Express shipping for varying costs.
                Select the best option for your delivery needs on checkout.
              </div>
            )}
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
            className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500 relative"
            onMouseEnter={() => setTaxHover(true)}
            onMouseLeave={() => setTaxHover(false)}
          >
            <span className="sr-only">
              Learn more about how tax is calculated
            </span>
            <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
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
      <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
        <dt className="text-base font-medium text-gray-900">Order total</dt>
        <dd className="text-base  font-medium text-gray-900">
          Rs {products.length > 0 ? ` ${totalAmount.toFixed(2)}` : "0.00"}
        </dd>
      </div>
    </dl>
  );
}

export default Shipping;
