import Customer from "@app/models/customer";
import Order from "@app/models/order";
import OrderItem from "@app/models/orderItems";
import Product from "@app/models/product";
import User from "@app/models/user";
import { connectToDB } from "@utils/database";
export const POST = async (req, res) => {
  try {
    await connectToDB();
    const res_data = await req.json();

    const { selectedDeliveryMethod, cartItems, data, session, totalAmount, subtotal } = res_data;
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
      price: item.product.price,
      discounted_price: item.product.discount_price,
    }));

    const savedOrderItems = await OrderItem.insertMany(orderItems);

    let user_id = null;
    if (session && session.user) {
      const user = await User.findOne({ email: session.user.email });
      user_id = user._id;
    }
    console.log(totalAmount, subtotal)
    const newOrder = new Order({
      customer: customer._id,
      items: savedOrderItems.map((item) => item._id),
      delivery: selectedDeliveryMethod.delivery,
      user_id: user_id,
      total: totalAmount,
      subtotal: subtotal
    });

    const order = await newOrder.save();

    for (const item of cartItems) {
      const result = await Product.findByIdAndUpdate(item.product._id, {
        $inc: { stock_quantity: -item.quantity },
      });
      if (!result) {
        console.log(`Product with ID ${item.product._id} not found.`);
      } else {
        console.log(`Stock quantity updated for product with ID ${item.product._id}`);
      }
    }

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
