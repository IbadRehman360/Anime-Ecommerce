import { classNames } from "@app/product/[id]/page";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const paymentMethods = [
  { id: "delivery", title: "Cash on Delivery" },
  // { id: "instagram", title: "Instagram Checkout with Online Payment" },
];

function DeliveryMethod({ control, selectedDeliveryMethod, deliveryMethods }) {
  return (
    <div>
      <div className="mt-10 border-t py-2 border-gray-200 pt-10">
        <h2 className="text-lg font-medium text-gray-900">
          Delivery method & Payment
        </h2>

        <fieldset className="mt-5">
          <legend className="sr-only">Payment type</legend>
          <div className="space-y-4 sm:flex    font-poppins sm:items-center sm:space-y-0 sm:space-x-10">
            {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
              <div key={paymentMethod.id} className="flex items-center">
                {paymentMethodIdx === 0 ? (
                  <input
                    id={paymentMethod.id}
                    name="payment-type"
                    type="radio"
                    defaultChecked
                    className="focus:ring-indigo-500   py-3 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                ) : (
                  <input
                    id={paymentMethod.id}
                    name="payment-type"
                    type="radio"
                    className="focus:ring-indigo-500  py-3 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                )}

                <label
                  htmlFor={paymentMethod.id}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {paymentMethod.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        {deliveryMethods.map((deliveryMethod) => (
          <RadioGroup.Option
            key={deliveryMethod.id}
            value={deliveryMethod}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-transparent" : "border-gray-300",
                active ? "ring-1 ring-gray-500" : "",
                "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <div className="flex-1 flex">
                  <div className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {deliveryMethod.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500"
                    >
                      {deliveryMethod.turnaround}
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className="mt-6 text-sm font-medium text-gray-900"
                    >
                      Rs {deliveryMethod.price.toFixed(2)}
                    </RadioGroup.Description>
                  </div>
                </div>
                {checked ? (
                  <CheckCircleIcon
                    className="h-5 w-5 text-gray-600"
                    aria-hidden="true"
                  />
                ) : null}
                <div
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-gray-500" : "border-transparent",
                    "absolute -inset-px rounded-lg pointer-events-none"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </div>
  );
}

export default DeliveryMethod;
