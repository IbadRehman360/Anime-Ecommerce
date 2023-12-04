import Carousel from "@components/Carousel";

function TrendingProduct({ products }) {
  return (
    <div className="  mx-auto    md:px-6 px-2 py-2  pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10     w-full  ">
      <div className="text-center   pb-4">
        <h2
          className="text-3xl uppercase font-montserratextra font-extrabold sm:text-[2.8rem] text-center  justify-center  tracking-wider flex  text-gray-900  "
          style={{ fontWeight: "900" }}
        >
          {" "}
          Trending <span className="hidden sm:flex pl-3">Products</span>
        </h2>
      </div>
      <div className="mt-2">
        <Carousel
          products={products}
          no={true}
          Feature1={"FeatureProductSlide1"}
          Feature2={"FeatureProductSlide2 "}
        />
      </div>{" "}
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
