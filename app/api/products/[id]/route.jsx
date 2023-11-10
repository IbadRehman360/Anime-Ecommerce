import Product from "@models/product";
import Category from "@models/category";
import { connectToDB } from "@utils/database";

export const GET = async (request, response) => {
  try {
    await connectToDB();
    const id = request.url.split("/").pop();
    const product = await Product.findById(id).populate("category_id");

    if (!product) {
      console.log("No product found with ID: " + id);
      return new Response("Product not found", { status: 404 });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error("Error while processing request:", error);
    return new Response("An error occurred while fetching the product", {
      status: 500,
    });
  }
};
