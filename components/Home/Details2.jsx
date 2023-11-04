import { FaCogs } from "react-icons/fa";

function Details2() {
  return (
    <div className="bg-white sm:border-t border-b sm:border-none  pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12">
      <div className="text-center   ">
        <h3 className="text-[1.7rem] pb-2  pt-8 sm:pb-16 sm:text-4xl  uppercase text-center justify-center  tracking-wide flex text-black wider  font-montserrat">
          <FaCogs className="  mr-6 sm:inline-block hidden " />
          CUSTOMLY MADE
          <FaCogs className="  ml-6 sm:inline-block hidden" />
        </h3>
      </div>
      <div className="mx-auto grid   pt-8  px-3 sm:px-6 grid-cols-1 items-center  w-full    lg:grid-cols-2 lg:px-8">
        <div className="">
          <img
            src="/assets/Des/2.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow-md border border-black  h-[30rem] md:h-[40rem] w-full"
          />
        </div>

        <div className="leading-7 pt-8 lg:ml-14 tracking-wide">
          <h2 className="text-[1.6rem]   tracking-tight font-montserrat text-gray-900 sm:text-4xl">
            Anime Apparel
          </h2>
          <p className="mt-4 text-lg  text-gray-400  tracking-wide leading-7">
            At <span className=" font-semibold"> Senpai Merch</span>, we
            specialize in top-quality custom apparel. From{" "}
            <span className=" font-semibold"> hoodies </span>to{" "}
            <span className=" font-semibold"> tees</span> to
            <span className=" font-semibold"> sweatshirts</span> and more, we
            offer the finest in personalized clothing. Stand out from the crowd
            with our custom designs and{" "}
            <span className=" font-semibold"> high-quality</span> materials.
            Choose <span className=" font-semibold"> Senpai Merch</span> for all
            your apparel needs!
          </p>
          <button className="border bg-center flex   font-montserrat   bg-gray-800  text-sm   tracking-widest   py-2 px-3 lg:py-2.5 lg:px-4   font-semibold   text-white mt-6 lg:mt-8  rounded-md">
            PURCHASE NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details2;
