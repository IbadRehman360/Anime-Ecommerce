import { classNames } from "@app/product/[id]/page";
import { RadioGroup } from "@headlessui/react";

function ProductColor({ product, selectedColor, setSelectedColor }) {
  function getColorClass(color) {
    const colorMap = {
      orange: "bg-orange-500",
      red: "bg-red-500",
      pink: "bg-pink-500",
      yellow: "bg-yellow-500",
      black: "bg-black-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      indigo: "bg-indigo-500",
      teal: "bg-teal-500",
      gray: "bg-gray-500",
      amber: "bg-amber-500",
      lime: "bg-lime-500",
      cyan: "bg-cyan-500",
      emerald: "bg-emerald-500",
      rose: "bg-rose-500",
      violet: "bg-violet-500",
      blueGray: "bg-blueGray-500",
      coolGray: "bg-coolGray-500",
      trueGray: "bg-trueGray-500",
      warmGray: "bg-warmGray-500",
      lightBlue: "bg-lightBlue-500",
      fuchsia: "bg-fuchsia-500",
    };

    return colorMap[color] || "";
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-700 font-inter">Color</h3>
      <RadioGroup
        value={selectedColor}
        onChange={setSelectedColor}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
        <div className="flex items-center space-x-3">
          {product.colors.map((color) => (
            <RadioGroup.Option
              key={color}
              value={color}
              className={({ active, checked }) =>
                classNames(
                  active && checked ? "ring ring-offset-1" : "",
                  !active && checked ? "ring-2" : "",
                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
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
                  color === "black" ? "bg-black" : `bg-${color}-500`,
                  "h-8 w-8 rounded-full border border-black border-opacity-10"
                )}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default ProductColor;
