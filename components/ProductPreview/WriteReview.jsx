"use client";

import { useState } from "react";
import ReviewForm from "./ReviewForm";
import { AiOutlineClose } from "react-icons/ai";
import { StarIcon } from "@heroicons/react/24/outline";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
export default function WriteReview({ reviews, product }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const { data: session } = useSession();
  const handleWriteReviewClick = () => {
    setShowReviewForm(!showReviewForm);
  };
  return (
    <div className=" border  py-8 lg:mt-10 px-6 text-black  ">
      {!showReviewForm && (
        <>
          <h2 className=" mb-4 lg:text-xl text-gray-800     tracking-wide   font-inter">
            Customer Reviews
          </h2>
          <div className="md:flex justify-between">
            <div className="lg:flex lg:items-center  ">
              <div className={`flex items-center -mt-[6px]`}>
                <div className={`flex mb-[1px] justify-end items-end`}>
                  {[1, 2, 3, 4, 5].map((starRating) => (
                    <StarIcon
                      key={starRating}
                      className={`h-5 w-5 lg:w-6 lg:h-6 flex-shrink-0 cursor-pointer  text-gray-300 `}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>{" "}
              <p className="mb-1 text-[0.9rem]   lg:ml-4 ml-1 mt-2 lg:mt-0 md:text-[1rem] font- tracking-wider font-satoshi">
                {reviews.length
                  ? "Submit a Review"
                  : "Be the first to write a review"}
              </p>
            </div>
            {!session ? (
              <Link
                href={"/login"}
                className="border-black border  text-center items-center justify-center flex  md:h-9 mt-4 md:mt-0 w-full md:w-40 p-1 rounded"
              >
                Write a review
              </Link>
            ) : (
              <button
                className="border-black border  text-center items-center justify-center flex  md:h-9 mt-4 md:mt-0 w-full md:w-40 p-1 rounded"
                onClick={handleWriteReviewClick}
              >
                Write a review
              </button>
            )}
          </div>
        </>
      )}

      {showReviewForm ? (
        <>
          <div className="flex justify-between">
            <p className="text-[0.9rem] text-black uppercase   tracking-wide    tracking-wider font-satoshi">
              {reviews.length
                ? "Submit a Review"
                : "Be the first to write a review"}
            </p>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="text-lg -mt-2 text-black   font-extrabold tracking-wider font-satoshi"
            >
              <AiOutlineClose />
            </button>
          </div>

          <ReviewForm
            product={product}
            reviews={reviews}
            setShowReviewForm={setShowReviewForm}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
