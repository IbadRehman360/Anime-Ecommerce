import { FireIcon } from "@heroicons/react/24/outline";
import LatestDropDisplay from "./DisplayProducts";
import { IoMdHeart } from "react-icons/io";
import { FaFire, FaFireAlt } from "react-icons/fa";
import { BsFire } from "react-icons/bs";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/must/1.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 10.0,
    color: "Black",
    discountPrice: 200.0,
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/must/2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 20,
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/must/3.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 10.0,
    color: "Black",
    discountPrice: 120.0,
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/must/4.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 40,
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/must/5.jpg",
    discountPrice: 8,
    imageAlt: "Front of men's Basic Tee in black.",
    price: 50,
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/must/6.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 60,
    discountPrice: 800.0,

    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/must/7.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 110,
    discountPrice: 200.0,

    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/assets/must/8.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 120,
    color: "Black",
  },
];

function MustHave() {
  return (
    <article className=" border-t pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10    mx-auto lg:max-w-[112rem] px-2 sm:px-6 lg:px-8 ">
      <div className="text-center   pb-2">
        <h3 className="text-3xl   sm:text-4xl text-center justify-center  tracking-wider flex text-black font-bungee">
          <span className="hidden sm:flex mr-3"> Our </span> Best selling
          <FaFire className="inline-block ml-2 mb-3" />
        </h3>
      </div>
      <div className="grid grid-cols-2 pt-6 gap-4  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {products.map((product) => (
          <LatestDropDisplay key={product.id} products={product} />
        ))}
      </div>
    </article>
  );
}

export default MustHave;
