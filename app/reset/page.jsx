"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "@components/SignResgister/InputField";
import PasswordStrengthBar from "react-password-strength-bar";

const ForgotPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();
  const [message, setMessage] = useState("");
  const password = watch("password");
  const [error, setError] = useState("");
  const [isError, setPassowrdError] = useState("");

  watch();
  const handleResetPassword = async (data) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const response = await fetch("/api/reset", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Password reset successful for ${data.email}`);
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.message}`);
    }
  };

  return (
    <div className="pb-14 pt-6 lg:pt-14 lg:pb-20 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mt-8 mb-4">
          Password Recovery
        </h1>
        <p className="text-sm text-gray-600 text-center font-poppins mb-6">
          Create a strong password for your account.
        </p>
        <form
          className="gap-2 grid"
          onSubmit={handleSubmit(handleResetPassword)}
        >
          <InputField
            label="Password"
            id="password"
            name="password"
            control={control}
            error={errors.password}
            type="password"
          />

          <InputField
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            control={control}
            error={errors.confirmPassword}
            type="password"
          />
          <div className="mt-2 ">
            <PasswordStrengthBar
              password={password}
              scoreWordClassName="capitalize"
            />
          </div>
          {error && (
            <div className="bg-red-500 text-white opacity-95 hover:opacity-90` w-fit text-sm py-1 px-3 rounded-md  ">
              {error}
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white w-fit -mt-1 opacity-95 hover:opacity-90 text-sm py-1 px-3 rounded-md  ">
              {isError}
            </div>
          )}
          <div>
            <button
              type="submit"
              className="flex mt-2 mb-4 w-full justify-center rounded-md tracking-wider bg-black hover:opacity-90 opacity-95 px-3 py-2.5 text-[0.85rem] font-bold text-opacity-95 uppercase leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

export default ForgotPassword;
