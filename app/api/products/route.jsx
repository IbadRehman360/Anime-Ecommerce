import Category from "@models/category";
import Product from "@models/product";
import { connectToDB } from "@utils/database";
export const GET = async (request, response) => {
  try {
    await connectToDB();

    const products = await Product.find().populate("category_id");

    if (!products || products.length === 0) {
      console.log("No products found for category: " + products);
      return new Response("No products found", { status: 404 });
    }

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error("Error while processing request:", error);
    return new Response("An error occurred while fetching products", {
      status: 500,
    });
  }
};
