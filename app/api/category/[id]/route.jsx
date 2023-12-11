import AnimeCategory from "@models/animeCategory";
import GeneralCategory from "@models/category";
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

      return new Response(JSON.stringify(accessoriesData), { status: 200 });
    } else if (id === "all-products") {
      const allProducts = await Product.find({}).populate("anime_category_id");
      if (!allProducts || allProducts.length === 0) {
        console.log("No products found");
        return new Response("Products not found", { status: 404 });
      }
      return new Response(JSON.stringify(allProducts), { status: 200 });
    } else {
      let products;
      const productsInCategory = await Product.find({
        anime_category_id: id,
      }).populate("anime_category_id");
      if (productsInCategory.length > 0) {
        products = productsInCategory;
      } else {
        const productsInGeneralCategory = await Product.find({
          category_id: id,
        }).populate("category_id");
        if (productsInGeneralCategory.length > 0) {
          products = productsInGeneralCategory;
        } else {
          const GeneralCategoryName = await GeneralCategory.findById(id);
          if (!GeneralCategoryName) {
            const AnimeCategoryName = await AnimeCategory.findById(id);
            if (!AnimeCategoryName) {
              console.log("HI");
              return new Response("No Such Category Found", { status: 404 });
            }
            products = AnimeCategoryName;
          }
        }
      }

      return new Response(JSON.stringify(products), { status: 200 });
    }
  } catch (error) {
    console.error("Error while processing request:", error);
    return new Response("An error occurred while fetching the products", {
      status: 500,
    });
  }
};
