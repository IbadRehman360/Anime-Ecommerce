import Customer from "@models/customer";
import Order from "@models/order";
import OrderItem from "@models/orderItems";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const res_data = await req.json();

    const { selectedDeliveryMethod, cartItems, data, session } = res_data;
    const {
      email_address,
      first_name,
      last_name,
      address,
      apartment,
      city,
      country,
      phone,
      secondPhone,
    } = data;

    const newCustomer = new Customer({
      email_address,
      first_name,
      last_name,
      address,
      apartment,
      city,
      country,
      phone,
      secondPhone,
    });
    const customer = await newCustomer.save();

    const orderItems = cartItems.map((item) => ({
      product_id: item.product._id,
      quantity: item.quantity,
      size: item.size,
      color: item.color,
    }));

    const savedOrderItems = await OrderItem.insertMany(orderItems);

    const user = await User.findOne({ email: session.user.email });
    const newOrder = new Order({
      customer: customer._id,
      items: savedOrderItems.map((item) => item._id),
      delivery: selectedDeliveryMethod.delivery,
      user_id: user,
      status: "Pending",
    });

    const order = await newOrder.save();

    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("An error occurred while adding a product", {
      status: 500,
    });
  }
};
// console.log(
//   data,
//   selectedDeliveryMethod.delivery,
//   cartItems.map((item) => ({
//     _id: item.product._id,
//     quantity: item.quantity,
//     size: item.size,
//     color: item.color,
//   })),
//   selectedDeliveryMethod.delivery
// );
