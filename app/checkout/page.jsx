"use client";

import OrderSummary from "@components/CheckOut/OrderSummary";
import FormInput from "@components/CheckOut/FormInputs";
import { useForm } from "react-hook-form";
import RadioGroups from "@components/CheckOut/RadioGroups";
import InputForm from "@components/CheckOut/InputForm";

export default function Example() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                    name="email-address"
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
                <RadioGroups />
              </div>
            </div>
            <OrderSummary />
          </form>
        </div>
      </main>
    </div>
  );
}
