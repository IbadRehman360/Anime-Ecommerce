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

    if (orderId) {
      orderStatus = await getOrderStatusById(orderId);
    } else if (phoneNumber) {
      const customers = await findCustomersByPhone(phoneNumber);
      if (customers && customers.length > 0) {
        const customerOrderStatusPromises = customers.map((customer) =>
          getOrderStatusByCustomer(customer._id)
        );
        const customerOrderStatus = await Promise.all(
          customerOrderStatusPromises
        );

        orderStatus = [].concat(...customerOrderStatus);
      } else {
        return new Response("Customer not found", { status: 404 });
      }
    } else {
      return new Response("Invalid request parameters", { status: 400 });
    }

    return new Response(JSON.stringify(orderStatus), { status: 200 });
  } catch (error) {
    console.error("Error while processing request:", error);
    return new Response("An error occurred while fetching the order status", {
      status: 500,
    });
  }
};

async function getOrderStatusById(orderId) {
  return Order.findById(orderId)
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
}

async function findCustomersByPhone(phoneNumber) {
  try {
    return await Customer.find({ phone: phoneNumber });
  } catch (error) {
    console.error("Error in findCustomersByPhone:", error);
    throw error;
  }
}

async function getOrderStatusByCustomer(customerId) {
  return Order.find({ customer: customerId })
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
}
