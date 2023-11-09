// import Product from "@models/product";
// import { connectToDB } from "@utils/database";

// export const POST = async (request, response) => {
//   try {
//     await connectToDB();

//     const newProduct = new Product({
//       title: "Sample Product",
//       description: "This is a sample product description",
//       highlight: "Sample highlight",
//       price: 3333.0,
//       category_id: "654cc9b772d1fa8b7fc13175",
//       anime_category_id: "654adb318e0f56318b7f3d3e",
//       image_url:
//         "https://th.bing.com/th/id/OIP.T2QMq4HYUsEuYWJDlyvxvwHaHa?pid=ImgDet&rs=1",
//       stock_quantity: 100,
//       reviews_id: "654adf7c8e0f56318b7f3d42",
//     });

//     const savedProduct = await newProduct.save();

//     return new Response(JSON.stringify(savedProduct), { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return new Response("An error occurred while adding a product", {
//       status: 500,
//     });
//   }
// };
