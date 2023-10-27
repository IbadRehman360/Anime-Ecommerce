function Details2() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid pt-10 md:pt-16 px-3 sm:px-6 grid-cols-1 items-center  w-full  lg:max-w-[110rem] lg:grid-cols-2 lg:px-8">
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
          <p className="mt-4 text-gray-500">
            At <span className=" font-medium"> Senpai Merch</span>, we
            specialize in top-quality custom apparel. From{" "}
            <span className=" font-medium"> hoodies </span>to{" "}
            <span className=" font-medium"> tees</span> to
            <span className=" font-medium"> sweatshirts</span> and more, we
            offer the finest in personalized clothing. Stand out from the crowd
            with our custom designs and{" "}
            <span className=" font-medium"> high-quality</span> materials.
            Choose <span className=" font-medium"> Senpai Merch</span> for all
            your apparel needs!
          </p>
          <button className="border bg-center flex  bg-gray-800      font-semibold tracking-wider text-white py-2 px-4 mt-6 lg:mt-10  rounded-md">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details2;
