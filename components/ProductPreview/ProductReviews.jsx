"use client";
import { classNames } from "@app/product/[id]/page";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProductReviews({ reviews }) {
  const reviewsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalReviews = reviews.length;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  const handleShowMore = (e) => {
    e.preventDefault();
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleShowLess = (e) => {
    e.preventDefault();
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const handlePageClick = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const startIdx = (currentPage - 1) * reviewsPerPage;
  const endIdx = startIdx + reviewsPerPage;

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <div>
        <div>
          {reviews.slice(startIdx, endIdx).map((review, reviewIdx) => (
            <div
              key={review._id}
              className="flex items-start text-sm text-gray-600 border-b border-gray-200 pt-4 pb-6"
            >
              <div className="flex-none mr-4   ">
                <div className="w-10 h-10 bg-gray-100 font-roboto rounded-full flex items-center justify-center text-gray-600 text-lg">
                  {review.user_id.username.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="flex-1 -mt-1 ">
                <h3 className="font-semibold  tracking-wide text-gray-800 ">
                  {review.user_id.username}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center flex-grow">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating
                            ? "text-yellow-500 fill-current"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-[0.85rem] text-gray-500 mb-2  ">
                    <time>{formatDate(review.createdAt)}</time>
                  </p>
                </div>

                <div className="prose prose-sm max-w-none font-satoshi tracking-wide  text-gray-600">
                  <p dangerouslySetInnerHTML={{ __html: review.review_text }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
          <div className="-mt-px w-0 flex-1 flex">
            {currentPage > 1 && (
              <button
                onClick={handleShowLess}
                className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                <ArrowLeftIcon
                  className="mr-3 h-5 w-4 text-gray-400"
                  aria-hidden="true"
                />
                Previous
              </button>
            )}
          </div>
          <div className="hidden md:-mt-px md:flex">
            {Array.from({ length: totalPages }).map((_, index) => (
              <a
                key={index + 1}
                href="#"
                onClick={(e) => handlePageClick(index + 1, e)}
                className={`border-transparent ${
                  currentPage === index + 1
                    ? "text-indigo-600 border-indigo-500"
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
              >
                {index + 1}
              </a>
            ))}
          </div>
          <div className="-mt-px w-0 flex-1 flex justify-end">
            {currentPage < totalPages && (
              <button
                onClick={handleShowMore}
                className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Next
                <ArrowRightIcon
                  className="ml-3 h-5 w-4  text-gray-400"
                  aria-hidden="true"
                />
              </button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
