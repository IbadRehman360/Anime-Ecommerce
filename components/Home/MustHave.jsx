import LatestDropDisplay from "./DisplayProducts";
import { FaArrowRight } from "react-icons/fa";

export default async function MustHave() {
  const products = await getProductsData();
  const product = products.slice(0, 8);
  return (
    <article className="  pt-12 pb-6     sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10    mx-auto   px-2 sm:px-6 lg:px-8 ">
      <div className="text-center   pb-6 md:pb-10">
        <h3 className="text-3xl uppercase font-montserratextra font-extrabold sm:text-[2.3rem] text-center  justify-center  tracking-wider flex text-black ">
          Bestselling Products
        </h3>
      </div>
      <div className="grid grid-cols-2 pt-6 md:gap-12  gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {product.map((prod) => (
          <LatestDropDisplay key={prod.id} products={prod} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button className="flex items-center text-white font-bold  md:text-lg space-x-2 bg-[#1f1f1f] hover:bg-[#4c4b4b] px-4 py-2 rounded">
          <span className="text-center">VIEW MORE</span>
          <FaArrowRight />
        </button>
      </div>
    </article>
  );
}
async function getProductsData() {
  const response = await fetch("http://localhost:3000/api/products");

  if (!response.ok) {
    throw new Error("failed to fetch users");
  }

  return await response.json();
}
