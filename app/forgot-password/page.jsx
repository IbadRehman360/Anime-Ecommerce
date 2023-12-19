"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "@components/SignResgister/InputField";
const Reset = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setMessage(responseData.message);
      } else {
        console.error("Failed to reset password:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="pb-14 pt-6 lg:pt-14 lg:pb-20 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mt-8 mb-4">
          Password Recovery
        </h1>
        <p className="text-sm text-gray-600 text-center font-poppins mb-6">
          Enter your email to reset your password
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            name="email"
            id="email"
            control={control}
            label="Email"
            rules={{ required: "Email is required" }}
            error={errors.email}
            type="email"
          />

          <div>
            <button
              type="submit"
              className="flex mt-4 mb-4 w-full justify-center rounded-md tracking-wider bg-black hover:opacity-90 opacity-95 px-3 py-2.5 text-[0.85rem] font-bold text-opacity-95 uppercase leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
        {message && (
          <div className="text-center text-green-500 font-poppins">
            {message}
          </div>
        )}
        <a href="/reset">reset</a>
        <div className="text-center">
          <p className="text-sm font-poppins">
            Back to{" "}
            <a href="/login" className="text-cyan-600">
              Login
            </a>
          </p>
        </div>
        <p className="text-xs font-poppins text-gray-600 text-center mt-8">
          &copy; 2024 Senpai Merch Ltd
        </p>
      </div>
    </div>
  );
};
export default Reset;
