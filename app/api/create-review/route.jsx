import { connectToDB } from "../../../utils/database";
import Review from "@models/review";
import User from "@models/user";
import Product from "@models/product";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const data = await req.json();
    const { productId, rating, email, reviewText } = data;
    const user = await User.findOne({ email: email });

    const newReview = new Review({
      user_id: user._id,
      product_id: productId,
      rating: rating,
      review_text: reviewText,
    });

    const savedReview = await newReview.save();

    await Product.findByIdAndUpdate(productId, {
      $push: { reviews_id: savedReview._id },
    });

    return new Response(JSON.stringify(savedReview), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("An error occurred while adding a product", {
      status: 500,
    });
  }
};
