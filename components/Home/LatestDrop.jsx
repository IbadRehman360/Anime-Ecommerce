import LatestDropRender from "./LatestDropRender";

async function LatestDrop() {
  const products = await getProductsDataByOption();
  return (
    <div className="pt-8 pb-6 sm:pb-8 lg:pb-10 mx-auto md:px-6 px-2 py-2 w-full">
      <div className="text-center pb-0.5">
        <h2
          className="font-montserratextra text-[2rem] sm:text-[3rem] text-gray-900 tracking-wider text-center lg:mt-6"
          style={{ fontWeight: "900" }}
        >
          OTAKU ACCESSORIES
        </h2>
      </div>
      <LatestDropRender products={products} />
    </div>
  );
}

export default LatestDrop;

async function getProductsDataByOption() {
  try {
    const response = await fetch("http://localhost:3000/api/products", {
      next: { revalidate: 10 },
    });

    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch data (${error.message})`);
  }
}
