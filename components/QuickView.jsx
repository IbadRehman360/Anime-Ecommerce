"use client";
import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { BsStar, BsXCircle } from "react-icons/bs";
import { classNames } from "@app/product/[id]/page";

export default function QuickView({ product, isOpen, onClose }) {
  console.log(product);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const sizeNames = Object.keys(product.sizes);
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div
          className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <span
            className="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base    text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative rounded-lg flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <BsXCircle className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:items-center lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 border border-gray-800 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img
                      src={product.images[0]}
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-xl mb-3 font-medium text-gray-900 sm:pr-12">
                      {product.title}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-1"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <div className="mt-2">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <p className="text-sm text-gray-700">
                            <span className="sr-only">
                              23
                              {product.reviews_id.length} out of 5 stars
                            </span>
                          </p>
                          <div className="ml-1 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <BsStar
                                key={rating}
                                className={classNames(
                                  product.rating > rating
                                    ? "text-yellow-400"
                                    : "text-gray-200",
                                  "h-5 w-5 flex-shrink-0"
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <div className="hidden ml-4 lg:flex lg:items-center">
                            <a
                              href="#"
                              className=" text-sm font-medium text-indigo-600 hover:text-gray-500"
                            >
                              {product.reviews_id.length
                                ? `${product.reviews_id.length} reviews`
                                : "No reviews"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-4">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Color
                          </h4>

                          <RadioGroup
                            value={selectedColor}
                            onChange={setSelectedColor}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a color
                            </RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                              {product.colors.map((color) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    classNames(
                                      color.selectedColor,
                                      active && checked
                                        ? "ring ring-offset-1"
                                        : "",
                                      !active && checked ? "ring-2" : "",
                                      "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="p" className="sr-only">
                                    {color.name}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      `h-8 w-8 bg-${color}-500 border border-black border-opacity-10 rounded-full`
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="mt-4">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">
                              Size
                            </h4>
                            <a
                              href="#"
                              className="text-sm font-medium  text-gray-700"
                            >
                              Size guide
                            </a>
                          </div>
                          <RadioGroup
                            value={selectedSize}
                            onChange={setSelectedSize}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a size
                            </RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-3 mt-4 sm:grid-cols-8 lg:grid-cols-8">
                              {sizeNames.map((sizeName) => {
                                const size = product.sizes[sizeName];

                                return (
                                  <RadioGroup.Option
                                    key={sizeName}
                                    value={sizeName}
                                    disabled={!size}
                                    className={({ active }) =>
                                      classNames(
                                        size
                                          ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                          : "cursor-not-allowed bg-gray-50 text-gray-200",
                                        active ? "ring-2 ring-gray-500" : "",
                                        "group relative flex items-center justify-center rounded-md border py-2.5 px-4 text-xs lg:text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-4"
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="span">
                                          {sizeName}
                                        </RadioGroup.Label>
                                        {size ? (
                                          <span
                                            className={classNames(
                                              active ? "border" : "border-2",
                                              checked
                                                ? ""
                                                : "border-transparent",
                                              "pointer-events-none absolute -inset-px rounded-md"
                                            )}
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                          >
                                            <svg
                                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                              viewBox="0 0 100 100"
                                              preserveAspectRatio="none"
                                              stroke="currentColor"
                                            >
                                              <line
                                                x1={0}
                                                y1={100}
                                                x2={100}
                                                y2={0}
                                                vectorEffect="non-scaling-stroke"
                                              />
                                            </svg>
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                );
                              })}
                            </div>
                          </RadioGroup>
                        </div>

                        <button
                          type="submit"
                          className="mt-8 w-full bg-slate-900 border border-transparent rounded-md py-2.5 px-8 flex items-center justify-center   text-[0.95rem]   font-satoshi tracking-wide font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Add to bag
                        </button>

                        <p className="absolute top-4 left-4 text-center sm:static sm:mt-4">
                          <a
                            href={product.href}
                            className="font-medium  text-sm text-slate-600 hover:text-slate-500"
                          >
                            View full details
                          </a>
                        </p>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}