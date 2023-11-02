import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import Star from "./Star";
import { AiOutlineClose } from "react-icons/ai";

const ReviewSection = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

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
              <Star />
              <p className="mb-1 text-[0.9rem]  lg:ml-4 ml-1 mt-2 lg:mt-0 md:text-[1rem] font- tracking-wider font-satoshi">
                Be the first to write a review
              </p>
            </div>
            <button
              className="border-black border w-full md:w-40 p-1 rounded"
              onClick={handleWriteReviewClick}
            >
              Write a review
            </button>
          </div>
        </>
      )}

      {showReviewForm ? (
        <>
          <div className="flex justify-between">
            <p className="text-[0.9rem] text-black    tracking-wider font-satoshi">
              Be the first to write a review
            </p>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="text-lg -mt-2 text-black   font-extrabold tracking-wider font-satoshi"
            >
              <AiOutlineClose />
            </button>
          </div>

          <ReviewForm />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReviewSection;
