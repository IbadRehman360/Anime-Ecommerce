import Product from "@models/product";
import { connectToDB } from "@utils/database";

export const POST = async (request, response) => {
  try {
    await connectToDB();
    const newProduct = new Product({
      title: "Cosplay Couture Collection: Elegance in Anime Accessories",
      description:
        "Elevate your style with our premium white hoodie featuring a unique design.",
      anime_category_id: "654cc5ce72d1fa8b7fc130f3",
      reviews_id: ["654adf7c8e0f56318b7f3d42", "65589ba50ae5a19520117a59"],
      category_id: "654cc9b672d1fa8b7fc1316b",
      stock: {
        discount_price: 1499,
        price: 499,
        quantity: 42,
      },
      images: [
        "https://www.kiayaaccessories.com/cdn/shop/products/Howl_sEarrings_01.jpg?v=1669444470",
        "https://th.bing.com/th/id/OIP.ZLDCu0PbqtO72jkUd2H_qwHaHa?pid=ImgDet&rs...",
        "https://th.bing.com/th/id/OIP.T2QMq4HYUsEuYWJDlyvxvwHaHa?pid=ImgDet&rs…",
      ],
      highlights: [
        "Comfortable Fabric",
        "Trendy Design",
        "Versatile Style",
        "Durable Build",
        "Warmth On-The-Go",
      ],
      createdAt: "2023-11-18T11:07:30.704Z",
      updatedAt: "2024-01-02T13:33:20.599Z",
      is_accessories: true,
    });

    const savedProduct = await newProduct.save();

    return new Response(JSON.stringify(savedProduct), { status: 201 });
  } catch (error) {
    console.error("Error adding product:", error);
    return new Response("An error occurred while adding a product", {
      status: 500,
    });
  }
};
