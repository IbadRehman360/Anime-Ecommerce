import { connectToDB } from "@utils/database";
export const GET = async (request, response) => {
  try {
    await connectToDB();

    return new Response(JSON.stringify(productsInCategory), { status: 200 });
  } catch (error) {
    console.error("Error while processing request:", error);
    return new Response("An error occurred while fetching the products", {
      status: 500,
    });
  }
};
