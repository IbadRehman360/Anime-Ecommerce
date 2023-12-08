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
      <div className="bg-gray-100 ">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 border-t p-9 border  border-gray-200 sm:place-self-center sm:place-items-center">
          <div className="md:col-span-1 flex  ">
            <FaShippingFast size={18} className="mt-0.5 mr-1" />
            <div className="ml-2">
              <p
                className="font-poppins text-gray-800  tracking-wider text-[0.85rem]"
                style={{ fontWeight: "700" }}
              >
                {" "}
                FREE SHIPPING
              </p>
              <p className="text-gray-600 text-[0.76rem]       font-poppins">
                From all orders over Rs 499
              </p>
            </div>
          </div>
          <div className="md:col-span-1 flex  ">
            <FaLock size={14} className="mt-0.5 mr-1" />
            <div className="ml-2">
              <p
                className="font-poppins text-gray-800  tracking-wider text-[0.85rem]"
                style={{ fontWeight: "700" }}
              >
                {" "}
                100% SECURE PAYMENT
              </p>
              <p className="text-gray-600 text-[0.76rem]       font-poppins">
                We use razorpay with secure net
              </p>
            </div>
          </div>
          <div className="md:col-span-1 flex  ">
            <FaPercent size={14} className="mt-1 mr-1 " />
            <div className="ml-2">
              <p
                className="font-poppins text-gray-800  tracking-wider text-[0.85rem]"
                style={{ fontWeight: "700" }}
              >
                UP TO 40% DISCOUNT
              </p>
              <p className="text-gray-600 text-xs       font-poppins">
                on selected items
              </p>
            </div>
          </div>
          <div className="md:col-span-1 flex ">
            <FaTshirt size={18} className="mt-0.5 mr-1" />
            <div className="ml-2">
              <p
                className="font-poppins text-gray-800  tracking-wider text-[0.85rem]"
                style={{ fontWeight: "700" }}
              >
                {" "}
                OVER 200+ STYLES
              </p>
              <p className="text-gray-600 text-[0.76rem]       font-poppins">
                We have everything you need
              </p>
            </div>
          </div>
        </div>

        <footer className="footer grid  gap-6  grid-rows-1  grid-cols-none    bg-gray-100 p-4 py-10 sm:p-8 md:p-10  text-gray-800 sm:justify-between sm:gap-8 lg:grid-cols-4 lg:grid-rows-1">
          <div>
            <span
              id="whity-text"
              className="uppercase  sm:mr-28 md:mr-0   font-semibold font-poppins text-[1.05rem] text-gray-700 mb-1"
            >
              Our Story
            </span>

            <div className=" gap-2 text-[0.86rem]  w-[17.5rem] font-poppins    md:w- lg:w-72 text-gray-800">
              Welcome to Senpai Merch, go-to spot for Pakistani anime fans.
              Explore a variety of custom shirts and merchandise featuring your
              beloved anime characters. Join our 6,000+ member strong Instagram
              community bonded by a passion for anime culture. Senpai Merch –
              where your anime journey starts.{" "}
              <Link className="text-blue-500" href="/policies/about">
                About us
              </Link>
            </div>
          </div>
          <div className="flex sm:hidden"></div>

          <div className=" md:flex-col   lg:flex">
            <div className="grid gap-2 lg:ml-20   ">
              <span className="uppercase  sm:mr-28 md:mr-0   font-semibold font-poppins text-[1rem] text-gray-700 mb-1">
                ABOUT
              </span>
              <div className="text-[0.86rem]  grid gap-1.5 font-poppins ">
                <Link
                  href="/policies/about-us"
                  className="link-hover text-gray-800 link"
                >
                  About us
                </Link>

                <Link
                  href="https://www.instagram.com/pakistani_senpai_merch"
                  className="link-hover text-gray-800 link"
                >
                  Instagram
                </Link>
                <p className="link-hover text-gray-800 link">
                  Whatsapp +923218202052
                </p>
                <Link
                  href="https://www.facebook.com/Pakistanisenpaimerch"
                  className="link-hover text-gray-800 link"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden"></div>
          <div className="flex-col sm:flex">
            <span className="uppercase  sm:mr-28 md:mr-0   font-semibold font-poppins text-[1rem] text-gray-700 mb-1">
              Our Policies
            </span>
            <div className="grid gap-1.5 text-[0.86rem] font-poppins">
              <Link
                href="/policies/returns"
                className="link-hover text-gray-800 link"
              >
                Refund Policy
              </Link>
              <Link
                href="/policies/shipping"
                className="link-hover text-gray-800 link"
              >
                Shopping Policy
              </Link>

              <Link
                href="/policies/contact-us"
                className="link-hover text-gray-800 link"
              >
                Contact Us
              </Link>
              <Link
                href="/track-order"
                className="link-hover text-gray-800 link"
              >
                Track Order
              </Link>
            </div>
          </div>
          <div className="col-span-2 mt-4 sm:w-full  sm:mt-0 md:flex md:flex-col lg:flex">
            <div className="w-full flex-col sm:flex">
              <span className="uppercase  sm:mr-28 md:mr-0   font-semibold font-poppins text-[0.98rem] text-gray-700 mb-1">
                Want style Ideas and Treats?
              </span>
              <div className="form-control">
                <label className="label my-1">
                  <span className="label-text  font-poppins text-gray-800 ">
                    Enter your email
                  </span>
                </label>
              </div>
              <div className="relative max-w-full ">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full sm:pr-0 pr-20   text-sm text-gray-900"
                />
                <button className="btn text-white bg-[#676767] absolute right-0 top-0 rounded-l-none text-xs">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer footer-center border-t border-gray-300   font-poppins   bg-gray-100  p-7 text-gray-900">
          <div>
            <p>Copyright © 2023 - All rights reserved by SenpaiMerch Ltd</p>
          </div>
        </footer>
      </div>
    </>
  );
}
