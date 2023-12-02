"use client";
import { useState } from "react";
import OrderDisplay from "./OrderDisplay";
import { BsXCircle } from "react-icons/bs";

const TrackOrder = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isOrderFound, setIsOrderFound] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isData, setData] = useState();
  const handleTrackOrder = async () => {
    try {
      const response = await fetch("/api/order-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: trackingId,
          phoneNumber: phoneNumber,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setData([]);
        setData(data);
        if (isData) {
          setIsOrderFound(true);
        }
        console.log(data);

        console.log("Order found successfully", data);
      } else {
        setIsOrderFound("error");
        console.error("Order not found");
      }
    } catch (error) {
      console.error("An error occurred while tracking the order:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTrackOrder();
  };
  return (
    <>
      <div
        className={` xl:flex  ${
          isData ? "gap-10 grid  " : "grid items-center justify-center"
        }   `}
      >
        <form
          onSubmit={handleSubmit}
          className={` ${isData && "xl:mt-[4.5rem]    xl:order-2"} `}
        >
          <div className="border shadow-md  ">
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
              <div>
                <label className="text-gray-500">Order ID</label>
                <div />
                <input
                  type="text"
                  id="order_id"
                  placeholder="65604d282b7beda3767245c9"
                  className="border  w-full  p-2 mt-2"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <label className="text-gray-500" id="input-header">
                  Phone No. (Optional)
                </label>
                <div className="flex mt-2">
                  <div className="col-span-3 ">
                    <input
                      type="text"
                      id="code"
                      placeholder="+92"
                      disabled={true}
                      className="border p-2    w-28  sm:w-auto   bg-[#fdfdfd] "
                    />
                  </div>
                  <div className=" col-span-9   ">
                    <input
                      type="number"
                      id="phone"
                      placeholder="321281****"
                      className="border   w-full flex  sm:w-auto p-2"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
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
                      Please enter the corresponding Tracking ID or Mobile
                      Number
                      <br />
                      to efficiently track your product.
                    </span>
                  </div>
                </div>
              </div>
              <hr className="m-0 border-t-2 mt-5 border-gray-100" />
              <div className="lower  mt-4  text-center">
                <button
                  type="submit"
                  className="btn hover:bg-red-400 bg-red-500 opacity-90 text-sm text-white w-3/5 sm:w-3/6 py-2"
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
          {isOrderFound === "error" && (
            <div className="rounded-md mt-6  shadow-md border bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <BsXCircle
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 ">
                  <h3 className="text-sm font-medium font-satoshi text-red-700">
                    Oops! No order found with the given Tracking ID or Mobile
                    Number.
                  </h3>
                  <div className="mt-2 text-sm font-satoshi text-red-500">
                    <ul role="list" className="list-disc space-y-1 pl-5">
                      <li>The information provided is invalid.</li>
                      <li>
                        Double-check your Gmail for the correct Tracking ID.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
        {isData && (
          <div className="">
            <OrderDisplay data={isData} />
          </div>
        )}
      </div>
    </>
  );
};

export default TrackOrder;
