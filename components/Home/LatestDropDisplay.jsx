export default function LatestDropDisplay({ products }) {
  return (
    <div className="bg-white w-full ">
      <div className="mx-auto w-full     ">
        <div key={products?.id} className="group relative">
          <div className=" h-80">
            <img
              src={products?.imageSrc}
              alt={products?.imageAlt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={products?.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {products?.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{products?.color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">
              {products?.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
