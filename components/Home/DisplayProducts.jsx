export default function LatestDropDisplay({ products }) {
  return (
    <article className="products-card   w-full">
      <div className="flex flex-col items-center">
        <div key={products?.id} className="w-full max-w-xs">
          <div className="products-image relative">
            <img
              src={products?.imageSrc}
              alt={products?.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="products-details mt-4">
            <h2 className="products-title font-semibold text-center">
              Attack on Titans Bracelet
            </h2>
            <p className="text-center font-medium mt-1">
              {products?.discountPrice ? (
                <span>
                  <span className="text-red-600">
                    Rs {products?.discountPrice.toFixed(2)}
                    <del className="text-gray-700 ml-2">
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
