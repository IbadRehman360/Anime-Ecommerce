"use client";
import Link from "next/link";

import { classNames } from "@app/product/[id]/page";
import { Menu, Transition } from "@headlessui/react";
import { HiViewGrid } from "react-icons/hi";
import { Fragment } from "react";
import { BsFilter } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

function Header({ products, sortOptions, setMobileFiltersOpen }) {
  return (
    <div className="relative flex items-baseline justify-between pt-16 pb-6 border-b border-gray-200">
      <h1 className="text-2xl md:text-3xl    font-montserrat tracking-tight text-gray-900">
        {products[0].anime_category_id.title || products[0].category_id.name}
      </h1>

      <div className="flex items-center z-10">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="group inline-flex justify-center  font-opensans gap-0.5 text-sm font-medium text-gray-500 hover:text-gray-600">
              Sort
              <FaAngleDown
                className="flex-shrink-0 -mr-2 mt-[1px] ml-1 h-4 w-4  font-bold text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {sortOptions.map((option) => (
                  <Menu.Item key={option.name}>
                    {({ active }) => (
                      <Link
                        href={option.href}
                        className={classNames(
                          option.current
                            ? "font-medium text-gray-900"
                            : "text-gray-500",
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {option.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <button
          type="button"
          className="p-2 -m-2 ml-5 sm:ml-7  text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View grid</span>
          <HiViewGrid className="w-5 text-gray-400 h-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className="sr-only">Filters</span>
          <BsFilter className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default Header;
