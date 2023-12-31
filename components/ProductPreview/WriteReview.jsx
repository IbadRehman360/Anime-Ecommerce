"use client";
import toast from "react-hot-toast";

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
    <div className="    border py-8 px-5   lg:mt-10   text-black pb-8   middle none center        font-sans text-xs font-bold uppercase     focus:shadow-none active:opacity-[0.9] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg bg-white ">
      {!showReviewForm && (
        <>
          <h2 className=" mb-4 lg:text-xl  opacity-90  text-black text-lg     tracking-wide   font-inter">
            Customer Reviews
          </h2>
          <div className="md:flex justify-between">
            <div className="lg:flex lg:items-center  ">
              <div className={`flex items-center -mt-[6px]`}>
                <div className={`flex mb-[1px] justify-end items-end`}>
                  {[1, 2, 3, 4, 5].map((starRating) => (
                    <StarIcon
                      key={starRating}
                      className={`h-6 w-6 lg:w-6 lg:h-6 flex-shrink-0 cursor-pointer  text-gray-300 `}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>{" "}
              <p className="mb-1.5 text-[0.9rem]     opacity-95  text-black font-inter lg:ml-4 ml-1 mt-2 lg:mt-0 md:text-[1rem]     tracking-wider ">
                {reviews.length
                  ? "Submit a Review"
                  : "Be the first to write a review"}
              </p>
            </div>
            {!session ? (
              <Link
                href={"/login"}
                className="border-black border     opacity-95  text-black  h-8 text-center items-center justify-center flex  md:h-9 mt-4 md:mt-0 w-full md:w-40 p-1 rounded"
              >
                Write a review
              </Link>
            ) : (
              <button
                onClick={handleWriteReviewClick}
                className="border-black border     opacity-95  text-black  h-8 text-center items-center justify-center flex  md:h-9 mt-4 md:mt-0 w-full md:w-40 p-1 rounded"
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
            <p className="text-[0.9rem] text-black uppercase     tracking-wider   font-satoshi">
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
