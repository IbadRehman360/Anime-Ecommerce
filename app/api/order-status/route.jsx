import Order from "@models/order";
import Product from "@models/product";
import Customer from "@models/customer";
import OrderItem from "@models/orderItems";
import { connectToDB } from "@utils/database";

export const POST = async (request, response) => {
  try {
    await connectToDB();
    const data = await request.json();
    const { orderId, phoneNumber } = data;

    let orderStatus;

    if (orderId && !phoneNumber) {
      orderStatus = await Order.findById(orderId)
        .populate({
          path: "customer",
          model: Customer,
        })
        .populate({
          path: "items",
          model: OrderItem,
          populate: {
            path: "product_id",
            model: Product,
          },
        });
    } else if (!orderId && phoneNumber) {
      const orderStatus = await Order.find({
        "customer.phone": phoneNumber,
      })
        .populate({
          path: "customer",
          model: Customer,
        })
        .populate({
          path: "items",
          model: OrderItem,
          populate: {
            path: "product_id",
            model: Product,
          },
        });
      console.log(orderStatus);
    } else {
      return new Response("Invalid request parameters", { status: 400 });
    }

    console.log(orderStatus);
    return new Response(JSON.stringify(orderStatus), { status: 200 });
  } catch (error) {
    console.error("Error while processing request:", error);
    return new Response("An error occurred while fetching the products", {
      status: 500,
    });
  }
};
