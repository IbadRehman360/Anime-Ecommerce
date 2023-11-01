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
    <div className=" border  py-8 px-4 text-black  ">
      {!showReviewForm && (
        <>
          <h2 className="text-lg mb-4 text-gray-700    font-montserrat">
            Customer Reviews
          </h2>
          <Star />
          <p className=" mb-1 text-[0.9rem] tracking-wider font-satoshi ">
            Be the first to write a review
          </p>
        </>
      )}

      {showReviewForm ? (
        <>
          <div className="flex justify-between">
            <p className="text-[0.9rem] text-black tracking-wider font-satoshi">
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
        <button
          className="  border-black border  w-full  p-1  rounded  "
          onClick={handleWriteReviewClick}
        >
          Write a review
        </button>
      )}
    </div>
  );
};

export default ReviewSection;
