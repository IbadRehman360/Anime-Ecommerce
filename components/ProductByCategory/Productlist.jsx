function Productlist({ products }) {
  return (
    <section
      aria-labelledby="product-heading"
      className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
    >
      <h2 id="product-heading" className="sr-only">
        Products
      </h2>

      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="group relative bg-white  rounded-lg flex flex-col overflow-hidden"
          >
            <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
              <img
                src={product.images}
                className="w-full h-full object-center object-cover sm:w-full sm:h-full"
              />
            </div>
            <div className="p-4 space-y-2 flex flex-col ">
              <h3 className="text-base font-semibold text-center text-gray-900 ">
                <a href="#" className="hover:underline  ">
                  {product.title}
                </a>
              </h3>
              <p className="text-xs italic text-gray-500 text-center">
                Colors : {product.colors.length} | Sizes :{" "}
                {Object.values(product.sizes).filter((size) => size).length}
              </p>

              <div className=" flex justify-center  text-center mt-auto">
                <p
                  className="    font-satoshi  tracking-wide     text-red-500"
                  style={{ fontWeight: 500 }}
                >
                  {product.discount_price
                    ? `Rs ${product.discount_price.toFixed(2)}`
                    : `Rs ${product.price.toFixed(2)}`}
                </p>
                {product.discount_price && (
                  <p className="text-sm  mt-[1.5px] ml-2.5 tracking-wide text-gray-500 line-through">
                    Rs {product.price.toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productlist;
