"use client";

import { useState } from "react";
import OrderDisplay from "./OrderDisplay";

const TrackOrder = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isOrderFound, setIsOrderFound] = useState(false);

  const handleTrackOrder = async () => {
    setIsOrderFound(!!trackingId);
    try {
      const response = await fetch("api/order-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (response.status === 201) {
        console.log("Product created successfully");
      } else {
        console.error("Failed to create a product");
      }
    } catch (error) {
      console.error("An error occurred while creating a product:", error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className=" border  shadow-lg">
          <div className="upper p-6 md:p-8">
            <div className="flex items-center bg-red-400 px-4 justify-between py-4 rounded-lg mb-6">
              <div className="  heading">
                <h5 className="font-bold font-poppins">Track Your Order</h5>
              </div>
              <div className="w-16">
                <img
                  className="img-fluid"
                  src="https://i.imgur.com/Rzjor3M.png"
                  alt="Order Icon"
                />
              </div>
            </div>

            <form>
              <div className="">
                <label className="text-gray-500 ">Order ID</label>
                <div />
                <input
                  type="text"
                  id="order_id"
                  placeholder="2548745588958"
                  className="border p-2 mt-2"
                />
              </div>
              <div className=" mt-4">
                <label className="text-gray-500" id="input-header">
                  Phone No.
                </label>
                <div className="flex mt-2">
                  <div className="col-3">
                    <input
                      type="text"
                      id="code"
                      placeholder="+880"
                      className="border p-2"
                    />
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      id="phone"
                      placeholder="17328845878"
                      className="border p-2"
                    />
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="flex items-center text-gray-500">
                  <div className=" ">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className=" mt-5 text-sm   font-poppins">
                    <span>
                      Order does not match with mobile number!
                      <br /> The information seems invalid
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <hr className="m-0 border-t-2 border-gray-100" />
          <div className="lower p-4 md:p-6 text-center">
            <button className="btn  bg-red-500  text-white w-1/2 py-2">
              Track Order
            </button>
          </div>
        </div>
        {isOrderFound ? (
          <OrderDisplay />
        ) : (
          <p className="mt-4 text-red-500">
            No record found. Note: ... (your note text)
          </p>
        )}
      </div>
    </>
  );
};

export default TrackOrder;
