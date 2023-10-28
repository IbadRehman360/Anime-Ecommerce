import { FaCogs } from "react-icons/fa";

function Details2() {
  return (
    <div className="bg-white border-y-2 pb-10 lg:pb-20">
      <div className="text-center lg:pt-16 lg:pb-8 ">
        <h3 className="text-3xl lg:text-4xl sm:text-5xl text-center justify-center  tracking-wider flex text-gray-900 font-bungee">
          <FaCogs className="inline-block mr-2 " />
          CUSTOM <span className="hidden sm:flex ml-2">MADE</span>
          <FaCogs className="inline-block ml-2" />
        </h3>
      </div>
      <div className="mx-auto grid   pt-8  px-3 sm:px-6 grid-cols-1 items-center  w-full  lg:max-w-[110rem] lg:grid-cols-2 lg:px-8">
        <div className="">
          <img
            src="/assets/Des/2.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100  h-[30rem] md:h-[40rem] w-full"
          />
        </div>

        <div className="leading-7 lg:ml-14 tracking-wide">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Anime Apparel
          </h2>
          <p className="mt-4 text-lg font-cabin text-gray-500">
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
          <button className="border bg-center flex   bg-gray-800 font-cabin text-sm   tracking-widest   py-2 px-3 lg:py-2.5 lg:px-4   font-semibold   text-white mt-6 lg:mt-8  rounded-md">
            PURCHASE NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details2;
