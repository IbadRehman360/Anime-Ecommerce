"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { BsStar, BsXCircle } from "react-icons/bs";
import { classNames } from "@app/product/[id]/page";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "@app/Global/Features/cartSlice";
import toast from "react-hot-toast";
import SizeChart from "@components/ProductPreview/SizeChart";

export default function QuickView({ product, isOpen, onClose }) {
  const getProductInitialState = (product) => {
    if (product.stock.colorswithsize) {
      const colors = Object.keys(product.stock.colorswithsize);

      for (const color of colors) {
        const sizes = product.stock.colorswithsize[color];
        const availableSizes = Object.keys(sizes).filter(
          (size) => sizes[size].quantity > 0
        );

        if (availableSizes.length > 0) {
          return {
            selectedColor: color,
            selectedSize: availableSizes[0],
          };
        }
      }
    }

    if (product.stock.sizes) {
      const availableSizes = Object.keys(product.stock.sizes).filter(
        (size) => product.stock.sizes[size].quantity > 0
      );

      if (availableSizes.length > 0) {
        return {
          selectedSize: availableSizes[0],
        };
      } else {
        const allSizes = Object.keys(product.stock.sizes);
        return {
          selectedSize: allSizes.length > 0 ? allSizes[0] : null,
        };
      }
    }

    if (product.stock.colors) {
      const availableColors = Object.keys(product.stock.colors).filter(
        (color) => product.stock.colors[color].quantity > 0
      );

      if (availableColors.length > 0) {
        return {
          selectedColor: availableColors[0],
        };
      } else {
        const allColors = Object.keys(product.stock.colors);
        return {
          selectedColor: allColors.length > 0 ? allColors[0] : null,
        };
      }
    }

    return {};
  };

  const initialState = getProductInitialState(product);

  const [selectedColor, setSelectedColor] = useState(
    initialState.selectedColor || null
  );
  const [selectedSize, setSelectedSize] = useState(
    initialState.selectedSize || null
  );
  useEffect(() => {
    if (product.stock.colorswithsize) {
      const sizes = product.stock.colorswithsize[selectedColor];

      if (sizes) {
        const availableSizes = Object.keys(sizes).filter(
          (size) => sizes[size].quantity > 0
        );

        if (availableSizes.length > 0) {
          setSelectedSize(availableSizes[0]);
        } else {
          const defaultSize = Object.keys(sizes)[0];
          setSelectedSize(defaultSize);
        }
      } else {
        const defaultColor = Object.keys(product.stock.colorswithsize)[0];
        const defaultSize =
          product.stock.colorswithsize[defaultColor] &&
          Object.keys(product.stock.colorswithsize[defaultColor])[0];

        setSelectedColor(defaultColor);
        setSelectedSize(defaultSize);
      }
    }
  }, [selectedColor, product.stock.colorswithsize]);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const getPriceInfo = () => {
    let priceInfo = {};

    if (product.stock.colorswithsize) {
      const colorInfo = product.stock.colorswithsize[selectedColor] || {};
      priceInfo = colorInfo[selectedSize] || {};
    } else if (product.stock.sizes) {
      priceInfo = product.stock.sizes[selectedSize] || {};
    } else if (product.stock.colors) {
      priceInfo = product.stock.colors[selectedColor] || {};
    } else {
      priceInfo = product.stock;
    }

    return priceInfo;
  };

  const { price, discount_price, quantity } = getPriceInfo();
  const handleAddToCart = () => {
    dispatch(
      addItem({
        product,
        quantity: 1,
        color: selectedColor,
        size: selectedSize,
        price: price,
        discount_price: discount_price,
      })
    );
  };

  function getColorClass(color) {
    const colorMap = {
      orange: "bg-orange-600",
      red: "bg-red-600",
      pink: "bg-pink-600",
      yellow: "bg-yellow-600",
      black: "bg-black",
      white: "bg-white",
      blue: "bg-blue-600",
      green: "bg-green-600",
      purple: "bg-purple-600",
      indigo: "bg-indigo-600",
      teal: "bg-teal-600",
      gray: "bg-gray-600",
      amber: "bg-amber-600",
      lime: "bg-lime-600",
      cyan: "bg-cyan-600",
      emerald: "bg-emerald-600",
      rose: "bg-rose-600",
      violet: "bg-violet-600",
      blueGray: "bg-blueGray-600",
      coolGray: "bg-coolGray-600",
      trueGray: "bg-trueGray-600",
      warmGray: "bg-warmGray-600",
      lightBlue: "bg-lightBlue-600",
      fuchsia: "bg-fuchsia-600",
    };

    return colorMap[color] || "";
  }
  function hasNoQuantityInAllSizes(color, stock) {
    if (product?.stock?.colorswithsize) {
      const sizes = Object.keys(stock.colorswithsize[color]);
      return sizes.every(
        (size) => stock.colorswithsize[color][size].quantity <= 0
      );
    }
  }
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
                  onClick={() => onClose(false)}
                >
                  <span className="sr-only">Close</span>
                  <BsXCircle className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:items-center lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 h-full  border border-gray-800 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <Image
                      width="500"
                      height="500"
                      alt=""
                      src={product.images[0]}
                      className={`object-center  object-cover  h-full  `}
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-xl mb-3 font-medium line-clamp-1 font-poppins text-gray-900 sm:pr-12">
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
                              {product.reviews_id.length} out of 5 stars
                            </span>
                          </p>
                          <div className="ml-1 gap-1  flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <BsStar
                                key={rating}
                                className={classNames(
                                  product.rating > rating
                                    ? "text-yellow-400"
                                    : "text-gray-200",
                                  "h-6 w-6 flex-shrink-0"
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
                              {product.reviews_id.length - 1
                                ? `${product.reviews_id.length} reviews`
                                : "No reviews"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                    <p
                      className={`text-gray-900 ${
                        !selectedColor && !selectedSize ? "  pt-4" : "hidden"
                      } flex font-poppins lg:leading-7 lg:text-[0.92rem] leading-6 text-[0.82rem] tracking-wider`}
                    >
                      {product.description.split(" ").slice(0, 20).join(" ")}
                    </p>

                    <section aria-labelledby="options-heading" className="mt-4">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>
                      <form>
                        {selectedColor ? (
                          <div
                            className={
                              selectedColor && !selectedSize
                                ? "mb-6 mt-4 "
                                : "mb-2 "
                            }
                          >
                            <h3 className="text-sm font-semibold text-gray-700 font-inter">
                              Color{" "}
                              <span className="ml-0.5">
                                {selectedColor &&
                                  selectedColor.charAt(0).toUpperCase() +
                                    selectedColor.slice(1)}{" "}
                              </span>
                            </h3>
                            <RadioGroup
                              value={selectedColor}
                              onChange={setSelectedColor}
                              className="mt-4"
                            >
                              <RadioGroup.Label className="sr-only">
                                Choose a color
                              </RadioGroup.Label>
                              <div className="flex items-center space-x-3">
                                {(product?.stock?.colorswithsize &&
                                Object.keys(product.stock.colorswithsize)
                                  .length > 0
                                  ? Object.keys(product.stock.colorswithsize)
                                  : Object.keys(product?.stock?.colors) || []
                                ).map((color) => (
                                  <RadioGroup.Option
                                    key={color}
                                    value={color}
                                    disabled={
                                      hasNoQuantityInAllSizes(
                                        color,
                                        product.stock
                                      ) ||
                                      (product.stock.colors &&
                                        product.stock.colors[color]?.quantity <=
                                          0)
                                    }
                                    className={({ active, checked }) =>
                                      classNames(
                                        active && checked
                                          ? "ring ring-offset-1"
                                          : "",
                                        !active && checked ? "ring-2" : "",
                                        hasNoQuantityInAllSizes(
                                          color,
                                          product.stock
                                        )
                                          ? "cursor-not-allowed bg-gray-200 p-1 "
                                          : "",
                                        "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
                                        product.stock.colors &&
                                          product.stock.colors[color]
                                            ?.quantity <= 0
                                          ? "opacity-40   ring ring-offset-1"
                                          : "",
                                        getColorClass(color)
                                      )
                                    }
                                  >
                                    <RadioGroup.Label
                                      as="span"
                                      className="sr-only"
                                    >
                                      {color}
                                    </RadioGroup.Label>
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        product.stock.colors &&
                                          product.stock.colors[color]
                                            .quantity <= 0
                                          ? `bg-${color}-100 opacity-40`
                                          : `bg-${color}-500  opacity-40`,
                                        hasNoQuantityInAllSizes(
                                          color,
                                          product.stock
                                        )
                                          ? "opacity-40"
                                          : " ",
                                        "h-8 w-8 rounded-full border border-black border-opacity-10 relative"
                                      )}
                                    >
                                      {((product.stock.colors &&
                                        product.stock.colors[color]?.quantity <=
                                          0) ||
                                        hasNoQuantityInAllSizes(
                                          color,
                                          product.stock
                                        )) && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                          <span className="bg-gray-400 h-0.5 w-8 transform rotate-45" />
                                        </div>
                                      )}
                                    </span>
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>
                        ) : (
                          <></>
                        )}
                        {selectedSize ? (
                          <div className="mt-4 mb-6">
                            <SizeChart QuickView={true} />
                            <RadioGroup
                              value={selectedSize}
                              onChange={setSelectedSize}
                              className="mt-4"
                            >
                              <RadioGroup.Label className="sr-only">
                                Choose a size
                              </RadioGroup.Label>
                              <div className="grid grid-cols-4 gap-16 mt-4 sm:grid-cols-8 lg:grid-cols-8">
                                {product.stock?.sizes ||
                                product.stock?.colorswithsize[selectedColor] ? (
                                  Object.keys(
                                    product.stock?.sizes ||
                                      product.stock?.colorswithsize[
                                        selectedColor
                                      ]
                                  ).map((sizeName) => {
                                    const size = product.stock?.sizes
                                      ? product.stock?.sizes[sizeName]
                                      : product.stock?.colorswithsize[
                                          selectedColor
                                        ][sizeName];
                                    const isAvailable = size.quantity > 0;
                                    return (
                                      <RadioGroup.Option
                                        key={sizeName}
                                        value={sizeName}
                                        disabled={!isAvailable}
                                        className={({ active }) =>
                                          classNames(
                                            isAvailable
                                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                                            active
                                              ? "ring-2 ring-indigo-500"
                                              : "",
                                            "group relative flex items-center justify-center rounded-md border py-3 px-7 text-xs lg:text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-4"
                                          )
                                        }
                                      >
                                        {({ active, checked }) => (
                                          <>
                                            <RadioGroup.Label as="span">
                                              {sizeName}
                                            </RadioGroup.Label>
                                            {isAvailable ? (
                                              <span
                                                className={classNames(
                                                  active
                                                    ? "border"
                                                    : "border-2",
                                                  checked
                                                    ? "border-indigo-500"
                                                    : "border-transparent",
                                                  "pointer-events-none absolute -inset-px rounded-md"
                                                )}
                                              />
                                            ) : (
                                              <span className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
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
                                  })
                                ) : (
                                  <div>No size information available</div>
                                )}
                              </div>
                            </RadioGroup>
                          </div>
                        ) : (
                          <></>
                        )}
                        {quantity > 0 ? (
                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="group relative h-12 border text-white bg-black   opacity-90    font-poppins w-full overflow-hidden   middle none center mr-4       py-3 px-6      shadow-sm shadow-blue-500/10 transition-all hover:shadow-sm hover:shadow-blue-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg    "
                          >
                            Add To Cart
                          </button>
                        ) : (
                          <div className="group relative block justify-center text-center text-black  text-opacity-90 h-11 sm:h-12 border w-full overflow-hidden middle none center mr-4 py-3 px-6 font-montserrat lg:text-sm  text-xs  font-bold uppercase text-whiteshadow-md sm:shadow-blue-500/10 transition-all rounded-lg bg-white opacity-70 pb-3 cursor-not-allowed">
                            Add To Cart
                          </div>
                        )}
                        <p className="absolute top-4 font-poppins left-4 text-center sm:static sm:mt-4">
                          <Link
                            href={`/product/${product._id}`}
                            className="font-medium  text-sm text-gray-800 hover:text-gray-600"
                          >
                            View full details
                          </Link>
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
