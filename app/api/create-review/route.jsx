import { connectToDB } from "../../../utils/database";
import Review from "@models/review";
import User from "@models/user";
import { revalidatePath, revalidateTag } from "next/cache";

export const POST = async (req, res) => {
  try {
    await connectToDB();
    const data = await req.json();
    const { productId, rating, email, reviewText } = data;
    const user = await User.findOne({ email: email });
    const fakeReviews = [];

    const fakeReview = new Review({
      user_id: user._id,
      product_id: productId,
      rating: rating,
      review_text: reviewText,
    });

    fakeReviews.push(await fakeReview.save());
    revalidatePath("/product/654afb83b12544cd3ef35832");
    revalidateTag("products");
    return new Response(JSON.stringify(fakeReviews), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("An error occurred while adding a product", {
      status: 500,
    });
  }
};
