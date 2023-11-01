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

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white mx-auto max-w-2xl  md:max-w-[110rem]">
      <div className="">
        {/* Image gallery */}
        <ProductImages product={product} />
        {/* BreedCrumbsy */}
        <BreadCrumbs product={product} />
        {/* Product info */}
        {/* Options */}
        {/* Info*/}
        <ProductInfo product={product} reviews={reviews} />
        {/* HighLights */}
        <ProductHighLights product={product} />

        <form className="pt-6 border-t">
          {/* Colors */}
          <ProductColor product={product} />
          {/* Sizes */}
          <ProductSizes product={product} />
          {/* Buttons */}
          <ProductBtn />
        </form>
        {/* Details*/}
        <ProductDetails product={product} />
        {/* List Of Svg*/}
        <TrustListSvgs />
        {/* Reviews */}
        <div className="px-3  ">
          <ReviewSection />
        </div>
        {/* Product List 1*/}
      </div>
    </div>
  );
}
<ProductYouMayLike />;
{
  /* Product List 2*/
}
<RelatedProduct />;
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
