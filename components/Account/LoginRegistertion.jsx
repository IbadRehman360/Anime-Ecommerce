"use client";
import { useState } from "react";

const { default: Login } = require("./Login");
const { default: Register } = require("./Register");
function LoginRegistertion() {
  const [isCurrently, setIsCurrently] = useState(true);
  // <div className="absolute right-3 mt-4">
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     className="h-6 w-6 text-green-500"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     stroke="currentColor"
  //   >
  //     <path
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="2"
  //       d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  //     ></path>
  //   </svg>
  // </div>;
  return (
    <div className="grid grid-cols-1   md:grid-cols-2">
      <div className="relative py-12 md:hidden">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-black" />
        </div>
        <div className="relative flex justify-center text-sm leading-6">
          <span className="   text-gray-900 font-bungee">Or continue with</span>
        </div>
      </div>

      <div
        className=" h-full hidden md:flex   
       border-r  py-8 pb-20 md:py-28 flex-auto items-center justify-center p-10 overflow-hidden   text-white bg-no-repeat "
      >
        <div className="w-full max-w-md z-10">
          <h2 className="text-3xl   uppercase font-montserrat leading-9    text-center  text-black">
            {isCurrently ? "Login" : "REGISTER"}
          </h2>
          <div className="mt-6 text-center">
            {isCurrently ? (
              <p className="text-gray-600  text-[0.8rem] lg:text-[0.95rem]  tracking-wide leading-6">
                Registering up on our website grants you instant access to your
                order status and complete order history. Just provide the
                requested information below, and we&apos;ll swiftly establish
                your new account. Rest assured, we&apos;ll only request the
                essential details to expedite and simplify your future
                purchases.
              </p>
            ) : (
              <p className="text-gray-600 text-[0.9rem] lg:text-[1rem]       xl:w-[60vh] mx-auto text-center tracking-wide leading-6">
                Sign in to your account to access your order status and order
                history. Enter your login credentials below to continue
                shopping.
              </p>
            )}
          </div>
          <div />
          <div className="mt-8 flex justify-center  items-center">
            <button
              onClick={() => setIsCurrently((prev) => !prev)}
              className="inline-block px-6 py-3.5 text-xs  font-montserrat    tracking-wider bg-black text-white rounded hover:opacity-90 hover:underline"
            >
              {isCurrently ? (
                <span>New customer? Register</span>
              ) : (
                <span>Already have an account? Sign in</span>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="  border-r-2 opacity-90  py-8 pb-20 md:py-28  bg-white ">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md md:px-6 px-4 ">
          <h2 className="text-3xl  font-montserrat leading-9    text-center  text-black">
            {isCurrently ? "Welcome Back! " : " Register!"}
          </h2>
          <p className="text-center  text-sm lg:text-[1rem] mt-2 mb-6 font-medium text-gray-500">
            Please enter your e-mail and password:
          </p>
          {isCurrently ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
}

export default LoginRegistertion;
