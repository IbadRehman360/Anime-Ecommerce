import DisplayProducts from "@components/Home/DisplayProducts";
import ProductYouMayLike from "./ProductYouMayLike";
import FakeProduct from "@data/fakeProduct";

const FrequentlyBoughtTogether = () => {
  const smallImages = [
    "assets/latest/6.jpg",
    "assets/latest/5.jpg",
    "assets/latest/8.jpg",
  ];

  return (
    <div className="pt-20 lg:grid hidden ml-20">
      <div className="text-center">
        <h2 className="text-[1.2rem] mb-4 sm:text-[1.2rem] flex text-gray-800 tracking-wider    font-sourcesans">
          BUY IT WITH
        </h2>
      </div>
      <div className="  xl:grid-cols-3 xl:grid hidden    lg:grid-cols-2   mx-auto gap-4 items-center justify-center">
        {FakeProduct.slice(0, 3).map((product, index) => (
          <DisplayProducts products={product} key={index} />
        ))}
      </div>
      <div className="     lg:grid  xl:hidden   lg:grid-cols-2   mx-auto gap-4 items-center justify-center">
        {FakeProduct.slice(0, 2).map((product, index) => (
          <DisplayProducts products={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
