import LatestDropDisplay from "./DisplayProducts";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
export default async function MustHave({ products }) {
  const product = products.slice(0, 8);
  return (
    <article className="  pt-12 pb-6     sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-16    mx-auto   px-2 sm:px-6 lg:px-8 ">
      <div className="text-center   pb-6 md:pb-10">
        <h3 className="font-montserrat text-[1.7rem]     leading-9  font-extrabold sm:text-[2.2rem] lg:text-[2.6rem] uppercase text-center  justify-center  tracking-wider flex  text-gray-900  ">
          Bestselling Products
        </h3>
      </div>
      <div className="grid grid-cols-2 pt-6 md:gap-12  gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {product.map((prod) => (
          <LatestDropDisplay key={prod.id} products={prod} />
        ))}
      </div>
      <Link
        href="/category/all-products"
        className="mt-10 flex items-center justify-center"
      >
        <button className="flex items-center text-white font-montserrat  mt-4 space-x-2 bg-[#1f1f1f] hover:bg-[#4c4b4b] px-4 py-2 rounded">
          <span className="text-center">VIEW MORE</span>
          <FaArrowRight />
        </button>
      </Link>
    </article>
  );
}
