"use client";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import OrderSummary from "@components/CheckOut/OrderSummary";
import FormInput from "@components/CheckOut/FormInputs";
import { useForm } from "react-hook-form";
import RadioGroups from "@components/CheckOut/RadioGroups";
import InputForm from "@components/CheckOut/InputForm";
import { useEffect, useState } from "react";
import { selectCartItems } from "@app/Global/Features/cartSlice";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import {
  calculateOrderDetailsTotal,
  checkAvailability,
  submitOrder,
} from "@utils/OrderUtils";

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );
  const [isSubmitting, setSubmitting] = useState(false);
  const { handleSubmit, register, watch, control } = useForm();
  const isCartEmpty = cartItems.length === 0;
  const { subtotal, shipping, tax, totalAmount } = calculateOrderDetailsTotal(
    cartItems,
    selectedDeliveryMethod
  );
  if (!cartItems.length) redirect("/");
  useEffect(() => {
    const checkAndDispatchAvailability = () => {
      console.log("Checking availability...");
      checkAvailability(cartItems, dispatch);
    };

    checkAndDispatchAvailability();
    const intervalId = setInterval(checkAndDispatchAvailability, 10000);

    return () => clearInterval(intervalId);
  }, [cartItems, dispatch]);

  // There were 3 qty selected for a product, but availability was only 1 i think it fixed qty, but removed 3 quantity from product avialable instead of just 1

  return (
    <div className=" ">
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>
          <form
            onSubmit={handleSubmit((formData) =>
              submitOrder(
                formData,
                setSubmitting,
                toast,
                selectedDeliveryMethod,
                cartItems,
                session,
                totalAmount,
                subtotal,
                dispatch
              )
            )}
            className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
          >
            <div>
              <div>
                <h2 className="text-xl font-medium text-gray-900">
                  Contact information
                </h2>

                <div className="mt-4">
                  <FormInput
                    label="Email address"
                    name="email_address"
                    type="email"
                    id="email_address"
                    autoComplete="email"
                    rules={{
                      required: "Email is required",
                      pattern: /^\S+@\S+$/i,
                    }}
                    control={control}
                  />
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <InputForm control={control} />
                <RadioGroups
                  setSelectedDeliveryMethod={setSelectedDeliveryMethod}
                  selectedDeliveryMethod={selectedDeliveryMethod}
                  deliveryMethods={deliveryMethods}
                  control={control}
                />
              </div>
            </div>
            <OrderSummary
              isSubmitting={isSubmitting}
              subtotal={subtotal}
              shipping={shipping}
              totalAmount={totalAmount}
              tax={tax}
              isCartEmpty={isCartEmpty}
              cartItems={cartItems}
            />
          </form>
        </div>
      </main>
    </div>
  );
}

var deliveryMethods = [
  {
    id: 1,
    delivery: "Standard",
    turnaround: "4–6 business days",
    price: 149.99,
  },
  {
    id: 2,
    delivery: "Express",
    turnaround: "2–4 business days",
    price: 300,
  },
];
