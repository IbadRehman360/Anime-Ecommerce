"use client";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { Fragment } from "react";
import Navigation from "./Navigation";

function Cliently({ navigation }) {
  return (
    <Popover.Group className="hidden z-20 p-5    lg:flex justify-center items-center  border    border-gray-500  ">
      <div className="flex h-full space-x-10">
        {navigation.categories.map((category) => (
          <Popover key={category.name} className="flex">
            {({ open, close }) => (
              <>
                <div className="relative flex">
                  <Popover.Button
                    className={classNames(
                      open ? "text-black" : "text-gray-600 hover:text-gray-800",
                      "relative z-20 -mb-px flex items-center border-none focus:border-none pt-px text-sm font-medium whitespace-nowrap transition-colors duration-200 ease-out"
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
                  <Popover.Panel className="absolute inset-x-0 top-full text-sm border-b text-gray-500">
                    <div className="relative z-20 rounded-sm bg-white">
                      <div className="mx-auto max-w-7xl px-8 ">
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
                                  onClick={() => {
                                    close();
                                  }}
                                  aria-labelledby={`${section.name}-heading`}
                                  className="mt-6 text-[0.92rem] space-y-6 sm:mt-4 sm:space-y-4"
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
                          <div className="row-start-1 grid grid-cols-2 gap-x-8 text-sm">
                            {category.featured.map((item) => (
                              <div key={item.name} className="col-span-1">
                                <div
                                  onClick={() => {
                                    close();
                                  }}
                                  className="aspect-w-1 aspect-h-1 rounded-lg relative bg-gray-100 overflow-hidden   flex items-center justify-center"
                                >
                                  <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    width={400}
                                    height={400}
                                    className="object-center object-cover opacity-90    "
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
        <Navigation navigation={navigation} />

        {navigation.pages.map((page) => (
          <div
            key={page.name}
            className="z-10 inline-block bg-white text-sm font-medium text-gray-600 whitespace-nowrap tracking-wider hover:text-gray-800"
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
