"use client";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import OrderSummary from "@components/CheckOut/OrderSummary";
import FormInput from "@components/CheckOut/FormInputs";
import { useForm } from "react-hook-form";
import RadioGroups from "@components/CheckOut/RadioGroups";
import InputForm from "@components/CheckOut/InputForm";
import { useEffect, useState } from "react";
import {
  clearCart,
  selectCartItems,
  removeItemsWithZeroQuantity,
  updateCartItems,
} from "@app/Global/Features/cartSlice";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const deliveryMethods = [
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
export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const delay = 5000;
  const isCartEmpty = cartItems.length === 0;

  const { control, handleSubmit } = useForm();

  if (!cartItems.length) redirect("/");

  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );
  const [availabilityData, setAvailabilityData] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateOrderDetails = () => {
    const subtotal = cartItems.reduce((total, product) => {
      const price = product.discount_price || product.price;
      const quantity = product.quantity || 1;
      return total + price * quantity;
    }, 0);

    const shippingCost = selectedDeliveryMethod.price;
    const taxRate = 0.08;

    const shipping = shippingCost;
    const tax = subtotal * taxRate;

    const totalAmount = subtotal + shipping + tax;

    return { subtotal, shipping, tax, totalAmount };
  };
  const { subtotal, shipping, tax, totalAmount } = calculateOrderDetails();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      const orderResponse = await fetch("api/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
          selectedDeliveryMethod,
          cartItems,
          session,
          totalAmount,
          subtotal,
          availabilityData,
        }),
      });

      if (orderResponse.ok) {
        const { _id: trackingId } = await orderResponse.json();
        // dispatch(clearCart());
        const contactResponse = await fetch("/api/contact", {
          body: JSON.stringify({ data, trackingId, cartItems, totalAmount }),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (contactResponse.ok) {
          const responseData = await contactResponse.json();
          toast.success(
            `Order successfully placed! Your tracking ID (${trackingId}) has been sent to ${data.email_address}.`
          );
          return responseData;
        } else {
          try {
            const errorData = await contactResponse.json();
            toast.error(
              "Error:",
              errorData.message ||
                "Failed to send tracking information. Please contact support."
            );
          } catch (error) {
            console.error("Failed to parse error response:", error);
            toast.error(
              "Failed to send tracking information. Please contact support."
            );
          }
        }
      } else {
        const errorMessage = await orderResponse.text();
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("An error occurred while processing the request:", error);
      toast.error(
        "An unexpected error occurred. Please try again later.",
        error.message
      );
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const checkAvailability = async (cartItems, dispatch) => {
    try {
      const response = await fetch("/api/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      if (!response.ok) {
        throw new Error(`Failed to check availability: ${response.statusText}`);
      }

      const data = await response.json();
      setAvailabilityData(data);

      let removedItemCount = 0;
      let updatedItemCount = 0;
      cartItems.forEach((cartItem) => {
        const { stock } =
          data.find((p) => p._id === cartItem.product._id) || {};
        if (!stock) return;

        const { color, size } = cartItem;
        let stockQty = 0;

        if (stock.colorswithsize?.[color]?.[size]) {
          stockQty = stock.colorswithsize[color][size].quantity;
        } else if (stock.sizes?.[size]) {
          stockQty = stock.sizes[size].quantity;
        } else if (stock.colors?.[color]) {
          stockQty = stock.colors[color].quantity;
        } else {
          stockQty = stock.quantity;
        }

        if (stockQty <= 0) {
          dispatch(
            removeItemsWithZeroQuantity({
              productId: cartItem.product._id,
              color,
              size,
            })
          );
          removedItemCount++;
        }
        if (stockQty > 0 && stockQty !== cartItem.quantity) {
          console.log(cartItem.product._id, stockQty, color, size);
          dispatch(
            updateCartItems({
              productId: cartItem.product._id,
              quantity: stock.quantity,
              color,
              size,
            })
          );
          updatedItemCount++;
        }
      });

      if (removedItemCount > 0 && updatedItemCount > 0) {
        toast.error(
          `${removedItemCount} item(s) removed due to sold out. Updated quantity: ${updatedItemCount}.`
        );
      } else if (removedItemCount > 0) {
        toast.error(
          `${removedItemCount} item(s) removed from cart - Reason: sold out.`
        );
      } else if (updatedItemCount > 0) {
        toast.success(
          `Updated ${updatedItemCount} item(s) quantity to match availability.`
        );
      }
    } catch (error) {
      console.log(error);
      console.error("Error checking availability:", error.message);
    }
  };

  useEffect(() => {
    const checkAvailabilityOnce = async () => {
      await checkAvailability(cartItems, dispatch);
      clearInterval(intervalId);
    };

    const intervalId = setInterval(checkAvailabilityOnce, delay);

    checkAvailabilityOnce();

    return () => clearInterval(intervalId);
  }, [cartItems, dispatch, delay]);

  return (
    <div className=" ">
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
