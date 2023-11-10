import ProductDetails from "@components/ProductPreview/ProductDetails";
import ProductBtn from "@components/ProductPreview/ProductBtn";
import ProductColor from "@components/ProductPreview/ProductColor";
import ProductSizes from "@components/ProductPreview/ProductSizes";
import ProductImages from "@components/ProductPreview/ProductImages";
import BreadCrumbs from "@components/ProductPreview/BreadCrumbs";
import ProductInfo from "@components/ProductPreview/ProductInfo";
import ProductHighLights from "@components/ProductPreview/ProductHighLights";
import TrustListSvgs from "@components/ProductPreview/TrustListSvgs";
import ProductYouMayLike from "@components/ProductPreview/ProductYouMayLike";
import RelatedProduct from "@components/ProductPreview/RelatedProduct";
import ReviewSection from "@components/ProductPreview/ReviewSection";
import ProductMoreImage from "@components/ProductPreview/ProductMoreImage";
import FrequentlyBoughtTogether from "@components/ProductPreview/FrequentlyBoughtTogether";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
[];
export default async function Example({ params: { id } }) {
  const product = await getProductByID(id);
  return (
    <div className="md:max-w-[90rem] mx-auto">
      {/* <div className="mt-3  px-3 lg:flex hidden">
        <BreadCrumbs product={product} />
      </div> */}
      {/* <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 md:px-3  justify-center items-center lg:mb-12 max-w-2xl md:max-w-[90rem] mx-auto">
        <div className="lg:col-span-1 w-full h-full lg:-mb-16">
          <div className="relative w-full h-full">
            <img
              src={"/assets/latest/2.jpg"}
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
      <ProductYouMayLike />
      <RelatedProduct /> */}
    </div>
  );
}

export async function getProductByID(id) {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}
