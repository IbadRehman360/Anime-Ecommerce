"use client";
import ProductDetails from "@components/Product/ProductDetails";
import ProductBtn from "@components/Product/ProductBtn";
import ProductColor from "@components/Product/ProductColor";
import ProductSizes from "@components/Product/ProductSizes";
import ProductImages from "@components/Product/ProductImages";
import BreadCrumbs from "@components/Product/BreadCrumbs";
import ProductInfo from "@components/Product/ProductInfo";
import ProductHighLights from "@components/Product/ProductHighLights";
import TrustListSvgs from "@components/Product/TrustListSvgs";
import ProductYouMayLike from "@components/Product/ProductYouMayLike";
import RelatedProduct from "@components/Product/RelatedProduct";
import ReviewSection from "@components/Product/ReviewSection";
import ProductMoreImage from "@components/Product/ProductMoreImage";
import FrequentlyBoughtTogether from "@components/Product/FrequentlyBoughtTogether";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="md:max-w-[90rem] mx-auto">
      <div className="mt-3  px-3 lg:flex hidden">
        <BreadCrumbs product={product} />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 md:px-3  justify-center items-center lg:mb-12 max-w-2xl md:max-w-[90rem] mx-auto">
        <div className="lg:col-span-1 w-full h-full lg:-mb-16">
          <div className="relative w-full h-full">
            <img
              src={"assets/latest/2.jpg"}
              className="border-2 border-black  h-5/6 w-full object-cover max-h-full"
              alt="Product Image"
            />
            <div className="lg:hidden flex absolute bottom-2 left-4 z-10">
              <ProductMoreImage />
            </div>
            <div className="lg:flex   hidden">
              <ProductMoreImage />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 px-3 lg:pl-16">
          <div className="flex flex-col pt-4">
            <div className="mt-3 lg:hidden flex">
              <BreadCrumbs product={product} />
            </div>
            <ProductInfo product={product} reviews={reviews} />
            <ProductHighLights product={product} />
            <form className="pt-6 border-t">
              <ProductColor product={product} />
              <ProductSizes product={product} />
              <ProductBtn />
            </form>
          </div>
        </div>
        <div className="lg:col-span-1">
          <ProductDetails product={product} />

          <TrustListSvgs />
        </div>
        <div className="lg:col-span-1 mx-6">
          <FrequentlyBoughtTogether />
        </div>

        <div className="lg:col-span-2">
          <div className="px-3">
            <ReviewSection />
          </div>
        </div>
      </div>
      {/* <ProductYouMayLike /> */}
      <RelatedProduct />
    </div>
  );
}

var product = {
  name: "Zoro Regular Fit T-Shirt",
  price: "19222",
  discountedPrice: "1289",
  anime: "one piece",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',

  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],

  shipping: [
    "All orders are processed within 12-24 hours.",
    "Estimated delivery time:",
    "For metros: 1-4 days.",
    "For the rest of India: 5-8 days.",
    "(Please note: All the COD orders may take up to 24-48 hours to be processed.)",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
var reviews = { href: "#", average: 4, totalCount: 117 };
