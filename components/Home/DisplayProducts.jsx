export default function LatestDropDisplay({ products }) {
  return (
    <article className="products-card     w-full">
      <div className="flex flex-col items-center">
        <div className="products-image  ">
          <img
            src={products?.imageSrc}
            alt={products?.imageAlt}
            className="w-full h-full   object-cover"
          />

          <div className="products-details mt-3 md:mt-6">
            <h2 className="products-title text-sm lg:text-[1.15rem] font-cabin   font-medium text-center">
              Attack on Titans Bracelet
            </h2>
            <p className="text-center text-sm lg:text-[1.1rem]    font-medium mt-1 lg:mt-2">
              {products?.discountPrice ? (
                <span>
                  <span className="text-red-500">
                    Rs {products?.discountPrice.toFixed(2)}
                    <del className="text-gray-600 ml-3">
                      Rs {products?.price}
                    </del>{" "}
                  </span>
                </span>
              ) : (
                <span>Rs {products?.price?.toFixed(2)}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
