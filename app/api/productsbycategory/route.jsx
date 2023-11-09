import Category from "@models/category";
import Product from "@models/product";
import { connectToDB } from "@utils/database";
export const GET = async (request, response) => {
  try {
    await connectToDB();
    console.log("Connected to the database");

    const url = new URL(request.url, "http://localhost:3000");
    const category = url.searchParams.get("category");

    if (!category) {
      console.log("Category parameter is missing");
      return new Response("Category parameter is missing", { status: 400 });
    }

    const foundCategory = category;
    const products = await Product.find({ category_id: foundCategory })
      .limit(12)
      .populate("category_id");

    if (!products || products.length === 0) {
      console.log("No products found for category: " + category);
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
