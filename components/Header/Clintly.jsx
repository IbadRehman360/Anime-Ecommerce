"use client";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { Fragment } from "react";

function Cliently({ navigation }) {
  const [hoveredPage, setHoveredPage] = useState(null);
  const [isCursorOverList, setIsCursorOverList] = useState(false);

  return (
    <Popover.Group className="hidden z-20 p-5    lg:flex justify-center items-center  border   border-gray-500  ">
      <div className="flex h-full space-x-10">
        {navigation.categories.map((category) => (
          <Popover key={category.name} className="flex">
            {({ open }) => (
              <>
                <div className="relative flex ">
                  <Popover.Button
                    className={classNames(
                      open
                        ? "   text-black"
                        : "  text-gray-600 hover:text-gray-800",
                      "relative z-20 -mb-px flex items-center border-none focus:border-none   pt-px text-sm font-medium whitespace-nowrap transition-colors duration-200 ease-out"
                    )}
                  >
                    <a href={category.href} className="flex items-center">
                      {category.icon}
                      <span className="ml-4 font-inter">{category.name}</span>
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
                  <Popover.Panel className="absolute inset-x-0 top-full text-sm  text-gray-500">
                    <div className="relative z-20 rounded-sm bg-white">
                      <div className="mx-auto max-w-7xl px-8">
                        <div className="grid grid-cols-3  gap-y-10  pb-6 pt-8">
                          <div className="row-start-1 col-span-2 grid grid-cols-4  -space-x-2   text-sm">
                            {category.sections.map((section) => (
                              <div key={section.name} className=" ">
                                <p
                                  id={`${section.name}-heading`}
                                  className="font-medium    font-raleway  tracking-wide      text-gray-900"
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
                                        href={`/category/${item.id}`}
                                        className="hover:text-gray-800  font-poppins"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="row-start-1 grid grid-cols-2          gap-x-8 text-sm">
                            {category.featured.map((item) => (
                              <div key={item.name} className="col-span-1">
                                <div className="aspect-w-1 aspect-h-1 rounded-lg relative bg-gray-100 overflow-hidden   flex items-center justify-center">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-center object-cover opacity-90   h-48 w-full"
                                  />
                                  <div className="absolute inset-0 bg-black opacity-40  hover:opacity-60"></div>
                                  <div className="absolute mt-2 text-white   font-medium   font-poppins tracking-widest">
                                    {item.buttonTitle}
                                  </div>
                                  <div className="absolute mt-10 text-white   font-medium   font-poppins tracking-widest">
                                    <p
                                      href="#"
                                      className="-mb-16 ml-1  text-xs   bg-white opacity-90 text-black px-2 p-1"
                                    >
                                      <Link href={item.href}>
                                        {item.buttonMsg}
                                      </Link>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
        {navigation.category.map((page) => (
          <div
            key={page.name}
            className="relative z-20 inline-block bg-white text-sm font-medium text-gray-600 whitespace-nowrap tracking-wider hover:text-gray-800"
            onMouseEnter={() => {
              setHoveredPage(page);
              setIsCursorOverList(true);
            }}
            onMouseLeave={() => {
              if (!isCursorOverList) {
                setHoveredPage(null);
              }
            }}
          >
            <Link href={page.href} className="flex items-center">
              {page.icon}
              <span className="ml-4 font-inter">{page.name}</span>
            </Link>

            {hoveredPage === page && isCursorOverList && (
              <div
                onMouseEnter={() => {
                  setIsCursorOverList(true);
                }}
                onMouseLeave={() => {
                  setIsCursorOverList(false);
                }}
                className={`  ${
                  page.list
                    ? "bg-white border-gray-300 absolute mt-5 border-t pt-4 pr-6 -left-6 pb-5 border grid space-y-3"
                    : ""
                }`}
              >
                {page.list &&
                  page.list.map((item) => (
                    <Link href={"/category/" + item.id} key={item.id}>
                      <div className="ml-6 text-gray-600 text-[1rem] font-poppins hover:text-black">
                        {item.name}
                      </div>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        ))}

        {navigation.pages.map((page) => (
          <div
            key={page.name}
            className="z-20 inline-block bg-white text-sm font-medium text-gray-600 whitespace-nowrap tracking-wider hover:text-gray-800"
          >
            <Link href={page.href} className="flex items-center">
              {page.icon}
              <span className="ml-4 font-inter">{page.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </Popover.Group>
  );
}

export default Cliently;
