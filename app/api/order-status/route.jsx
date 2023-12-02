import Order from "@models/order";
import Product from "@models/product";
import Customer from "@models/customer";
import OrderItem from "@models/orderItems";

import { connectToDB } from "@utils/database";
export const POST = async (request, response) => {
  try {
    await connectToDB();
    const data = await request.json();
    console.log(data);
    const { orderId, phoneNumber } = data;
    console.log(orderId);
    const orderStatus = await Order.findById(orderId)
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
    return new Response(JSON.stringify(orderStatus), { status: 200 });
  } catch (error) {
    console.error("Error while processing request:", error);
    return new Response("An error occurred while fetching the products", {
      status: 500,
    });
  }
};
