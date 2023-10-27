import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const callouts = [
  {
    name: "Attack on Titans",
    description: "Work from home accessories",
    imageSrc: "/assets/Categories/3.webp",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Naruto",
    description: "Journals and note-taking",
    imageSrc: "/assets/Categories/4.jpeg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Jujustsu Kaisen",
    description: "Daily commute essentials",
    imageSrc: "/assets/Categories/3.webp",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "One Piece",
    description: "Daily commute essentials",
    imageSrc: "/assets/Categories/4.jpeg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto lg:max-w-[112rem] px-2 sm:px-6 lg:px-8">
        <div className="">
          <div className=" border-gray-200 ">
            <h2 className="font-bungee  text-2xl sm:text-3xl text-center  lg:text-4xl tracking-wider font-semibold leading-6  mt-10 mb-10  text-gray-900">
              SHOP BY ANIME
            </h2>
          </div>
          <div className="lg:grid-cols-4 lg:gap-x-6 lg:space-y-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
            {callouts.map((callout) => (
              <div key={callout.name} className=" border rounded-md  relative">
                <div className="overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 h-[30rem]">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full"
                  />
                </div>
                <div className="absolute bottom-0 font-bold text-xl pr-4  rounded-md bg-[#111] opacity-95 left-0 py-2.5 w-full text-white">
                  <span className="ml-4">{callout.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-10">
            <button className="flex items-center text-white font-bold text-lg space-x-2 bg-[#1f1f1f] hover:bg-[#4c4b4b] px-4 py-2 rounded">
              <span className="text-center">SHOP ALL</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
