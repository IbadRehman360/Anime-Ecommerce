export const submitOrder = async (formData, setSubmitting, toast, selectedDeliveryMethod, cartItems, session, totalAmount, subtotal, availabilityData) => {
    try {
        setSubmitting(true);

        const orderResponse = await fetch("api/place-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                formData,
                selectedDeliveryMethod,
                cartItems,
                session,
                totalAmount,
                subtotal,
                availabilityData,
            }),
        });

        if (!orderResponse.ok) {
            const errorMessage = await orderResponse.text();
            toast.error(errorMessage);
            return;
        }

        const orderData = await orderResponse.json();
        const { _id: trackingId } = orderData;

        const contactData = { formData, trackingId, cartItems, totalAmount };
        const contactResponse = await fetch("/api/contact", {
            body: JSON.stringify(contactData),
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });

        if (!contactResponse.ok) {
            throw new Error(`Contact API Error: ${contactResponse.statusText}`);
        }

        const responseData = await contactResponse.json();
        toast.success(
            `Order successfully placed! Your tracking ID (${trackingId}) has been sent to ${formData.email_address}.`
        );
        return responseData;
    } catch (error) {
        console.error("An error occurred while processing the request:", error);
        toast.error(
            "An unexpected error occurred. Please try again later.",
            error.message
        );
    } finally {
        setSubmitting(false);
    }
};


export const calculateOrderDetailsTotal = (cartItems, selectedDeliveryMethod) => {
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




// const checkAvailability = async (cartItems, dispatch) => {
//   try {
//     const response = await fetch("/api/availability", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ cartItems }),
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to check availability: ${response.statusText}`);
//     }

//     const data = await response.json();
//     setAvailabilityData(data);

//     let removedItemCount = 0;
//     let updatedItemCount = 0;
//     cartItems.forEach((cartItem) => {
//       const { stock } =
//         data.find((p) => p._id === cartItem.product._id) || {};
//       if (!stock) return;

//       const { color, size } = cartItem;
//       let stockQty = 0;

//       if (stock.colorswithsize?.[color]?.[size]) {
//         stockQty = stock.colorswithsize[color][size].quantity;
//       } else if (stock.sizes?.[size]) {
//         stockQty = stock.sizes[size].quantity;
//       } else if (stock.colors?.[color]) {
//         stockQty = stock.colors[color].quantity;
//       } else {
//         stockQty = stock.quantity;
//       }

//       if (stockQty <= 0) {
//         dispatch(
//           removeItemsWithZeroQuantity({
//             productId: cartItem.product._id,
//             color,
//             size,
//           })
//         );
//         removedItemCount++;
//       }
//       if (stockQty > 0 && stockQty !== cartItem.quantity) {
//         dispatch(
//           updateCartItems({
//             productId: cartItem.product._id,
//             quantity: stock.quantity,
//             color,
//             size,
//           })
//         );
//         updatedItemCount++;
//       }
//     });

//     if (removedItemCount > 0 && updatedItemCount > 0) {
//       toast.error(
//         `${removedItemCount} item(s) removed due to sold out. Updated quantity: ${updatedItemCount}.`
//       );
//     } else if (removedItemCount > 0) {
//       toast.error(
//         `${removedItemCount} item(s) removed from cart - Reason: sold out.`
//       );
//     } else if (updatedItemCount > 0) {
//       toast.success(
//         `Updated ${updatedItemCount} item(s) quantity to match availability.`
//       );
//     }
//   } catch (error) {
//     console.log(error);
//     console.error("Error checking availability:", error.message);
//   }
// };
