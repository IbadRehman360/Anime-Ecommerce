import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { Fragment, useState } from "react";

function Cliently({ navigation }) {
  return (
    <Popover.Group className="hidden z-50 p-5 lg:flex justify-center items-center border-b border-t">
      <div className="flex h-full space-x-10">
        {navigation.categories.map((category) => (
          <Popover key={category.name} className="flex">
            {({ open }) => (
              <>
                <div className="relative flex ">
                  <Popover.Button
                    className={classNames(
                      open
                        ? "   text-indigo-600"
                        : "  text-gray-700 hover:text-gray-800",
                      "relative z-50 -mb-px flex items-center border-none focus:border-none   pt-px text-sm font-medium whitespace-nowrap transition-colors duration-200 ease-out"
                    )}
                  >
                    <a href={category.href} className="flex items-center">
                      {category.icon}
                      <span className="ml-4  font-semibold  font-cabin">
                        {category.name}
                      </span>
                    </a>
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />

                    <div className="relative  z-50 bg-white">
                      <div className="mx-auto max-w-7xl px-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                          <div className="col-start-2  grid grid-cols-2 gap-x-8">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="group relative text-base sm:text-sm"
                              >
                                <Link
                                  href={item.href}
                                  className="mt-6 block font-medium text-gray-900"
                                >
                                  <span
                                    className="absolute inset-0 z-50"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                                <p aria-hidden="true" className="mt-1">
                                  Shop now
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${section.name}-heading`}
                                  className="font-medium text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${section.name}-heading`}
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flex">
                                      <Link
                                        href={item.href}
                                        className="hover:text-gray-800"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
        {navigation.pages.map((page) => (
          <Link
            key={page.name}
            href={page.href}
            className="flex items-center text-sm font-medium text-gray-700 whitespace-nowrap  hover:text-gray-800"
          >
            <p href={page.href} className="flex items-center ">
              {page.icon}
              <span className="ml-4  font-semibold  font-cabin">
                {page.name}
              </span>
            </p>
          </Link>
        ))}
      </div>
    </Popover.Group>
  );
}

export default Cliently;
