"use client";

import { classNames } from "@app/product/[id]/page";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

function ProductSizes({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm  font-semibold text-gray-700       font-inter">
          Size
        </h3>
        <a
          href="#"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Size Chart &gt;
        </a>
      </div>
      <RadioGroup
        value={selectedSize}
        onChange={setSelectedSize}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-4 gap-4 mt-4 sm:grid-cols-8 lg:grid-cols-8">
          {product.sizes.map((size) => (
            <RadioGroup.Option
              key={size.name}
              value={size}
              disabled={!size.inStock}
              className={({ active }) =>
                classNames(
                  size.inStock
                    ? "cursor-pointer bg-white text-gray-900   shadow-sm"
                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                  active ? "ring-2 ring-indigo-500" : "",
                  "group relative  flex items-center justify-center rounded-md border py-2.5 px-4 text-xs lg:text-sm   font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-4"
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                  {size.inStock ? (
                    <span
                      className={classNames(
                        active ? "border" : "border-2",
                        checked ? "border-indigo-500" : "border-transparent",
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
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default ProductSizes;
