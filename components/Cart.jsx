"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Quantity from "./Quantity";
import { selectCartItems } from "../app/Global/Features/cartSlice";
import { useSelector } from "react-redux";
import { useProductUtils } from "@utils/productUtils";
import { MdInfo } from "react-icons/md";
import Image from "next/image";

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const [open, setOpen] = useState(true);
  const { handleRemoveItem } = useProductUtils();
  const total = cartItems.reduce((total, product) => {
    const price = product.product.discount_price || product.product.price;
    const quantity = product.quantity || 1;
    return total + price * quantity;
  }, 0);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
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

        <div className="fixed inset-0 overflow-hidden   ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full  ">
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
                    <div className="flex-1  overflow-y-auto  ">
                      <div className="flex px-4 py-6 sm:px-6    bg-gray-50 items-start justify-between">
                        <Dialog.Title className="text-lg font-medium  2xl:text-xl font-montserrat  text-black opacity-90">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex    h-7  items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon
                              className="h-6 w-6  text-black    "
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                      {!cartItems.length ? (
                        <section
                          aria-labelledby="cart-heading"
                          className="lg:col-span-7 h-full      mx-auto flex items-center justify-center text-center"
                        >
                          <div className="flex flex-col  items-center justify-center">
                            <MdInfo className="text-5xl mb-4 text-black opacity-80" />
                            <p className="sm:text-2xl text-xl px-2 text-center leading-7 tracking-tight font-montserrat mb-4 text-black opacity-90">
                              Your cart is currently empty.
                            </p>
                            <p className="text-sm text-center mb-6 sm:px-6     px-4 font-poppins text-black opacity-80">
                              Add items to your cart before checking out to, and
                              delve into our diverse and intriguing product
                              assortment.
                            </p>
                          </div>
                        </section>
                      ) : (
                        <div className="  px-4 py-6 sm:px-6">
                          <div className="flow-root ">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartItems.map((product, index) => (
                                <li key={index + 10} className="flex py-6">
                                  <div className="  w-24 h-24 sm:w-auto   sm:h-32  flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image
                                      width={130}
                                      height={130}
                                      alt=""
                                      src={product.product.images[0]}
                                    />
                                  </div>

                                  <div className="ml-4  mt-1 flex flex-1 flex-col">
                                    <div>
                                      <p className="   text-[0.87rem] uppercase  tracking-wide font-lato text-gray-500">
                                        {product.product.category_id.name}
                                      </p>

                                      <div className="sm:flex sm:justify-between mt-1 text-[0.89rem]  line-clamp-1   sm:text-base   font-medium text-gray-800">
                                        <h3>
                                          <a href={product.href}>
                                            {product.size && (
                                              <span>{product.size} - </span>
                                            )}

                                            {product.product.title}
                                          </a>
                                        </h3>
                                        <p className="  text-[0.7rem] uppercase tracking-wider font-lato text-gray-500"></p>
                                      </div>
                                      <div className="sm:flex sm:justify-between text-[0.89rem]   line-clamp-1  sm:text-base font-medium text-gray-800">
                                        <p className="  text-[0.7rem] flex sm:hidden uppercase tracking-wider  font-lato text-gray-500"></p>
                                        <p className=" text-[0.9rem] sm:text-sm lg:text-[1rem]     font-roboto   tracking-wide mt-1.5">
                                          {product.product.discount_price ? (
                                            <span>
                                              <span className="text-red-500">
                                                Rs{" "}
                                                {product.product.discount_price.toFixed(
                                                  2
                                                )}
                                              </span>
                                              <span className="text-gray-600 ml-3 line-through">
                                                Rs{" "}
                                                {product.product.price.toFixed(
                                                  2
                                                )}
                                              </span>
                                            </span>
                                          ) : (
                                            <span>
                                              Rs{" "}
                                              {product.product.price.toFixed(2)}
                                            </span>
                                          )}
                                        </p>
                                        <p className="  text-[0.7rem] hidden sm:flex uppercase tracking-wider mt-2 font-lato text-gray-500">
                                          {product.size && (
                                            <span className="ml-1">
                                              color: {product.color}
                                            </span>
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end mb-0.5 sm:mb-1.5 justify-between text-sm">
                                      <Quantity
                                        quantity={product.quantity}
                                        product={product}
                                      />{" "}
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium sm:flex hidden -mt-6 text-gray-600 hover:text-gray-500"
                                          onClick={() =>
                                            handleRemoveItem(
                                              product.product._id
                                            )
                                          }
                                        >
                                          Remove
                                        </button>
                                        <button
                                          type="button"
                                          className=" text-sm sm:hidden flex -mt-6 text-gray-600 hover:text-gray-500"
                                          onClick={() =>
                                            handleRemoveItem(
                                              product.product._id
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
                      )}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex  justify-between tracking-wide text-base font-medium text-gray-900">
                        <p className="   font-inter">Subtotal</p>
                        Rs {total.toFixed(2)}
                      </div>
                      <p className="mt-2 text-xs font-poppins  sm:text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-4">
                        <div className="flex">
                          <Link
                            href="/cart"
                            onClick={() => setOpen(false)}
                            className="flex uppercase text-[0.7rem]  lg:text-sm   items-center    w-2/5 justify-center rounded-md border border-transparent bg-black    opacity-80 hover:bg-gray-200 hover:text-black     font-montserrat py-3    md:px-6 md:py-3.5 font-medium text-white shadow-sm hover-bg-gray-700 " // Add ml-2 for some horizontal spacing
                          >
                            Your Cart
                          </Link>

                          <Link
                            href="/checkout"
                            onClick={() => setOpen(false)}
                            className="flex uppercase text-[0.7rem] lg:text-sm   items-center    w-3/5 justify-center rounded-md border border-transparent bg-black     opacity-80     hover:bg-gray-200 hover:text-black    font-montserrat py-3   md:px-6 md:py-3.5 font-medium text-white shadow-sm hover-bg-stone-700 ml-2" // Add ml-2 for some horizontal spacing
                          >
                            Checkout order
                          </Link>
                        </div>
                      </div>

                      <div className="mt-3 flex justify-center text-center   text-stone-500">
                        <p className="mr-3 font-poppins">or</p>
                        <button
                          type="button"
                          className="font-medium text-gray-600   text-xs sm:text-sm   font-montserrat  hover:text-gray-500"
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
