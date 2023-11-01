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
        <h2 className="text-[1.2rem] mb-4 sm:text-[1.7rem] flex text-gray-800 font-nunito">
          BUY IT WITH{" "}
        </h2>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-4 items-center justify-center">
        {FakeProduct.slice(0, 3).map((product, index) => (
          <DisplayProducts products={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
