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
      <div className="mx-auto lg:max-w-[112rem] px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className=" border-gray-200 ">
            <h2 className="font-bungee text-3xl lg:text-4xl tracking-wider font-semibold leading-6 text-center mt-10 mb-10 text-gray-700">
              SHOP BY ANIME
            </h2>
          </div>
          <div className="   lg:grid-cols-4 lg:gap-x-6 lg:space-y-0 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 ">
            {callouts.map((callout) => (
              <div key={callout.name} className="px-1 py-1  ">
                <div className="   overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 h-[30rem]">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-10">
            <button className="flex items-center text-white font-bold text-lg space-x-2 bg-gray-900 px-4 py-2 rounded">
              <span className="text-center">SHOP ALL</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
