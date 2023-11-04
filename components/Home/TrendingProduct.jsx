import Carousel from "@components/Carousel";
import FakeProduct from "@data/fakeProduct";
import { MdTrendingUp } from "react-icons/md";

function TrendingProduct() {
  return (
    <div className="  mx-auto    md:px-6 px-2 py-2  pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10     w-full  ">
      <div className="text-center   pb-4">
        <h2 className="text-3xl sm:text-4xl   font-montserrat  flex justify-center  items-center text-black font-extralight ">
          Trending <span className="hidden sm:flex pl-3">Products</span>
        </h2>
      </div>
      <Carousel
        products={FakeProduct}
        Feature1={"FeatureProductSlide3"}
        Feature2={"FeatureProductSlider4"}
      />
    </div>
  );
}

export default TrendingProduct;

{
  /* <Link href={"/dashboard"}>
        <div className="hidden items-center gap-2 sm:flex">
          <span>Discover All</span>
          <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
            <a onClick={handleNextPage} href="#" className="">
              <MdKeyboardArrowRight />
            </a>
          </div>
        </div>
      </Link> */
}
