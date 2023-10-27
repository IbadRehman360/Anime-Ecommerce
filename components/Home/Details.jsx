function Details() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid pt-10 md:pt-16 px-3 sm:px-6 grid-cols-1 items-center  w-full  lg:max-w-[110rem] lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Anime Phone Cases
          </h2>
          <p className="mt-4 text-gray-500     leading-7  tracking-wide">
            Personalize your phone with custome designed cases. Choose{" "}
            <span className=" font-medium">Images</span>.{" "}
            <span className=" font-medium">Text</span> and{" "}
            <span className=" font-medium">Background</span> to create unique
            look. Express your style and protect your device with our customized
            phone cases.
            <div className="pt-6 xl:pt-10">
              <button className="border bg-center flex mb-10 bg-gray-800 text-white py-2.5 px-4  rounded-md">
                CONTACT NOW{" "}
              </button>
            </div>
          </p>{" "}
        </div>
        <div className="flex justify-end">
          <img
            src="/assets/Des/2.webp"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100  h-[40rem] w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
