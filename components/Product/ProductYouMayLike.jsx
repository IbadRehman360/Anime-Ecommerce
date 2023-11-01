import Carousel from "@components/Carousel";
import FakeProduct from "@data/fakeProduct";
import { MdTrendingUp } from "react-icons/md";

function ProductYouMayLike() {
  return (
    <div className="  mx-auto max-w-2xl  md:max-w-[110rem] md:px-6 px-2 py-2  pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10 border-t  md:max-w-[110rem] w-full  ">
      <div className="text-center  ">
        <h2 className="text-[1.35rem]  sm:text-3xl    flex  text-gray-800  font-nunito    ">
          YOU MAY ALSO LIKE{" "}
          {/* <span className="hidden sm:flex pl-3">Products</span> */}
          <MdTrendingUp className="inline-block  ml-3 mb-3.5 " />
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

export default ProductYouMayLike;
