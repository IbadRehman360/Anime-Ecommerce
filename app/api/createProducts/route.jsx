import Product from "@models/product";
import { connectToDB } from "@utils/database";

export const POST = async (request, response) => {
  try {
    await connectToDB();
    const newProduct = new Product({
      title: "Cosplay Couture Collection: Elegance in Anime Accessories",
      description:
        "Elevate your style with our premium white hoodie featuring a unique design.",
      category_id: "654cc9b672d1fa8b7fc1316b",
      anime_category_id: "654cc5ce72d1fa8b7fc130f3",
      reviews_id: ["654adf7c8e0f56318b7f3d42", "65589ba50ae5a19520117a59"],
      stock: {
        quantity: 10,
        discount_price: {
          global: 8700,
        },
        price: {
          global: 6200,
        },
        sizes: {
          red: {
            XS: { quantity: 3, price: 5999, discount_price: 2990 },
            S: { quantity: 3, price: 5999, discount_price: 2990 },
            M: { quantity: 0, price: 5999, discount_price: 2990 },
          },
          yellow: {
            XS: { quantity: 0, price: 5999, discount_price: 2990 },
            S: { quantity: 0, price: 5999, discount_price: 2990 },
            M: { quantity: 0, price: 5999, discount_price: 2990 },
          },
          blue: {
            XS: { quantity: 0, price: 5999, discount_price: 2990 },
            S: { quantity: 0, price: 5999, discount_price: 2990 },
            M: { quantity: 0, price: 5999, discount_price: 2990 },
          },
        },
      },
      images: [
        "https://www.kiayaaccessories.com/cdn/shop/products/ManjiGangKimono_04...",
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
      createdAt: new Date("2023-11-18T11:07:30.704Z"),
      updatedAt: new Date("2023-12-26T21:41:47.358Z"),
      is_accessories: true,
    });

    const savedProduct = await newProduct.save();

    return new Response(JSON.stringify(savedProduct), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("An error occurred while adding a product", {
      status: 500,
    });
  }
};
