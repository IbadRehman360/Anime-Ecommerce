"use client";
import { useState } from "react";

const { default: Login } = require("./Login");
const { default: Register } = require("./Register");
function LoginRegistertion() {
  const [isCurrently, setIsCurrently] = useState(true);

  return (
    <div className="grid grid-cols-1 items-center justify-center    bg-gray-50 py-8 pb-20 md:py-28 md:grid-cols-2">
      <div className="  border-r-2 opacity-90  ">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md md:px-6 px-4 ">
          <h2 className="text-3xl font-extrabold leading-9   uppercase text-center text-gray-900">
            {isCurrently ? "LOGIN" : "REGISTER"}
          </h2>
          <p className="text-center  text-sm lg:text-[1rem] mt-4 mb-6 font-medium text-gray-500">
            Please enter your e-mail and password:
          </p>
          {isCurrently ? <Login /> : <Register />}
        </div>
      </div>
      <div className="relative py-12 md:hidden">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-black" />
        </div>
        <div className="relative flex justify-center text-sm leading-6">
          <span className="   text-gray-900 font-bungee">Or continue with</span>
        </div>
      </div>
      <div className=" opacity-90 -mt-0  sm:px-10 px-5 2xl:px-20  ">
        <div>
          <h2 className="text-3xl font-extrabold leading-9 uppercase text-center text-gray-900">
            {isCurrently ? "REGISTER" : "SIGN IN"}
          </h2>
        </div>
        <div className="mt-6 text-center">
          {isCurrently ? (
            <p className="text-gray-600  text-[0.8rem] lg:text-[1rem]  tracking-wide leading-6">
              Registering up on our website grants you instant access to your
              order status and complete order history. Just provide the
              requested information below, and we'll swiftly establish your new
              account. Rest assured, we'll only request the essential details to
              expedite and simplify your future purchases.
            </p>
          ) : (
            <p className="text-gray-600 text-[0.9rem] lg:text-[1rem]       xl:w-[60vh] mx-auto text-center tracking-wide leading-6">
              Sign in to your account to access your order status and order
              history. Enter your login credentials below to continue shopping.
            </p>
          )}
        </div>

        <div className="mt-8 flex justify-center items-center">
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
  );
}

export default LoginRegistertion;
