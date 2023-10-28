import React from "react";
import Link from "next/link";
import { FaShippingFast, FaLock, FaPercent, FaTshirt } from "react-icons/fa";

const sections = [
  {
    title: "Legal",
    links: ["Terms of Use", "Privacy Policy", "Cookie Policy"],
  },
  {
    title: "Company",
    links: ["About Us", "Contact", "Jobs", "Press Kit"],
  },
];

export default function Footer() {
  return (
    <>
      <div className="bg-white  ">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 border-t p-9  border-gray-600 sm:place-self-center sm:place-items-center">
          <div className="md:col-span-1 flex  text-red-500">
            <FaShippingFast size={18} />
            <div className="ml-2">
              <p className="text-black font-semibold text-[0.85rem]   ">
                FREE SHIPPING
              </p>
              <p className="text-gray-600 text-xs">
                From all orders over Rs 499
              </p>
            </div>
          </div>
          <div className="md:col-span-1 flex text-red-500">
            <FaLock size={14} />
            <div className="ml-2">
              <p className="text-black font-semibold text-[0.85rem]">
                100% SECURE PAYMENT
              </p>
              <p className="text-gray-600 text-xs">
                We use razorpay with secure net
              </p>
            </div>
          </div>
          <div className="md:col-span-1 flex text-red-500">
            <FaPercent size={14} />
            <div className="ml-2">
              <p className="text-black font-semibold text-[0.85rem]">
                UP TO 40% DISCOUNT
              </p>
              <p className="text-gray-600 text-xs">on selected items</p>
            </div>
          </div>
          <div className="md:col-span-1 flex text-red-500">
            <FaTshirt size={18} />
            <div className="ml-2">
              <p className="text-black font-semibold text-[0.85rem]">
                OVER 200+ STYLES
              </p>
              <p className="text-gray-600 text-xs">
                We have everything you need
              </p>
            </div>
          </div>
        </div>

        <footer className="footer grid  gap-6  grid-rows-1  grid-cols-none   bg-[#111] p-4 py-10 sm:p-8 md:p-10  text-white sm:justify-between sm:gap-8 lg:grid-cols-4 lg:grid-rows-1">
          <div>
            <span
              id="whity-text"
              className="uppercase font-semibold text-gray-100 mb-1"
            >
              Our story
            </span>

            <div className=" gap-2 text-[0.8rem]  w-[17.5rem]  md:w- lg:w-72 text-[#d2d2d2]">
              22 Our adventure began during lockdown when we realised that
              several anime shows were gaining popularity in India. We are a
              genuine store that provides anime lovers with collectibles of
              their favourite characters. We pledge to add more merchandise to
              our store to help you build your collection.
            </div>
          </div>
          <div className="flex sm:hidden"></div>

          <div className=" md:flex-col  lg:flex">
            <div className="grid gap-2 lg:ml-20  ">
              <span className="uppercase  sm:mr-28 md:mr-0 font-semibold text-gray-100 mb-1">
                Legal
              </span>
              <div className="text-[0.8rem] grid gap-1 ">
                <Link href="/" className="link-hover text-[#d2d2d2] link">
                  Terms of use
                </Link>
                <Link href="/" className="link-hover text-[#d2d2d2] link">
                  Privacy policy
                </Link>
                <Link href="/" className="link-hover text-[#d2d2d2] link">
                  Cookie policy
                </Link>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden"></div>
          <div className="flex-col sm:flex">
            <span className="uppercase   font-semibold text-gray-100 mb-1">
              Company
            </span>
            <div className="grid gap-1 text-[0.8rem]">
              <Link href="/" className="link-hover text-[#d2d2d2] link">
                About us
              </Link>
              <Link href="/" className="link-hover text-[#d2d2d2] link">
                Contact
              </Link>
              <Link href="/" className="link-hover text-[#d2d2d2] link">
                Jobs
              </Link>
              <Link href="/" className="link-hover text-[#d2d2d2] link">
                Press kit
              </Link>
            </div>
          </div>
          <div className="col-span-2 mt-4 sm:w-full sm:mt-0 md:flex md:flex-col lg:flex">
            <div className="w-full flex-col sm:flex">
              <span className="uppercase font-semibold text-gray-100 mb-1">
                Want style Ideas and Treats?
              </span>
              <div className="form-control">
                <label className="label my-1">
                  <span className="label-text text-xm text-[#d2d2d2] lg:text-sm">
                    Enter your email
                  </span>
                </label>
              </div>
              <div className="relative max-w-full ">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full sm:pr-0 pr-20   text-sm text-black"
                />
                <button className="btn text-white bg-[#676767] absolute right-0 top-0 rounded-l-none text-xs">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer footer-center border-t border-gray-800 bg-[#111]  p-7 text-white">
          <div>
            <p>Copyright © 2023 - All rights reserved by SenpaiMerch Ltd</p>
          </div>
        </footer>
      </div>
    </>
  );
}
