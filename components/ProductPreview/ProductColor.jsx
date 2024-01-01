import classNames from "classnames";
import { RadioGroup } from "@headlessui/react";

function ProductColor({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
}) {
  if (!selectedColor) {
    return null;
  }

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
    <div>
      <h3 className="text-sm font-semibold text-gray-700 font-inter">
        Color{" "}
        <span className="ml-0.5">
          {selectedColor &&
            selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}{" "}
        </span>
      </h3>
      <RadioGroup
        value={selectedColor}
        onChange={setSelectedColor}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
        <div className="flex items-center space-x-3">
          {(product?.stock?.colorswithsize &&
          Object.keys(product.stock.colorswithsize).length > 0
            ? Object.keys(product.stock.colorswithsize)
            : Object.keys(product?.stock?.colors) || []
          ).map((color) => (
            <RadioGroup.Option
              key={color}
              value={color}
              disabled={
                hasNoQuantityInAllSizes(color, product.stock) ||
                (product.stock.colors &&
                  product.stock.colors[color]?.quantity <= 0)
              }
              className={({ active, checked }) =>
                classNames(
                  active && checked ? "ring ring-offset-1" : "",
                  !active && checked ? "ring-2" : "",
                  hasNoQuantityInAllSizes(color, product.stock)
                    ? "cursor-not-allowed bg-gray-200 p-1"
                    : "",
                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
                  product.stock.colors &&
                    product.stock.colors[color]?.quantity <= 0
                    ? "opacity-40   ring ring-offset-1"
                    : "",
                  getColorClass(color)
                )
              }
            >
              <RadioGroup.Label as="span" className="sr-only">
                {color}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={classNames(
                  product.stock.colors &&
                    product.stock.colors[color].quantity <= 0
                    ? `bg-${color}-100 opacity-40`
                    : `bg-${color}-500  opacity-40`,
                  hasNoQuantityInAllSizes(color, product.stock)
                    ? "opacity-40"
                    : " ",
                  "h-8 w-8 rounded-full border border-black border-opacity-10 relative"
                )}
              >
                {((product.stock.colors &&
                  product.stock.colors[color]?.quantity <= 0) ||
                  hasNoQuantityInAllSizes(color, product.stock)) && (
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
  );
}

export default ProductColor;
