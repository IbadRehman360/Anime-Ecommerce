import LatestDropDisplay from "./LatestDropDisplay";

function TrendingProduct() {
  return (
    <div className=" border-gray-200 ">
      <h2 className="  font-bungee  text-3xl lg:text-4xl tracking-wider font-semibold leading-6 text-center mt-10 lg:mt-12  text-gray-900">
        Trending Product{" "}
      </h2>
      <LatestDropDisplay />
    </div>
  );
}

export default TrendingProduct;
