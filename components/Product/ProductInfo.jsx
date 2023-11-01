import { classNames } from "@app/products/page";
import { StarIcon } from "@heroicons/react/20/solid";

function ProductInfo({ product, reviews }) {
  return (
    <div>
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-xl mt-5 mb-2   lg:text-3xl font-montserrat  text-gray-800 sm:text-3xl">
          {product.name}
        </h1>
      </div>

      <div className="mt-4 lg:row-span-3  pb-1.5 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <div className=" flex justify-between">
          <div className=" text-[1.1rem]    font-poppins  lg:text-[1.45rem]   tracking-wide lg:tracking-wider lg:text-green-700    text-gray-900">
            <span className="tracking-normal   lg:text-[1.5rem]    mr-1 ">
              {" "}
              Rs.
            </span>
            {product.price}.00
          </div>

          <div className="flex items-center -mt-[6px] lg:mr-6 ">
            <div className="flex  mb-[1px]   justify-end items-end">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    reviews.average > rating
                      ? "text-gray-900"
                      : "text-gray-200",
                    "h-[19px] w-[19px] lg:w-[24px] lg:h-[24px]  flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{reviews.average} out of 5 stars</p>

            <a
              href={reviews.href}
              className="ml-2 text-xs sm:text-sm  font-medium text-indigo-700 hover:text-indigo-500"
            >
              {reviews.totalCount} reviews
            </a>
          </div>
        </div>
      </div>
      <div className="  font-satoshi line-through tracking-wider lg:text-[1.2rem]  text-sm     text-gray-500">
        <span className="tracking-normal   ]  mr-1"> Rs.</span>
        {product.discountedPrice}.00
      </div>
    </div>
  );
}

export default ProductInfo;
