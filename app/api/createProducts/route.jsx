import Product from "@models/product";
import { connectToDB } from "@utils/database";

export const POST = async (request, response) => {
  try {
    await connectToDB();
    const newProduct = new Product({
      category_id: "654cc9b672d1fa8b7fc1316b",
      anime_category_id: "654cc5ce72d1fa8b7fc130f3",
      reviews_id: ["654adf7c8e0f56318b7f3d42"],
      title: "Strongest Vessel Club Tee",
      description:
        "Elevate your style with our premium white hoodie featuring a unique anime design. Crafted with the perfect blend of comfort and fashion, this hoodie is a must-have for any anime enthusiast. 🎨 **Color:** White, Blue, Black 👕 **Material:** High-quality cotton blend   🎭 **Design:** Stand out from the crowd with an eye-catching anime design that showcases your love for Japanese animation.",
      price: 20000,
      stock_quantity: 29,
      images: [
        "https://th.bing.com/th/id/OIP.FdcCIwNZZv0Q8sTwrDjsIQHaIp?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/OIP.ZLDCu0PbqtO72jkUd2H_qwHaHa?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/OIP.T2QMq4HYUsEuYWJDlyvxvwHaHa?pid=ImgDet&rs=1",
      ],
      colors: ["red", "blue"],
      sizes: {
        XS: true,
        XSS: false,
        S: true,
        M: false,
        L: true,
        XL: false,
        "2XL": false,
        "3XL": true,
      },
      highlights: [
        "Comfortable Fabric",
        "Trendy Design",
        "Versatile Style",
        "Durable Build",
        "Warmth On-The-Go",
      ],
      discount_price: 899,
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
