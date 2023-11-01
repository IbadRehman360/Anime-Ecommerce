import LatestDropOption from "./LatestDropOption";
import Carousel from "@components/Carousel";
import products from "@data/fakeProduct";

function LatestDrop() {
  return (
    <div className=" pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10 mx-auto max-w-2xl   md:px-6 px-2 py-2     md:max-w-[110rem] w-full  ">
      <div className="text-center">
        <h2 className="  font-bungee   text-[2rem] sm:text-[2.6rem]   mb-2  tracking-wider font-semibold   text-center   lg:mt-6  text-black">
          OTAKU ACCESSORIES
        </h2>
      </div>
      <LatestDropOption />
      <Carousel
        products={products}
        Feature1={"FeatureProductSlide1"}
        Feature2={"FeatureProductSlide2"}
      />
    </div>
  );
}
export default LatestDrop;
