import { PlusSmallIcon } from "@heroicons/react/24/outline";

function ProductFilter({ products, filters }) {
  return (
    <aside>
      <h2 className="sr-only">Filters</h2>

      <button type="button" className="inline-flex   items-center lg:hidden">
        <span className="text-xs  border-b   text-gray-700 font-montserrat">
          Filters
        </span>
        <PlusSmallIcon
          className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </button>

      <div className="hidden lg:block">
        <div className="  p-4 rounded-md shadow-md">
          <div className="mb-4">
            <h2 className="text-xl font-bold pb-2 border-b   text-gray-700 font-montserrat">
              FILTERS
            </h2>

            <div className="mb-4 mt-5">
              <label className="block text-sm font-semibold mb-3        font-roboto tracking-wide">
                Price
              </label>
              <div className="flex items-center space-x-2 font-roboto tracking-wide">
                <span>₹</span>
                <input
                  type="number"
                  placeholder="0"
                  className="border rounded-md p-2 w-1/2"
                />
                <span>to</span>
                <span>₹</span>
                <input
                  type="number"
                  placeholder="3199"
                  className="border rounded-md p-2 w-1/2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold  font-roboto tracking-wide mb-3">
                Sort by
              </label>
              <select className="border rounded-md p-2 mb-5 w-full">
                <option value="newest">Newest</option>
                <option value="price-low-to-high">Price (low to high)</option>
                <option value="price-high-to-low">Price (high to low)</option>
                <option value="name-a-z">Name A-Z</option>
                <option value="name-z-a">Name Z-A</option>
              </select>
            </div>
            <div className="mb-5">
              <form className="divide-y divide-gray-200 space-y-10 flex flex-wrap">
                {filters.map((section, sectionIdx) => (
                  <div key={section.name}>
                    <fieldset className="flex flex-col">
                      <legend className="block text-sm font-roboto tracking-wide   font-semibold  text-gray-900">
                        {section.name}
                      </legend>
                      <div className="mt-1 space-y-4 flex flex-wrap">
                        {section.options.map((option, optionIdx) => (
                          <div
                            key={option.value}
                            className={`flex items-center whitespace-nowrap   font-opensans ${
                              sectionIdx === 0 ? " mr-4 mt-3  " : " mr-6 mb-3 "
                            }
                          `}
                          >
                            <input
                              id={`${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}
              </form>
            </div>

            <div className="mb-4">
              <label className="block text-sm   mb-3 font-roboto tracking-wide    font-semibold  ">
                Shop by Anime
              </label>
              <div className="flex items-center space-x-2 font-opensans  text-sm">
                <input
                  defaultValue={true}
                  type="checkbox"
                  className="h-4 w-4 border-gray-300  bg-gray-700 mr-2 rounded text-indigo-600 focus:ring-indigo-500"
                />{" "}
                {products[0].anime_category_id.title}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ProductFilter;
