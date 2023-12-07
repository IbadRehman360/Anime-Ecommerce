import Link from "next/link";
import Image from "next/image";

function Details() {
  return (
    <div className=" border-b-2  ">
      <div className="mx-auto grid pt-10 md:pt-16 px-3 sm:px-6 lg:mb-20 mb-10 grid-cols-1 items-center  w-full   lg:grid-cols-2 lg:px-8">
        <div className=" justify-end lg:hidden ">
          <Image
            src="/assets/Des/2.webp"
            width={1000}
            height={1000}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg   bg-gray-100 lg:hidden flex  mb-8 lg:mb-10    "
          />
        </div>
        <div className="leading-7  tracking-  xl:mr-32 lg:mr-10 ">
          <h2 className="text-[1.5rem]    tracking-tight  font-montserrat text-gray-900 sm:text-4xl">
            Anime Phone Case
          </h2>
          <p className="mt-4 text-[0.9rem] lg:text-[0.99rem]    line-clamp-3  font-raleway text-gray-500  tracking-wide leading-7">
            Personalize your phone with custome designed cases. Choose{" "}
            <span className=" font-medium">Images</span>.{" "}
            <span className=" font-medium">Text</span> and{" "}
            <span className=" font-medium">Background</span> to create unique
            look. Express your style and protect your device with our customized
            phone cases.
          </p>{" "}
          <div className="mt-6">
            <Link
              className="border bg-center    font-montserrat   bg-red-500  text-sm   tracking-widest   py-2.5 px-5 lg:py-3 lg:px-6   font-semibold   text-white mt-6 lg:mt-4  rounded-md"
              href={"https://www.instagram.com/pakistani_senpai_merch"}
            >
              <button>CONTACT NOW</button>
            </Link>
          </div>
        </div>
        <div className=" justify-end hidden lg:flex">
          <Image
            width={600}
            height={600}
            src="/assets/Des/2.webp"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="  rounded-md   "
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
