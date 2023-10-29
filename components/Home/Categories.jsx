import { FaArrowRight, FaOptinMonster } from "react-icons/fa";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

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
    <div className=" border-t  pt-10 pb-8 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10">
      <div className="">
        <div className="border-gray-200">
          <div className="text-center  ">
            <h2 className="text-3xl sm:text-4xl pb-6 sm:pb-8 lg:pb-12   text-black font-bungee">
              SHOP BY ANIME
              <FaOptinMonster className="inline-block ml-5 mb-3.5" />
            </h2>
          </div>
        </div>
        <div className="mx-auto lg:max-w-[112rem] px-2 sm:px-6 lg:px-8 ">
          <div className="lg:grid-cols-4 lg:gap-x-6 grid grid-cols-2  gap-1 sm:grid-cols-2 md:grid-cols-2">
            {callouts.map((callout) => (
              <div key={callout.name} className="border rounded-md relative">
                <div className="overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-[22vh] sm:h-[35vh] lg:h-[40vh] "
                  />
                </div>
                <div className="absolute bottom-0 font-bold text-sm  line-clamp-1 lg:text-xl pr-4 rounded-md bg-[#111] opacity-90 left-0 py-2 sm:py-2.5 w-full text-white">
                  <span className="ml-4 flex">{callout.name} </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button className="flex items-center text-white font-bold  md:text-lg space-x-2 bg-[#1f1f1f] hover:bg-[#4c4b4b] px-4 py-2 rounded">
          <span className="text-center">SHOP ALL</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
