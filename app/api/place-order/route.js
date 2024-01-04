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

    const { selectedDeliveryMethod, cartItems, data, session, totalAmount, subtotal, availabilityData } = res_data;
    let removedItemCount = 0;
    let updatedItemCount = 0;

    for (const item of cartItems) {
      const availabilityItem = availabilityData.find((p) => p._id === item.product._id);
      const { stock } = availabilityItem || {};

      if (!stock) {
        console.log(`Stock not found for product ${item.product._id}`);
        continue;
      }

      const { color, size } = item;
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
        removedItemCount++;
      }

      if (stockQty >= 1 && stockQty < item.quantity) {
        updatedItemCount++;
      }

    }

    if (removedItemCount > 0 && updatedItemCount > 0) {
      return new Response(`${removedItemCount} item(s) sold out and Update quantity of ${updatedItemCount} before ordering.`, {
        status: 400,
      });
    } else if (removedItemCount > 0) {
      return new Response(`${removedItemCount} item(s) sold out - Remove them before ordering.`, {
        status: 400,
      });
    } else if (updatedItemCount > 0) {
      return new Response(`Update ${updatedItemCount} item(s) quantity to match availability.`, {
        status: 400,
      });
    }

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
    let updateResults = [];



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
