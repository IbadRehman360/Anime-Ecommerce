"use client";
import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";
// import { FaGreaterThan } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CategoryCard from "./CategoryCard";

export default function Example() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevPage = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextPage = () => {
    if (currentSlide < 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const visibleData = callouts.slice(currentSlide * 5, (currentSlide + 1) * 5);
  return (
    <div className="pt-10 pb-4 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-16">
      <div className="">
        <div className="border-gray-200">
          <div className="text-center">
            <div className="  flex items-center justify-between">
              <h2 className="mx-auto flex justify-center items-center font-montserrat  pl-4 sm:pl-28 text-[1.7rem] tracking-wide leading-9 font-extrabold sm:text-[2.2rem] lg:text-[2.6rem] uppercase sm:pb-2 lg:pb-2 text-gray-900">
                SHOP BY ANIME
              </h2>
              <Link href={"/all-products"}>
                <div className=" items-center md:flex hidden gap-2">
                  <span className="font-poppins mr-1">Discover All</span>
                  <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
                    <a onClick={handleNextPage} href="#" className="">
                      <MdKeyboardArrowRight />
                    </a>
                  </div>
                </div>
              </Link>
              <div className="sm:hidden mr-1.5 mb-1">
                {currentSlide < 1 && (
                  <div className="rounded-full border-[1px] border-black bg-white p-0.5 shadow-sm">
                    <a
                      onClick={handleNextPage}
                      href="#mbTrendingGiftCardsSlide2"
                      className=""
                    >
                      <MdKeyboardArrowRight />
                    </a>
                  </div>
                )}
                {currentSlide > 0 && (
                  <div className="rounded-full border-[1px] border-black bg-white p-1 shadow-sm">
                    <a
                      onClick={handlePrevPage}
                      href="#mbTrendingGiftCardsSlide1"
                      className=""
                    >
                      <MdKeyboardArrowLeft />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 bg-[#fdfdfd]">
          <div className="carousel-center mx-2   hidden w-full gap-x-4 rounded-lg lg:carousel">
            <div
              id="trendingGiftCardsSlide1"
              className="carousel-item   w-full gap-2  xl:gap-4"
            >
              {visibleData.slice(0, 5).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
            <div
              id="trendingGiftCardsSlide2"
              className="carousel-item w-full gap-4 sm:gap-5 lg:gap-8"
            >
              {visibleData.slice(0, 5).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
          </div>

          <div className="carousel hidden sm:flex  relative w-full gap-x-4 rounded-lg lg:hidden">
            <div
              id="mbTrendingGiftCardsSlide1"
              className="carousel-item w-full gap-1  sm:gap-2 md:gap-10"
            >
              {callouts.slice(0, 3).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
            <div
              id="mbTrendingGiftCardsSlide2"
              className="carousel-item w-full    gap-1 sm:gap-5 md:gap-10"
            >
              {callouts.slice(3, 6).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
          </div>

          <div className="carousel    relative w-full gap-x-4 rounded-lg sm:hidden">
            <div
              id="mbTrendingGiftCardsSlide1"
              className="carousel-item w-full gap-1  sm:gap-5 md:gap-10"
            >
              {callouts.slice(0, 2).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
            <div
              id="mbTrendingGiftCardsSlide2"
              className="carousel-item w-full    gap-1 sm:gap-5 md:gap-10"
            >
              {callouts.slice(2, 4).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
            <div
              id="mbTrendingGiftCardsSlide3"
              className="carousel-item w-full    gap-1 sm:gap-5 md:gap-10"
            >
              {callouts.slice(4, 6).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
            <div
              id="mbTrendingGiftCardsSlide4"
              className="carousel-item w-full    gap-1 sm:gap-5 md:gap-10"
            >
              {callouts.slice(6, 8).map((Anime) => (
                <CategoryCard key={Anime.id} Anime={Anime} />
              ))}
            </div>
          </div>

          <div className="mt-2 flex  font-opensans   justify-center text-xs sm:mt-4 md:mt-6">
            <p
              className="text-[0.97rem] pt-2 pb-3 sm:text-[1rem] md:hidden"
              style={{ letterSpacing: "0.1em" }}
            >
              {currentSlide < 1 ? "1/4" : "2/2"}
            </p>
            <div className="hidden justify-center md:flex">
              <a
                href="#trendingGiftCardsSlide1"
                onClick={handlePrevPage}
                className={`mr-1 block h-[5px] w-[28px] rounded-2xl ${
                  currentSlide === 0 ? "bg-[#f03827]" : "bg-[#888888]"
                } `}
                id="prevPage"
              />
              <a
                href="#trendingGiftCardsSlide2"
                onClick={handleNextPage}
                className={`mr-1 block h-[5px] w-[28px] rounded-2xl ${
                  currentSlide === 1 ? "bg-[#f03827]" : "bg-[#888888]"
                } `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// <div className="mx-auto  sm:px-6 lg:px-8   ">
//   <div className="flex gap-2 sm:gap-4 mt-6   sm:mt-8 md:mt-10 mb-5 mr-2 pl-2 overflow-x-auto">
//     {callouts.slice(0, 5).map((callout, index) => (
//       <Link
//         href={callout.path}
//         key={callout.name + 20}
//         className="flex-none    shadow-2xl border-black border relative callout"
//       >
//         <div className="relative overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
//           <Image
//             src={callout.imageSrc}
//             width={200}
//             height={200}
//             alt={callout.imageAlt}
//             className="custom-animation w-full h-[16rem] sm:h-[22rem] object-fill    img-hover-effect"
//           />

//           <div className="absolute inset-0 bg-black opacity-30 hover:opacity-10"></div>

//           <div className="absolute bottom-0 font ml-3 mb-5 sm:mb-8 text-white">
//             <p className="mb-4 text-[0.9rem] md:text-lg  uppercase tracking-widest font-satoshi">
//               {callout.name}
//             </p>
//             <div className="flex justify-center border-4 px-2 sm:px-6 bg-white text-black border-white py-1 sm:py-1.5 lg:py-2">
//               <Link
//                 href="#"
//                 className="flex text-center font-cabin tracking-widest text-gray-500 text-xs"
//               >
//                 SHOP NOW
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Link>
//     ))}
//   </div>

//   <div className="flex gap-2 sm:gap-4 mt-6  sm:justify-center  sm:items-center   sm:mt-8 md:mt-10 mb-5 mr-2 pl-2 overflow-x-auto">
//     {callouts.slice(4, 8).map((callout, index) => (
//       <Link
//         href={callout.path}
//         key={callout.name + index + 10 + 20}
//         className="flex-none   shadow-2xl border-black border relative callout"
//       >
//         <div className=" ">
//           <Image
//             src={callout.imageSrc}
//             width={250}
//             height={250}
//             alt={callout.imageAlt}
//             className="custom-animation w-full h-[16rem] sm:h-[21rem]   object-fill img-hover-effect"
//           />
//           <div className="absolute inset-0 bg-black opacity-30  hover:opacity-10"></div>

//           <div className="absolute bottom-0   font  ml-3 mb-5 sm:mb-8    text-white">
//             <p className="mb-4 text-[0.9rem] md:text-lg uppercase tracking-widest font-satoshi    ">
//               {" "}
//               {callout.name}
//             </p>
//             <div className="flex justify-center border-4 px-2 sm:px-6 bg-white text-black  border-white py-1 sm:py-1.5 lg:py-2">
//               <Link
//                 href="#"
//                 className="  flex text-center    font-cabin tracking-widest text-gray-500       text-xs  "
//               >
//                 SHOP NOW
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Link>
//     ))}
//   </div>
// </div>
// const products = [
//   "Bracelet",
//   "Necklace",
//   "Clothes",
//   "Hoodie",
//   "T-shirt",
//   "Keychain",
//   "Earrings",
//   "Ring",
//   "Wallet",
//   "Figurines",
//   "Manga",
//   "Stickers and Decals",
//   "Cosplay Costumes",
//   "Plush Toys",
//   "Accessories",
// ];
// const handleCreateProducts = async () => {
//   try {
//     const response = await fetch("api/createProducts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({}),
//     });

//     if (response.status === 201) {
//       console.log("Product created successfully");
//     } else {
//       console.error("Failed to create a product");
//     }
//   } catch (error) {
//     console.error("An error occurred while creating a product:", error);
//   }
// };
// const handleCreateProduct = async () => {
//   try {
//     for (const anime of products) {
//       const response = await fetch("/api/category", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title: anime }),
//       });

//       if (response.status === 201) {
//         console.log(`Added anime: ${anime}`);
//       } else {
//         console.error(`Failed to add anime: ${anime}`);
//       }
//     }
//   } catch (error) {
//     console.error("An error occurred while adding anime", error);
//   }
// };
{
  /* <div className="mt-2 bg-black">
        <button onClick={handleCreateProduct}>Create New Product</button>
      </div> */
}
{
  /* <div className="mt-2">
        <button onClick={handleCreateProducts}>Create New Product</button>{" "}
      </div> */
}
{
  /* <div className="mt-16 flex items-center justify-center">
        <button className="flex items-center text-white font-bold  md:text-lg space-x-2 bg-[#1f1f1f] hover:bg-[#4c4b4b] px-4 py-2 rounded">
          <span className="text-center">SHOP ALL</span>
          <FaArrowRight />
        </button>
      </div> */
}

var callouts = [
  {
    name: "Baruto",
    description: "Work from home accessories",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",
    path: "/category/654cc5ce72d1fa8b7fc130f3",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Code Grease",
    description: "Journals and note-taking",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/OWM2JQXCRU_003_78f4367b-68c1-496a-a45e-05f25fb740c3_750x960_crop_center.jpg?v=1700133310",
    path: "/category/654cc5ce72d1fa8b7fc130f3",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Naruto",
    path: "/category/654cc5ce72d1fa8b7fc130f3",
    description: "Daily commute essentials",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Food War",
    path: "/category/654cc5ce72d1fa8b7fc130f3",
    description: "Daily commute essentials",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Berserk",
    path: "/category/654cc5ce72d1fa8b7fc130f3",
    description: "Daily commute essentials",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/OWM2JQXCRU_003_78f4367b-68c1-496a-a45e-05f25fb740c3_750x960_crop_center.jpg?v=1700133310",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Attack on Titans",
    description: "Daily commute essentials",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    path: "/category/654cc5d172d1fa8b7fc13105",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Half City",
    description: "Daily commute essentials",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    path: "/category/654cc5d172d1fa8b7fc13105",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "One Piece",
    description: "Daily commute essentials",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    path: "/category/654cc5d172d1fa8b7fc13105",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Death Note",
    description: "Daily commute essentials",
    path: "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Jujustsu Kaisen",
    description: "Daily commute essentials",
    path: "/category/654cc5d172d1fa8b7fc13105",
    imageSrc:
      "https://atsuko.com/cdn/shop/files/BPA67ZJONP_003_d01c90ca-6eaa-41f3-8cef-fcb0f1aa3c97_750x960_crop_center.jpg?v=1700133123&quot",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
