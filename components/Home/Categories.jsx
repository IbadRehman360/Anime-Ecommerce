import { FaArrowRight, FaOptinMonster } from "react-icons/fa";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const callouts = [
  {
    name: "Attack on Titans",
    description: "Work from home accessories",
    imageSrc: "/assets/Categories/1.jpg",

    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Naruto",
    description: "Journals and note-taking",
    imageSrc: "/assets/Categories/2.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Jujustsu Kaisen",
    description: "Daily commute essentials",
    imageSrc: "/assets/Categories/3.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "One Piece",
    description: "Daily commute essentials",
    imageSrc: "/assets/Categories/4.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Jujustsu Kaisen",
    description: "Daily commute essentials",
    imageSrc: "/assets/Categories/5.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "One Piece",
    description: "Daily commute essentials",
    imageSrc: "/assets/Categories/6.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Jujustsu Kaisen",
    description: "Daily commute essentials",
    imageSrc: "/assets/Categories/7.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "One Piece",
    description: "Daily commute essentials",
    imageSrc: "/assets/Categories/8.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "One Piece",
    description: "Daily commute essentials",
    imageSrc: "/assets/Categories/9.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Jujustsu Kaisen",
    description: "Daily commute essentials",
    imageSrc: "/assets/Categories/10.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
export default function Example() {
  return (
    <div className="      pt-10 pb-8 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-16">
      <div className="">
        <div className="border-gray-200">
          <div className="text-center  ">
            <h2 className="text-3xl font-montserrat sm:text-4xl pb-6 sm:pb-8 lg:pb-12   text-black  ">
              SHOP BY ANIME
            </h2>
          </div>
        </div>
        <div className="mx-auto  px-2 sm:px-6 lg:px-8 ">
          <div className="lg:grid-cols-5 lg:gap-x-10    gap-8  grid grid-cols-2   sm:grid-cols-2 md:grid-cols-2">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="rounded-md w-full shadow-2xl   border-black  border relative"
              >
                <div className="overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="   "
                  />
                </div>
                <div className="absolute bottom-0   font text-sm line-clamp-1 lg:text-[1.1rem] tracking-wide pr-4  bg-[#111] opacity-80 left-0 py-3 sm:py-3.5 w-full text-white">
                  <div className="flex justify-center">
                    <span className="ml-4 text-center">{callout.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 flex items-center justify-center">
        <button className="flex items-center text-white font-bold  md:text-lg space-x-2 bg-[#1f1f1f] hover:bg-[#4c4b4b] px-4 py-2 rounded">
          <span className="text-center">SHOP ALL</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
