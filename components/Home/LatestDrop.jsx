import LatestDropRender from "./LatestDropRender";

async function LatestDrop({ products }) {
  return (
    <div className="pt-8 pb-6 sm:pb-8 lg:pb-10 mx-auto md:px-6 px-2 py-2 w-full">
      <div className="text-center pb-0.5">
        <h2 className="  font-montserrat text-[1.7rem]        overflow-hidden     leading-9  font-extrabold sm:text-[2.2rem] lg:text-[2.6rem] uppercase mb-1 text-gray-900  tracking-wide sm:tracking-wider text-center lg:mt-6">
          <span className="sm:block hidden"> OTAKU ACCESSORIES </span>{" "}
          <span className="sm:hidden text-center block">Otaku Essentials </span>
        </h2>
      </div>
      <LatestDropRender products={products} />
    </div>
  );
}

export default LatestDrop;
