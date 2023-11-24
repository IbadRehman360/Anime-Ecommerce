"use client";
import { classNames } from "@app/product/[id]/page";
import { StarIcon } from "@heroicons/react/20/solid";

function ProductInfo({ product, reviews }) {
  const reviewRatings = reviews.map((review) => review.rating);
  const totalRatings = reviewRatings.length;
  const sumRatings = reviewRatings.reduce((sum, rating) => sum + rating, 0);

  const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;
  return (
    <div>
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-xl   uppercase mb-2 lg:mb-4  lg:text-3xl font-montserrat  text-gray-800 sm:text-3xl">
          {product.title}
        </h1>
      </div>

      <div className="mt-4 lg:row-span-3 pb-1.5 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <div className="flex items-center">
          {product.discount_price ? (
            <>
              <div className="text-[1.1rem]    font-lato  lg:text-[1.4rem] mr-5 tracking-wider lg:tracking-wider lg:text-green-700 text-gray-900">
                <span className="tracking-normal lg:text-[1.4rem] mr-1">
                  {" "}
                  Rs. {product.discount_price}.00
                </span>
              </div>
              <div className="font-satoshi line-through tracking-wider lg:flex hidden lg:text-[1rem] text-sm text-gray-500">
                <span className="tracking-normal mr-1">
                  {" "}
                  Rs. {product.price}.00
                </span>
              </div>
            </>
          ) : (
            <div className="text-[1.1rem]    font-lato  lg:text-[1.4rem] mr-5 tracking-wider lg:tracking-wider lg:text-green-700 text-gray-900">
              <span className="tracking-normal lg:text-[1.4rem] mr-1">
                {" "}
                Rs.
              </span>
              {product.price}.00
            </div>
          )}

          <div className="flex items-center -mt-[6px] lg:mr-6 ml-auto">
            <div className="flex mb-[1px] cursor-pointer justify-end items-end">
              {[...Array(5).keys()].map((index) => (
                <StarIcon
                  key={index}
                  className={classNames(
                    averageRating >= index + 1
                      ? "text-yellow-500"
                      : averageRating >= index + 0.75
                      ? "text-yellow-500"
                      : averageRating >= index + 0.5
                      ? "text-yellow-500"
                      : averageRating >= index + 0.25
                      ? "text-yellow-500"
                      : "text-gray-200",
                    "h-[19px] w-[19px] lg:w-[24px] lg:h-[24px] flex-shrink-0 transition-colors duration-300 ease-in-out"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="sr-only">{averageRating} out of 5 stars</p>
            <a
              href={reviews.href}
              className="ml-2 text-xs sm:text-sm font-medium text-indigo-700 hover:text-indigo-500"
            >
              {reviews.length} reviews
            </a>
          </div>
        </div>
      </div>

      <div className="  font-satoshi lg:hidden flex line-through tracking-wider lg:text-[1.2rem]  text-sm     text-gray-500">
        <span className="tracking-normal mr-1"> Rs.</span>
        {product.discount_price}.00
      </div>
    </div>
  );
}

export default ProductInfo;
