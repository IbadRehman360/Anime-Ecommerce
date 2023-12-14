"use client";
import { classNames } from "@app/product/[id]/page";
import { StarIcon } from "@heroicons/react/20/solid";

function ProductInfo({ product, reviews }) {
  const reviewRatings = reviews.map((review) => review.rating);
  const totalRatings = reviewRatings.length;
  const sumRatings = reviewRatings.reduce((sum, rating) => sum + rating, 0);

  const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;
  return (
    <div className=" ">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-xl lg:line-clamp-1 xl:line-clamp-2 line-clamp-2    uppercase mb lg:mb-4  lg:text-2xl  xl:text-3xl lg:mt-2 font-montserrat  text-gray-800 sm:text-2xl">
          {product.title}
        </h1>
      </div>
      <div className="mt-2 sm:mt-4 lg:row-span-3 pb-1.5 lg:mt-0 ">
        <h2 className="sr-only">Product information</h2>
        <div className="flex items-center ">
          {product.discount_price ? (
            <>
              <div className="text-[1.1rem]   font-inter  lg:text-[1.4rem] mr-3 xl:mr-5 tracking-wider lg:tracking-wider  text-green-700 ">
                <span className="tracking-normal text-[1.4rem] xl:text-[1.6rem]  ">
                  {" "}
                  Rs. {product.discount_price}.00
                </span>
              </div>

              <div className="font-satoshi line-through tracking-wider  lg:flex hidden lg:text-[1.1rem] xl:text-[1.2rem] text-sm text-gray-500">
                <span className="tracking-normal mr-1">
                  {" "}
                  Rs. {product.price}.00
                </span>
              </div>
            </>
          ) : (
            <div className="text-[1.3rem] sm:text-[1.4rem]   font-inter  lg:text-[1.5rem]   mr-3 mb-0.5 tracking-wider lg:tracking-wider  text-green-700  ">
              <span className="tracking-normal lg:text-[1.5rem] mr-1">
                {" "}
                Rs.
              </span>
              {product.price}
              <span className="hidden sm:inline-flex">.00</span>
            </div>
          )}
          <div className="flex items-center -mt-[6px]   ml-auto">
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
                    "h-[19px] w-[19px] lg:w-[24px] lg:h-[24px] xl:h-[28px] flex-shrink-0 transition-colors duration-300 ease-in-out"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="sr-only">{averageRating} out of 5 stars</p>
            <a
              href={reviews.href}
              className="ml-2 text-sm sm:text-s lg:text-[1rem] font-medium text-indigo-700 hover:text-indigo-500"
            >
              {reviews.length} reviews
            </a>
          </div>
        </div>
      </div>
      {product.discount_price && (
        <div className="     font-poppins  text-[1.1rem] lg:hidden flex line-through tracking-wider lg:text-[1.6rem]     text-gray-700">
          <span className="tracking-normal mr-1"> Rs.</span>
          {product.price}.00{" "}
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
