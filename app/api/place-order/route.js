import Customer from "@models/customer";
import Order from "@models/order";
import OrderItem from "@models/orderItems";
import Product from "@models/product";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const res_data = await req.json();

    const { selectedDeliveryMethod, cartItems, formData, session, totalAmount, subtotal } = res_data;

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
    } = formData;

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
      price: item.price,
      discounted_price: item.discount_price,
    }));

    const savedOrderItems = await OrderItem.insertMany(orderItems);

    let user_id = null;
    if (session && session.user) {
      const user = await User.findOne({ email: session.user.email });
      user_id = user._id;
    }
    const newOrder = new Order({
      customer: customer._id,
      items: savedOrderItems.map((item) => item._id),
      delivery: selectedDeliveryMethod.delivery,
      user_id: user_id,
      total: totalAmount,
      subtotal: subtotal,
    });

    const order = await newOrder.save();

    for (const item of cartItems) {
      const productId = item.product._id;
      const color = item.color;
      const size = item.size;

      let updateQuery = {};
      let newQuantity;

      if (color && size) {
        newQuantity = item.quantity > 0 ? -item.quantity : 0;
        updateQuery = {
          $inc: { [`stock.colorswithsize.${color}.${size}.quantity`]: newQuantity },
        };
      } else if (size) {
        newQuantity = item.quantity > 0 ? -item.quantity : 0;
        updateQuery = {
          $inc: { [`stock.sizes.${size}.quantity`]: newQuantity },
        };
      } else if (color) {
        newQuantity = item.quantity > 0 ? -item.quantity : 0;
        updateQuery = {
          $inc: { [`stock.colors.${color}.quantity`]: newQuantity },
        };
      } else {
        newQuantity = item.quantity > 0 ? -item.quantity : 0;
        updateQuery = {
          $inc: { "stock.quantity": newQuantity },
        };
      }

      const updatedProduct = await Product.findByIdAndUpdate(productId, updateQuery);

      if (!updatedProduct) {
        console.log("Product not found");
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
//   formData,
//   selectedDeliveryMethod.delivery,
//   cartItems.map((item) => ({
//     _id: item.product._id,
//     quantity: item.quantity,
//     size: item.size,
//     color: item.color,
//   })),
//   selectedDeliveryMethod.delivery
// );
