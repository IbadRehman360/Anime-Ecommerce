import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { classNames } from "@app/products/page";

function ProductMobileFilters({ filters }) {
  return (
    <form className="mt-4">
      {filters.map((section) => (
        <Disclosure
          as="div"
          key={section.name}
          className="border-t border-gray-200 pt-4 pb-4"
        >
          {({ open }) => (
            <fieldset>
              <legend className="w-full px-2">
                <Disclosure.Button className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500">
                  <span className="text-sm font-medium text-gray-900">
                    {section.name}
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <ChevronDownIcon
                      className={classNames(
                        open ? "-rotate-180" : "rotate-0",
                        "h-5 w-5 transform"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </legend>
              <Disclosure.Panel className="pt-4 pb-2 px-4">
                <div className="space-y-6">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`${section.id}-${optionIdx}-mobile`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`${section.id}-${optionIdx}-mobile`}
                        className="ml-3 text-sm text-gray-500"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </fieldset>
          )}
        </Disclosure>
      ))}
    </form>
  );
}

export default ProductMobileFilters;
