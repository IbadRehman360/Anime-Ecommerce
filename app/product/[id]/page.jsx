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
import ReviewSection from "@components/ProductPreview/ReviewSection";
import ProductMoreImage from "@components/ProductPreview/ProductMoreImage";
import FrequentlyBoughtTogether from "@components/ProductPreview/FrequentlyBoughtTogether";
import ProductImage from "@components/ProductPreview/ProductImage";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
[];
export default async function Example({ params: { id } }) {
  const data = await getProductByID(id);
  const product = data.requestedProduct;
  const suggestions = data.productsWithSameCategory;
  const randomSuggestion = data.randomProducts;
  return (
    <div className="lg:max-w-[90rem]  lg:mx-auto">
      <div className="mt-3 lg:mb-10 px-3 lg:flex hidden">
        <BreadCrumbs product={product} />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:px-3  lg:mb-12   lg:max-w-[90rem] w-full lg:mx-auto">
        <ProductImage product={product} />

        <div className="lg:col-span-1 px-3 lg:pl-16">
          <div className="flex flex-col  ">
            <div className="mt-5 mb-4 lg:hidden flex">
              <BreadCrumbs product={product} />
            </div>
            <ProductInfo product={product} />
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
        <div className="lg:col-span-1 mx-8">
          <FrequentlyBoughtTogether suggestions={suggestions} />
        </div>

        <div className="lg:col-span-2">
          <div className="px-3">
            <ReviewSection />
          </div>
        </div>
      </div>
      <ProductYouMayLike randomSuggestion={randomSuggestion} />
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
