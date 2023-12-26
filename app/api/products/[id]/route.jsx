import Category from "@app/models/category";
import Product from "@app/models/product";
import { connectToDB } from "@utils/database";
import Review from "@app/models/review";

export const GET = async (request, response) => {
  try {
    await connectToDB();
    const id = request.url.split("/").pop();
    const requestedProduct = await Product.findById(id).populate("category_id");

    if (!requestedProduct) {
      return new Response("Product not found" + id, { status: 404 });
    }

    const productsWithSameCategory = await Product.find({
      category_id: requestedProduct.category_id._id,
      _id: { $ne: id },
    })
      .limit(4)
      .populate("category_id");

    const randomProducts = await Product.aggregate([
      { $match: { _id: { $ne: id } } },
      { $sample: { size: 12 } },
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
    ]).exec();
    const reviews = await Review.find({ product_id: id }).populate("user_id");

    const responseData = {
      requestedProduct,
      productsWithSameCategory,
      randomProducts,
      reviews,
    };

    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error("Error while processing request:", error);
    return new Response("An error occurred while fetching the product", {
      status: 500,
    });
  }
};
