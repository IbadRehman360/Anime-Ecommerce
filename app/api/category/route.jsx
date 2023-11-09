import GeneralCategory from "@models/category";
import { connectToDB } from "@utils/database";

export const POST = async (request, response) => {
  try {
    await connectToDB();

    const body = await request.json();
    const { title } = body;
    console.log("Title:", title);

    const newCategory = new GeneralCategory({
      name: title,
    });
    const savedCategory = await newCategory.save();

    return new Response(JSON.stringify(savedCategory), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("An error occurred while adding a category", {
      status: 500,
    });
  }
};
