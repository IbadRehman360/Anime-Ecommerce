function Details() {
  return (
    <div className="bg-white border-b-2  ">
      <div className="mx-auto grid pt-10 md:pt-16 px-3 sm:px-6 lg:mb-20 mb-10 grid-cols-1 items-center  w-full  lg:max-w-[110rem] lg:grid-cols-2 lg:px-8">
        <div className=" justify-end lg:hidden ">
          <img
            src="/assets/Des/2.webp"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 lg:hidden flex  mb-8 lg:mb-10  h-[30rem] md:h-[40rem] w-full"
          />
        </div>
        <div className="leading-7  tracking-wide">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Anime Phone Cases
          </h2>
          <p className="mt-4 text-lg font-cabin text-gray-500">
            Personalize your phone with custome designed cases. Choose{" "}
            <span className=" font-medium">Images</span>.{" "}
            <span className=" font-medium">Text</span> and{" "}
            <span className=" font-medium">Background</span> to create unique
            look. Express your style and protect your device with our customized
            phone cases.
            <div className=" ">
              <button className="border bg-center flex  font-cabin   tracking-widest bg-red-500  text-sm    py-2 px-3 lg:py-2.5 lg:px-4   font-meduim   text-white mt-6 lg:mt-8  rounded-md">
                CONTACT NOW{" "}
              </button>
            </div>
          </p>{" "}
        </div>
        <div className=" justify-end hidden lg:flex">
          <img
            src="/assets/Des/2.webp"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100   h-[40rem] w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
