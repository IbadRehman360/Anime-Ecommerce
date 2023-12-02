import { Dialog, Tab, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { classNames } from "@app/product/[id]/page";

function HeaderTransition({ setOpen, open, navigation, session }) {
  const [hoveredPage, setHoveredPage] = useState(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative  z-20 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white   shadow-xl">
              <div className="flex px-4   pt-5">
                <button
                  type="button"
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <Tab.Group as="div" className=" ">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex space-x-8 px-4">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "border-gray-700 text-gray-900"
                              : "border-transparent text-gray-900",
                            "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>

                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="space-y-10 px-4 pb-8 pt-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-50 group-hover:opacity-75">
                              <Image
                                src={item.imageSrc}
                                width={50}
                                height={50}
                                alt={item.imageAlt}
                                className="w-full  object-center"
                              />
                            </div>
                            <Link
                              href={item.href}
                              className="mt-3    block font-medium line-clamp-1 text-gray-900"
                            >
                              <span
                                className="absolute  inset-0 z-10"
                                aria-hidden="true"
                              />
                              <p className="line-clamp-1 font-raleway tracking-wider">
                                {item.name}
                              </p>
                            </Link>
                            <p
                              aria-hidden="true"
                              className="mt-1  font-poppins"
                            >
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>

                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium text-gray-900 "
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <Link
                                  href={`/category/${item.id}`}
                                  className="-m-2 block p-2  font-poppins text-gray-800 hover:text-gray-800"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="space-y-6 border-t border-gray-200   text-gray-700 px-4   py-6">
                {navigation.pages.map((page) => (
                  <div
                    key={page.name}
                    className="relative flow-root          bg-white text-sm    whitespace-nowrap tracking-wider hover:text-gray-800"
                    onMouseEnter={() => setHoveredPage(page)}
                    onMouseLeave={() => setHoveredPage(null)}
                  >
                    <div />
                    <Link href={"#"} className="flex text-sm   items-center">
                      {page.icon}

                      <span className="ml-4   font-opensans ">{page.name}</span>
                    </Link>
                    {hoveredPage === page && page.list && (
                      <div className="absolute  z-50   mt-5 border-t pt-4  pr-8 pb-5 border border-gray-300 font-poppins  bg-white space-y-3">
                        {page.list.map((item) => (
                          <div
                            href=""
                            key={item.id}
                            className="ml-6   text-black hover:text-gray-800"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {!session ? (
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="     lg:items-center font-satoshi tracking-wide lg:justify-end lg:space-x-6">
                    <Link
                      href="/login"
                      className="text-sm  text-gray-700 hover:text-gray-800 flex items-center"
                    >
                      <FaUser className="mr-4" />
                      <span className=" text-gray-600 tracking-wide">
                        Account
                      </span>{" "}
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>
                </div>
              ) : (
                <div className="space-y-6 border-t   border-gray-200 px-4 py-6">
                  <div className="     lg:items-center font-satoshi tracking-wide lg:justify-end lg:space-x-6">
                    <Link
                      href="/login"
                      className="text-sm   font-poppins text-black hover:text-gray-800 flex items-center"
                    >
                      <FaUser className="mr-4" />
                      <button
                        type="button"
                        onClick={() => {
                          setToggleDropdown(false);
                          signOut();
                        }}
                        className="    "
                      >
                        Sign Out
                      </button>
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>
                </div>
              )}

              <div className="border-t pb-6  border-gray-200 px-4 py-6">
                <Link href="#" className="-m-2 flex items-center p-2">
                  <Image
                    src="/assets/country.png"
                    alt=""
                    width={50}
                    height={50}
                    className="block h-auto w-5 flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-gray-900">
                    PKR
                  </span>
                  <span className="sr-only">, change currency</span>
                </Link>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default HeaderTransition;
