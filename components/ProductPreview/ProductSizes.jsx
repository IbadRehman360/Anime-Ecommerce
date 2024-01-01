"use client";
import { classNames } from "@app/product/[id]/page";
import { RadioGroup } from "@headlessui/react";
import SizeChart from "./SizeChart";

function ProductSizes({
  product,
  selectedColor,
  selectedSize,
  setSelectedSize,
}) {
  if (!selectedSize) return;
  return (
    <div className="mt-6">
      <SizeChart selectedSize={selectedSize} />
      <RadioGroup
        value={selectedSize}
        onChange={setSelectedSize}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-4 gap-4 mt-4 sm:grid-cols-8 lg:grid-cols-8">
          {product.stock?.sizes ||
          product.stock?.colorswithsize[selectedColor] ? (
            Object.keys(
              product.stock?.sizes ||
                product.stock?.colorswithsize[selectedColor]
            ).map((sizeName) => {
              const size = product.stock?.sizes
                ? product.stock?.sizes[sizeName]
                : product.stock?.colorswithsize[selectedColor][sizeName];
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
                      active ? "ring-2 ring-indigo-500" : "",
                      "group relative flex items-center justify-center rounded-md border py-3 px-4 text-xs lg:text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-4"
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <RadioGroup.Label as="span">{sizeName}</RadioGroup.Label>
                      {isAvailable ? (
                        <span
                          className={classNames(
                            active ? "border" : "border-2",
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
  );
}

export default ProductSizes;
