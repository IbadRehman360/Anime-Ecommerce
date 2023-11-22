"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import OrderSummary from "@components/CheckOut/OrderSummary";
import FormInput from "@components/CheckOut/FormInputs";
import { useForm } from "react-hook-form";
import RadioGroups from "@components/CheckOut/RadioGroups";
import InputForm from "@components/CheckOut/InputForm";
import { useState } from "react";
import { selectCartItems } from "@app/Global/Features/cartSlice";
import { getSession, useSession } from "next-auth/react";

const deliveryMethods = [
  {
    id: 1,
    delivery: "Standard",
    turnaround: "4–6 business days",
    price: "Rs 150",
  },
  {
    id: 2,
    delivery: "Express",
    turnaround: "2–4 business days",
    price: "Rs 300",
  },
];
export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const { data: session } = useSession();

  const { control, handleSubmit } = useForm();
  if (!cartItems.length) redirect("/");
  console.log(cartItems);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );
  const onSubmit = async (data) => {
    try {
      const response = await fetch("api/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
          selectedDeliveryMethod,
          cartItems,
          session,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Order placed successfully:", responseData);
      } else {
        console.error("Failed to place the order. Status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred while processing the request:", error);
    }
  };

  return (
    <div className="bg-gray-50">
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
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
            <OrderSummary selectedDeliveryMethod={selectedDeliveryMethod} />
          </form>
        </div>
      </main>
    </div>
  );
}
