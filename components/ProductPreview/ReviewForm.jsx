import React, { useState } from "react";
import Star from "./Star";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement the review submission logic here
    // Send the data to your server or perform any other necessary actions
    console.log("Review submitted:", { rating, reviewText, name, email });
  };

  return (
    <div className="bg-white w-full mt-5 rounded-lg  md:text-lg   ">
      <h6 className=" text-gray-900 mb-4 md:text-lg font-montserrat">
        BE THE FIRST TO REVIEW JOTARO REGULAR FIT T-SHIRT
      </h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex ">
          <label className="block mr-6 text-gray-900 text-sm  mb-2">
            Your rating
          </label>

          <Star />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm   mb-2">
            Your review
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            value={reviewText}
            onChange={handleReviewTextChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm  mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900 text-sm  mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button
          type="submit"
          className="bg-black  font-montserrat  uppercase text-xs  text-white py-2 px-5 rounded hover:bg-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
