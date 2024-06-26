import ProductDetails from "@components/ProductPreview/ProductDetails";
import BreadCrumbs from "@components/ProductPreview/BreadCrumbs";
import TrustListSvgs from "@components/ProductPreview/TrustListSvgs";
import ProductYouMayLike from "@components/ProductPreview/ProductYouMayLike";
import ReviewSection from "@components/ProductPreview/ReviewSection";
import FrequentlyBoughtTogether from "@components/ProductPreview/FrequentlyBoughtTogether";
import ProductRowOne from "@components/ProductPreview/ProductRowOne";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
[];
export default async function Example({ params: { id } }) {
  const data = await getProductByID(id);
  console.log(data);
  const product = data.requestedProduct;
  const suggestions = data.productsWithSameCategory;
  const randomSuggestion = data.randomProducts;
  const reviews = data.reviews;
  return (
    <>
      <div className="lg:max-w-[90rem]  lg:mx-auto">
        <div className="mt-3 lg:mb-10 px-3 lg:flex hidden">
          <BreadCrumbs product={product} />
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:px-3  lg:mb-12   lg:max-w-[90rem] w-full lg:mx-auto">
          <ProductRowOne product={product} reviews={reviews} />
          <div className="lg:col-span-1">
            <ProductDetails product={product} />
            <TrustListSvgs />
          </div>
          <div className="lg:col-span-1 mx-8">
            <FrequentlyBoughtTogether suggestions={suggestions} />
          </div>

          <div className="lg:col-span-2">
            <div className="sm:px-3">
              <ReviewSection reviews={reviews} product={product} />
            </div>
          </div>
        </div>
        <ProductYouMayLike randomSuggestion={randomSuggestion} />
      </div>
    </>
  );
}
export async function getProductByID(id) {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/products/${id}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch product. Status: ${response.status}, Error: ${errorText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error in getProductByID:", error);
    throw error;
  }
}
