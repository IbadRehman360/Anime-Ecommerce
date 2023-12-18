"use client";

import { useState } from "react";
import Star from "./Star";
import { useSession } from "next-auth/react";
import { revalidateTag } from "next/cache";

const ReviewForm = ({ product, reviews, setShowReviewForm }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const { data: session } = useSession();
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/create-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          email: session.user.email,
          rating: rating,
          reviewText: reviewText,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Review submitted successfully ");
        setShowReviewForm(false);
        window.location.reload();
      } else {
        console.error("Error submitting review:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while submitting the review:", error);
    }
  };

  return (
    <div className="bg-white w-full   mt-5 rounded-lg md:text-lg">
      <h6 className="text-gray-900 mb-4 md:text-lg uppercase font-montserrat">
        {reviews
          ? `Write a review about ${product.title}`
          : `BE THE FIRST TO REVIEW ${product.title}`}
      </h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex">
          <label className="block mr-6 text-gray-900 text-sm mb-2">
            Your rating
          </label>
          <Star rating={rating} onClick={handleRatingChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm mb-2">
            Your review
          </label>
          <textarea
            className="w-full p-2 border text-[1.05rem]  font-satoshi border-gray-300 rounded"
            rows="4"
            value={reviewText}
            onChange={handleReviewTextChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black font-montserrat uppercase text-xs text-white py-2 px-5 rounded hover:bg-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
