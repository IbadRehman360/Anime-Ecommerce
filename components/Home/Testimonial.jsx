import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="  px-4  sm:px-6 lg:py-16 pt-4 lg:pt-10 pb-12">
      <div className="relative">
        <div className="mx-auto grid justify-center items-center">
          <div className="flex justify-center my-4  text-3xl ">
            <BsInstagram />
          </div>
          <h4
            alt="instagram"
            className="    font-poppins font-semibold text-gray-600   "
          >
            FOLLOW & TAG US ON INSTAGRAM{" "}
          </h4>
        </div>
        <div className="grid gap-1 md:gap-2 xl:grid-cols-6 grid-cols-3 py-6 grid-rows-2 xl:grid-rows-1">
          {reviews.map((person, index) => (
            <div key={person.name} className="flex-none   md:py-6">
              <div className=" ">
                <Image
                  width={300}
                  height={300}
                  src={`/assets/reviewImg/${index + 1}.webp`}
                  alt={`Review by ${person.name}`}
                />
              </div>
            </div>
          ))}
        </div>

        <h6
          className=" text-center mt-9 mb-6 sm:my-8 font-montserrat  text-[1.5rem] sm:text-2xl    italic"
          style={{ fontWeight: "800" }}
        >
          TOP CATEGORIES{" "}
        </h6>
        <div
          className="  justify-center    grid-cols-2 grid-rows-3      grid  xl:grid-cols-6 sm:grid-cols-3 sm:grid-rows-2 xl:grid-rows-1
          items-center gap-3 sm:gap-4 lg:gap-10 text-xs font-poppins "
        >
          <Link
            className="border-black border  hover:border-gray-700  bg-white text-black p-3 px-8 text-center"
            href={"/category/654cc9b872d1fa8b7fc13177"}
          >
            <button>Earrings</button>
          </Link>
          <Link
            className="border-black border bg-white  hover:border-gray-700 text-black p-3 px-8 text-center"
            href={"/category/654cc9b672d1fa8b7fc1316b"}
          >
            <button>Bracelet</button>{" "}
          </Link>
          <Link
            className="border-black border bg-white  hover:border-gray-700 text-black p-3 px-8 text-center"
            href={"/category/654cc9b672d1fa8b7fc1316d"}
          >
            <button>Necklace</button>{" "}
          </Link>
          <Link
            className="border-black border bg-white  text-center hover:border-gray-700 text-black p-3 px-8"
            href={"/category/654cc9b872d1fa8b7fc1317d"}
          >
            <button>Figurines</button>{" "}
          </Link>
          <Link
            className="border-black border bg-white  hover:border-gray-700 text-black p-3 px-8 mt-2 text-center"
            href={"/category/654cc9b972d1fa8b7fc1317f"}
          >
            <button>Manga</button>{" "}
          </Link>
          <Link
            className="border-black border bg-white  text-center hover:border-gray-700 text-black p-3 px-8 mt-1"
            href={"/category/654cc9b972d1fa8b7fc13181"}
          >
            <button>Stickers</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

var reviews = [
  {
    name: "John Doe 1 ",
    comment: "Great products and fast shipping! customer service 1.",
    rating: 5,
  },
  {
    name: "Jane Smith 2 ",
    comment: "Awesome quality and fantastic customer service 2.",
    rating: 4,
  },
  {
    name: "John Doe 3",
    comment: "Great products and fast shipping! customer service 3.",
    rating: 5,
  },
  {
    name: "Jane Smith 4",
    comment: "Awesome quality and fantastic customer service 4.",
    rating: 4,
  },
  {
    name: "John Doe 5",
    comment: "Great products and fast shipping! customer service 5.",
    rating: 5,
  },
  {
    name: "John Doe 6",
    comment: "Great products and fast shipping! customer service 5.",
    rating: 5,
  },
];
export default Testimonials;
