import LatestDropOption from "./LatestDropOption";
import Carousel from "@components/Carousel";
import products from "@data/fakeProduct";

function LatestDrop() {
  return (
    <div className=" pt-10 pb-6     sm:pb-8   lg:pb-10 mx-auto     md:px-6 px-2 py-2      w-full  ">
      <div className="text-center">
        <h2 className="font-montserrat font-extrabold text-[2rem] sm:text-[2.6rem]  text-gray-900 tracking-wider text-center lg:mt-6  ">
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
