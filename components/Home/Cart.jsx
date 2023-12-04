// import { FaCogs } from "react-icons/fa";

function HomeCard() {
  return (
    <section
      aria-labelledby="featured-heading    "
      className="relative mt-16 rounded-lg overflow-hidden  border  h-72 lg:h-56 "
    >
      <div className="grid grid-cols-4   h-full gap-4 inset-0 border border-black">
        <img
          src="/assets/lll.webp"
          alt=""
          className="w-full h-full col-span-1  "
        />
        <img
          src="/assets/T-shirt.png"
          alt=""
          className=" col-span-3  object-contain  "
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-10  "></div>

      <div
        aria-hidden="true"
        className="relative w-full      lg:h-68 h-48 md:hidden"
      />
      <div className="absolute inset-x-0 bottom-0  bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-[26rem] lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
        <div>
          <h2
            id="featured-heading"
            className="text-xl font-poppins    font-semibold text-white"
          >
            Your Style, Your Way
          </h2>
          <p className="mt-3 text-[0.85rem] text-gray-300 font-poppins lg:inline-flex">
            Elevate your style with custom apparel - hoodies, tees, sweatshirts.
            uniquely yours statement. Quality, creativity, and flair, all at
            Senpai Merch.
          </p>
        </div>
        <a
          href="#"
          className="mt-6 flex-shrink-0 flex   text-[0.9rem]    font-raleway bg-white   py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center   font-medium text-white  hover:bg-opacity-0  bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
        >
          Customize Your Order - Contact Us{" "}
        </a>
      </div>
    </section>
  );
}

export default HomeCard;
