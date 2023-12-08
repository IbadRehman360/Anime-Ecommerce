"use client";
import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";
// import { FaGreaterThan } from "react-icons/fa6";
import Image from "next/image";

const callouts = [
  {
    name: "Full Metal Alchemist",
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
    imageSrc: "https://i.ebayimg.com/images/g/EWEAAOSwXT9iHBcT/s-l1600.jpg",
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
    imageSrc: "https://i.ebayimg.com/images/g/EWEAAOSwXT9iHBcT/s-l1600.jpg",

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

export default function Example() {
  return (
    <div className="pt-10 pb-4 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-16">
      <div className="">
        <div className="border-gray-200">
          <div className="text-center ">
            <h2 className="  font-montserrat text-[1.7rem] tracking-wide    leading-9  font-extrabold sm:text-[2.2rem] lg:text-[2.6rem] uppercase sm:pb-2 lg:pb-2 text-gray-900">
              SHOP BY ANIME
            </h2>
          </div>
        </div>
        <div className="mx-auto  sm:px-6 lg:px-8   ">
          <div className="flex gap-2 sm:gap-4 mt-6   sm:mt-8 md:mt-10 mb-5 mr-2 pl-2 overflow-x-auto">
            {callouts.slice(0, 5).map((callout, index) => (
              <Link
                href={callout.path}
                key={callout.name + 20}
                className="flex-none   w-[calc(55%-0.6rem)]  sm:w-[calc(52%-1rem)] md:w-[calc(34%-1rem)] lg:w-[calc(25.2%-1rem)] xl:w-[calc(20%-1.5rem)] shadow-2xl border-black border relative callout"
              >
                <div className="relative overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                  <Image
                    src={callout.imageSrc}
                    width={200}
                    height={200}
                    alt={callout.imageAlt}
                    className="custom-animation w-full h-[16rem] sm:h-[22rem] object-cover    img-hover-effect"
                  />

                  <div className="absolute inset-0 bg-black opacity-30 hover:opacity-10"></div>

                  <div className="absolute bottom-0 font ml-3 mb-5 sm:mb-8 text-white">
                    <p className="mb-4 text-[0.9rem] md:text-lg  uppercase tracking-widest font-satoshi">
                      {callout.name}
                    </p>
                    <div className="flex justify-center border-4 px-2 sm:px-6 bg-white text-black border-white py-1 sm:py-1.5 lg:py-2">
                      <Link
                        href="#"
                        className="flex text-center font-cabin tracking-widest text-gray-500 text-xs"
                      >
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex gap-2 sm:gap-4 mt-10 mb-5  mr-2 pl-2 overflow-x-auto">
            {callouts.slice(4, 8).map((callout, index) => (
              <Link
                href={callout.path}
                key={callout.name + index + 10 + 20}
                className="flex-none   w-[calc(54.5%-0.6rem)] sm:w-[calc(52%-1rem)]  lg:w-[calc(34%-1rem)] xl:w-[calc(25%-1.5rem)] shadow-2xl border-black border relative callout"
              >
                <div className=" ">
                  <Image
                    src={callout.imageSrc}
                    width={250}
                    height={250}
                    alt={callout.imageAlt}
                    className="custom-animation w-full h-[16rem] sm:h-[21rem] object-contain img-hover-effect"
                  />
                  <div className="absolute inset-0 bg-black opacity-30  hover:opacity-10"></div>

                  <div className="absolute bottom-0   font  ml-3 mb-5 sm:mb-8    text-white">
                    <p className="mb-4 text-[0.9rem] md:text-lg uppercase tracking-widest font-satoshi    ">
                      {" "}
                      {callout.name}
                    </p>
                    <div className="flex justify-center border-4 px-2 sm:px-6 bg-white text-black  border-white py-1 sm:py-1.5 lg:py-2">
                      <Link
                        href="#"
                        className="  flex text-center    font-cabin tracking-widest text-gray-500       text-xs  "
                      >
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
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
