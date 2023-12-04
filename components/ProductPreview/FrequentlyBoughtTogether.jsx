import DisplayProducts from "@components/Home/DisplayProducts";
import { BsPlus, BsPlusCircleDotted } from "react-icons/bs";

const FrequentlyBoughtTogether = ({ suggestions }) => {
  return (
    <div className=" lg:grid hidden ml-12  mt-10 2xl:mt-6 ">
      <div className="text-center">
        <h2 className="text-[1.2rem] 2xl:mt-5 mt-2   mb-4 sm:text-[1.2rem] flex text-gray-700 tracking-wider    font-inter">
          BUY IT WITH
        </h2>
      </div>

      <div className="xl:grid-cols-2 xl:grid hidden lg:grid-cols-2   mx-auto gap-4 items-center justify-center">
        {suggestions.slice(0, 2).map((product, index) => (
          <div key={index} className="flex items-center   ">
            <DisplayProducts width={40} products={product} />
            {index === 0 && (
              <span className="text-xl bg-stone-200 rounded-full z-50  ml-3 font-bold">
                <BsPlus />
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="     lg:grid  xl:hidden   lg:grid-cols-2   mx-auto gap-4 items-center justify-center">
        {suggestions.slice(0, 2).map((product, index) => (
          <DisplayProducts width={40} products={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
