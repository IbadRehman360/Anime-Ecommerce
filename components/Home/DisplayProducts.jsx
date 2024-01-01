"use client";
import Link from "next/link";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import Image from "next/image";

const ProductCard = ({ products }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article className={`product-card w-full   relative overflow-hidden  `}>
      <Link href={`/product/${products._id}`}>
        <div>
          <div
            className={`relative w-full sm:h-72 lg:80 rounded-lg overflow-hidden ${
              isHovered ? "shadow-sm" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              alt={"HI" + 1}
              src={products.images[0]}
              height={300}
              width={300}
              className="w-full h-full border border-gray-100 object-center object-cover  n transition-transform transform hover:scale-105"
            />
            <div className="absolute top-0   inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-t from-black opacity-10"
              />
            </div>
            {isHovered && (
              <div className="absolute bottom-4 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer">
                <TiShoppingCart size={22} />
              </div>
            )}
          </div>
          <div className="product-details mt-2 md:mt-4 text-center">
            <h2 className="products-title text-[0.95rem] lg:text-[1.1rem]  px-1  line-clamp-1   font-poppins  font-medium text-center">
              {products.title}
            </h2>
            <p className="text-[0.94rem] lg:text-[1.1rem] font-roboto px-4 tracking-wide mt-1 lg:mt-2">
              {products.stock.colorswithsize ? (
                <>
                  {Object.entries(products.stock.colorswithsize).map(
                    ([color, sizes], index) => {
                      if (index === 0) {
                        const firstSizeKey = Object.keys(sizes)[0];
                        const firstSizeDetails = sizes[firstSizeKey];
                        return (
                          <span key={`${color}-${firstSizeKey}`}>
                            {firstSizeDetails.discount_price > 0 ? (
                              <span>
                                <span className="text-red-500">
                                  Rs{" "}
                                  {firstSizeDetails.discount_price.toFixed(2)}
                                </span>
                                <del className="text-gray-600 opacity-90 ml-3">
                                  Rs {firstSizeDetails.price.toFixed(2)}
                                </del>
                              </span>
                            ) : (
                              <span className="text-[0.94rem] lg:text-[1.2rem] opacity-90 font-lato tracking-wide mt-0.5 lg:mt-1">
                                Rs {firstSizeDetails.price.toFixed(2)}
                              </span>
                            )}
                            <div className="w-10 h-5"> </div>
                          </span>
                        );
                      }
                      return null;
                    }
                  )}
                </>
              ) : products.stock.sizes ? (
                <>
                  {Object.entries(products.stock.sizes).map(
                    ([size, details], index) =>
                      index === 0 && (
                        <span key={size}>
                          {details.discount_price > 0 ? (
                            <span>
                              <span className="text-red-500">
                                Rs {details.discount_price.toFixed(2)}
                              </span>
                              <del className="text-gray-600 opacity-90 ml-3">
                                Rs {details.price.toFixed(2)}
                              </del>
                            </span>
                          ) : (
                            <span className="text-[0.94rem] lg:text-[1.2rem] opacity-90 font-lato tracking-wide mt-0.5 lg:mt-1">
                              Rs {details.price.toFixed(2)}
                            </span>
                          )}
                          <div className="w-10 h-5"> </div>
                        </span>
                      )
                  )}
                </>
              ) : products.stock.colors ? (
                <>
                  {Object.entries(products.stock.colors).map(
                    ([color, details], index) =>
                      index === 0 && (
                        <span key={color}>
                          {details.discount_price > 0 ? (
                            <span>
                              <span className="text-red-500">
                                Rs {details.discount_price.toFixed(2)}
                              </span>
                              <del className="text-gray-600 opacity-90 ml-3">
                                Rs {details.price.toFixed(2)}
                              </del>
                            </span>
                          ) : (
                            <span className="text-[0.94rem] lg:text-[1.2rem] opacity-90 font-lato tracking-wide mt-0.5 lg:mt-1">
                              Rs {details.price.toFixed(2)}
                            </span>
                          )}
                          <div className="w-10 h-5"> </div>
                        </span>
                      )
                  )}
                </>
              ) : (
                <>
                  {products.stock && (
                    <span>
                      {products.stock.discount_price > 0 ? (
                        <span>
                          <span className="text-red-500">
                            Rs {products.stock.discount_price.toFixed(2)}
                          </span>
                          <del className="text-gray-600 opacity-90 ml-3">
                            Rs {products.stock.price.toFixed(2)}
                          </del>
                        </span>
                      ) : (
                        <span className="text-[0.94rem] lg:text-[1.2rem] opacity-90 font-lato tracking-wide mt-0.5 lg:mt-1">
                          Rs {products.stock.price.toFixed(2)}
                        </span>
                      )}
                      <div className="w-10 h-5"> </div>
                    </span>
                  )}
                </>
              )}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
