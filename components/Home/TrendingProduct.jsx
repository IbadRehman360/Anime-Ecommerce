import Carousel from "@components/Carousel";

function TrendingProduct({ products }) {
  return (
    <div className="  mx-auto    md:px-6 px-2 py-2  pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10     w-full  ">
      <div className="text-center   pb-4">
        <h2
          className="font-montserrat text-[1.7rem]   tracking-wider  leading-9  font-extrabold sm:text-[2.2rem] lg:text-[2.6rem] uppercase      text-center  justify-center    flex  text-gray-900  "
          style={{ fontWeight: "900" }}
        >
          Trending Product
        </h2>
      </div>
      <div className="">
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
