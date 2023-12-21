import Product from "@models/product";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const data = await req.json();
    const { cartItems } = data;
    const products = [];
    for (const cartItem of cartItems) {
      const product = await Product.findById(cartItem.product._id);
      products.push(product);
    }

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("An error occurred while adding a product", {
      status: 500,
    });
  }
};
