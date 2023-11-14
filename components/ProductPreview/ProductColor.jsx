import { classNames } from "@app/product/[id]/page";
import { RadioGroup } from "@headlessui/react";

function ProductColor({ product, selectedColor, setSelectedColor }) {
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
                  `relative -m-0.5 flex cursor-pointer ${
                    color === "black" ? "bg-black" : `bg-${color}-500`
                  } items-center justify-center rounded-full p-0.5 focus:outline-none`
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
