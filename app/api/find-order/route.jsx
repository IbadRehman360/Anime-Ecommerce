import Customer from "@models/customer";
import Order from "@models/order";
import OrderItem from "@models/orderItems";
import Product from "@models/product";
import User from "@models/user";
import { connectToDB } from "@utils/database";
export const GET = async (req, res) => {
  try {
    await connectToDB();
    const email = req.nextUrl.searchParams.get("email");
    const user = await User.findOne({ email: email });

    if (!user) {
      return response.status(404).json({ message: "No user found" });
    }
    const orders = await Order.find({ user_id: user._id })
      .populate({
        path: "customer",
        model: "Customer",
      })
      .populate({
        path: "items",
        model: "OrderItem",
        populate: {
          path: "product_id",
          model: "Product",
        },
      });

    if (!orders || orders.length === 0) {
      return new Response("No products found", { status: 404 });
    }

    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    console.error("Error while processing request:", error);
    return new Response("An error occurred while fetching products", {
      status: 500,
    });
  }
};
