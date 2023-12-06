"use client";
import { useState } from "react";
import OrderDisplay from "./OrderDisplay";
import { BsXCircle } from "react-icons/bs";

const TrackOrder = ({ data }) => {
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
      <section
        class={`flex items-center  mx-auto justify-center mt-6     ${
          data || isData ? "" : " lg:border"
        } rounded-xl`}
      >
        <div
          class={`flex flex-col w-full max-w-sm mx-auto  ${
            data || isData ? "hidden" : "lg:flex hidden"
          } `}
        >
          <div class="p-3 mx-auto text-blue-500 bg-gray-50 rounded-full">
            <h1 class="mt-3 text-lg flex font-raleway text-gray-800">
              <span>
                {" "}
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon  ml-1 -mt-0.5 mr-2"
                  width={28}
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M960.1 258.4H245.8l-36.1-169H63.9v44h110.2l26.7 125 100.3 469.9 530 0.4v-44l-494.4-0.3-22.6-105.9H832l128.1-320.1z m-65 44L855.6 401H276.3l-21.1-98.6h639.9zM304.8 534.5L279.7 417h569.5l-47 117.5H304.8z"
                      fill="#39393A"
                    ></path>
                    <path
                      d="M375.6 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.3-72-72-72zM732 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72c39.7 0 72-32.2 72-72s-32.3-72-72-72zM447.5 302.4h16v232.1h-16zM652 302.4h16v232.1h-16z"
                      fill="#E73B37"
                    ></path>
                    <path d="M276.3 401l3.4 16-3.4-16z" fill="#343535"></path>
                  </g>
                </svg>{" "}
              </span>
              Hey there, it seems like you haven't placed any orders yet
            </h1>
          </div>
          <p class="mt-4 text-gray-600 leading-7  text-center font-poppins  ">
            Don't worry! You can easily track your order manually. Click the
            button below and enter the tracking ID provided on the gmail.
          </p>
        </div>

        <div
          className={` xl:flex  ${
            isData ? "gap-10 grid  " : "grid items-center justify-center"
          }   `}
        >
          <form
            onSubmit={handleSubmit}
            className={` ${isData && "xl:mt-[4.5rem]    xl:order-2"} `}
          >
            {" "}
            <div
              class={`flex flex-col        mx-auto  ${
                data || isData ? "hidden" : "lg:hidden    "
              } `}
            >
              <div class="  flex item-center justify-center  mx-auto   p-4  text-blue-500 bg-gray-100 rounded-lg">
                {" "}
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon justify-center  flex items-center mr-3 mb-4 sm:mb-0  mt-1  mx-auto  "
                  width={28}
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M960.1 258.4H245.8l-36.1-169H63.9v44h110.2l26.7 125 100.3 469.9 530 0.4v-44l-494.4-0.3-22.6-105.9H832l128.1-320.1z m-65 44L855.6 401H276.3l-21.1-98.6h639.9zM304.8 534.5L279.7 417h569.5l-47 117.5H304.8z"
                      fill="#39393A"
                    ></path>
                    <path
                      d="M375.6 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.3-72-72-72zM732 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72c39.7 0 72-32.2 72-72s-32.3-72-72-72zM447.5 302.4h16v232.1h-16zM652 302.4h16v232.1h-16z"
                      fill="#E73B37"
                    ></path>
                    <path d="M276.3 401l3.4 16-3.4-16z" fill="#343535"></path>
                  </g>
                </svg>{" "}
                <h4 className="mt-3     justify-center items-center mx-auto      flex  font-poppins  text-gray-900">
                  It seems like you haven't placed any orders yet
                </h4>
              </div>
              <p className=" mt-5 text-sm   leading-6  mb-4 px-5 text-center font-poppins   text-gray-600">
                Don't worry! You can easily track your order manually. Click the
                button below and enter the tracking ID provided on the gmail.
              </p>
            </div>
            <div className="border   ">
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
              <div className="rounded-md  shadow-md border bg-red-50 p-4">
                <div className="flex">
                  <div
                    onClick={() => setIsOrderFound(null)}
                    className="flex-shrink-0  "
                  >
                    <BsXCircle
                      className="h-5 w-5    mt-[1px] text-red-600 font-montserrat hover:text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 ">
                    <h3 className="text-sm font-semibold font-poppins text-red-500 opacity-90">
                      Oops! No order found with the given Tracking ID or Mobile
                      Number.
                    </h3>
                    <div className="mt-2 text-sm  font-poppins text-red-500">
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
      </section>
    </>
  );
};

export default TrackOrder;
