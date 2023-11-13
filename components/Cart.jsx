"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Quantity from "./Quantity";
import {
  selectCartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../app/Global/Features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = (product) => {
    dispatch(increaseQuantity({ product }));
  };

  const decrementQuantity = (product) => {
    dispatch(decreaseQuantity({ product }));
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transform ease-in-out duration-1000"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform ease-in-out duration-1000"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root relative">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((product) => (
                              <li
                                key={product.product_id}
                                className="flex py-6"
                              >
                                <div className="  h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.product.images}
                                    className="h-full border border-black w-full object-cover object-center"
                                  />
                                  <div className="absolute -top-1 left-20">
                                    <div className="bg-yellow-500 text-xs  font-semibold text-white rounded-full h-5 w-5 flex items-center justify-center">
                                      {product.quantity}
                                    </div>
                                  </div>
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <p className="mt-1 text-[0.7rem] mb-1 uppercase tracking-wider font-lato text-gray-500">
                                      {product.product.category_id.name}
                                    </p>
                                    <div className="flex justify-between text-[0.89rem] mt-0.5 mb-1 sm:text-base font-medium text-gray-800">
                                      <h3>
                                        <a href={product.href}>
                                          {product.product.title}
                                        </a>
                                      </h3>
                                      <p className="text-sm lg:text-[0.95rem]    font-roboto   tracking-wide mt-1 lg:mt-2">
                                        {product.product.discount_price ? (
                                          <span>
                                            <span className="text-red-500">
                                              Rs{" "}
                                              {product.product.discount_price.toFixed(
                                                2
                                              )}
                                            </span>
                                            <del className="text-gray-600 ml-3">
                                              Rs{" "}
                                              {product.product.price.toFixed(2)}
                                            </del>
                                          </span>
                                        ) : (
                                          <span>
                                            Rs{" "}
                                            {product.product.price.toFixed(2)}
                                          </span>
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <Quantity
                                      quantity={product.quantity}
                                      onIncrement={() =>
                                        incrementQuantity(product)
                                      }
                                      onDecrement={() =>
                                        decrementQuantity(product)
                                      }
                                    />{" "}
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium -mt-6 text-gray-600 hover:text-gray-500"
                                        onClick={() =>
                                          dispatch(
                                            removeItem({
                                              product: product.product._id,
                                            })
                                          )
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-2 text-xs  sm:text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-4">
                        <div className="flex">
                          <Link
                            href="/cart"
                            className="flex uppercase text-[0.7rem]  md:text-sm   items-center    w-2/5 justify-center rounded-md border border-transparent bg-stone-800 opacity-80 hover:bg-stone-200 hover:text-black     font-montserrat py-3    md:px-6 md:py-3.5 font-medium text-white shadow-sm hover-bg-gray-700 " // Add ml-2 for some horizontal spacing
                          >
                            Your Cart
                          </Link>

                          <Link
                            href="/checkout"
                            className="flex uppercase text-[0.7rem]  md:text-sm   items-center    w-3/5 justify-center rounded-md border border-transparent bg-stone-800 opacity-80 hover:bg-stone-200 hover:text-black    font-montserrat py-3   md:px-6 md:py-3.5 font-medium text-white shadow-sm hover-bg-gray-700 ml-2" // Add ml-2 for some horizontal spacing
                          >
                            Checkout order
                          </Link>
                        </div>
                      </div>

                      <div className="mt-3 flex justify-center text-center   text-gray-500">
                        <p className="mr-3">or</p>
                        <button
                          type="button"
                          className="font-medium text-gray-600  text-xs sm:text-sm   font-montserrat  hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
