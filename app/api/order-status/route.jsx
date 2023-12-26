import Order from "@app/models/order";
import Product from "@app/models/product";
import Customer from "@app/models/customer";
import OrderItem from "@app/models/orderItems";
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
        // Fetch orders for all customers with the same phone number
        const customerOrderStatusPromises = customers.map((customer) =>
          getOrderStatusByCustomer(customer._id)
        );
        const customerOrderStatus = await Promise.all(
          customerOrderStatusPromises
        );

        // Flatten the array of order statuses
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
    throw error; // Propagate the error up to the calling function
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
