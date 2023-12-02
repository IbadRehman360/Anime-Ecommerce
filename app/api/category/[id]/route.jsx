import AnimeCategory from "@models/animeCategory";
import Product from "@models/product";
import { connectToDB } from "@utils/database";

export const GET = async (request, response) => {
  try {
    await connectToDB();
    const id = request.url.split("/").pop();

    if (id === "accessories") {
      const accessoriesData = await Product.find({
        is_accessories: true,
      }).populate("anime_category_id");

      if (!accessoriesData || accessoriesData.length === 0) {
        console.log("No accessories found");
        return new Response("Accessories not found", { status: 404 });
      }

      return new Response(JSON.stringify(accessoriesData), {
        status: 200,
      });
    } else if (id === "all-products") {
      const allProducts = await Product.find({}).populate("anime_category_id");

      if (!allProducts || allProducts.length === 0) {
        console.log("No products found");
        return new Response("Products not found", { status: 404 });
      }

      return new Response(JSON.stringify(allProducts), {
        status: 200,
      });
    } else {
      const productsInCategory = await Product.find({
        anime_category_id: id,
      }).populate("anime_category_id");

      if (!productsInCategory || productsInCategory.length === 0) {
        const productsInGeneralCategory = await Product.find({
          category_id: id,
        }).populate("category_id");

        if (
          !productsInGeneralCategory ||
          productsInGeneralCategory.length === 0
        ) {
          console.log("No products found in the category with ID: " + id);
          return new Response("Products not found", { status: 404 });
        }

        return new Response(JSON.stringify(productsInGeneralCategory), {
          status: 200,
        });
      }
    }
  } catch (error) {
    console.error("Error while processing request:", error);
    return new Response("An error occurred while fetching the products", {
      status: 500,
    });
  }
};
