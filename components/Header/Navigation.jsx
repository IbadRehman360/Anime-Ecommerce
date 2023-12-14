import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

function Navigation({ navigation }) {
  return (
    <>
      {navigation.category.map((page, index) => (
        <Popover key={page.name} className="relative z-10 inline-block">
          {({ open }) => (
            <>
              <Popover.Button className="flex items-center cursor-pointer bg-white text-sm font-medium text-gray-600 whitespace-nowrap tracking-wider hover:text-gray-800">
                {page.icon}
                <span className="ml-4 font-inter">{page.name}</span>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Panel
                  static
                  className={`bg-white border-gray-300 absolute mt-5 pt-4     ${
                    index === 0
                      ? "w-48 pr-2   border-t     -left-6"
                      : "w-auto pr-5    ml-3 "
                  }  overflow-y-auto   max-h-[75vh]    border grid space-y-2.5 pb-4 text-lg`}
                >
                  {page.list &&
                    page.list.map((item) => (
                      <Link key={item.id} href={`/category/${item.id}`}>
                        <div className="ml-4  text-gray-600 text-[1.04rem] font-poppins hover:text-black">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ))}
    </>
  );
}

export default Navigation;
