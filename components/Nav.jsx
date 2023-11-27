import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { LiaBoxOpenSolid } from "react-icons/lia";
import Cart from "./Cart";
import SearchMenu from "./Home/SearchMenu";
import Image from "next/image";
import Link from "next/link";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

function Nav({
  setOpen,
  signOut,
  searchText,
  onSearchTextChange,
  onSearchSubmit,
  session,
  cartItems,
  isCartOpen,
}) {
  return (
    <nav aria-label="Top" className="mx-auto   ml-2  mr-3  lg:px-8 2xl:px-60">
      <div className="border-b border-gray-200">
        <div className="flex h-[80px] items-center">
          <button
            type="button"
            className="relative rounded-md border border-gray-300 bg-white p-2 text-gray-400 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex">
            <SearchMenu
              searchText={searchText}
              onSearchTextChange={onSearchTextChange}
              onSearchSubmit={onSearchSubmit}
            />
          </div>
          <div className="flex items-center w-full">
            <div className="ml-4 lg:ml-0 flex items-center ">
              <Link
                href={"/"}
                className="absolute left-1/2 transform    -translate-x-1/2"
              >
                <img
                  src="/assets/AnimeSiteLogo.png"
                  alt="Senpai Merch Logo"
                  layout="responsive"
                  className="w-[4rem] md:w-[4.5rem] "
                />
              </Link>
            </div>
            <div className="flex-grow" />
            <div className=" mr-4 hidden  lg:ml-8 sm:flex">
              <Link
                href="#"
                className="flex items-center text-gray-700 hover:text-gray-800"
              >
                <Image
                  src="/assets/country.png"
                  alt=""
                  width={90}
                  height={90}
                  className="block border-2 border-gray-700 h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-sm font-medium">PKR</span>
                <span className="sr-only">, change currency</span>
              </Link>
            </div>

            <div className="flex lg:hidden lg:ml-8">
              <Link href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon
                  className="h-6 w-6 hidden sm:flex"
                  aria-hidden="true"
                />
              </Link>
            </div>
            {!session ? (
              <div className="hidden lg:flex border-l pl-5 lg:items-center font-inter tracking-wide lg:justify-end lg:space-x-6">
                <Link
                  href="/login"
                  className="text-sm  text-gray-700 hover:text-gray-800 flex items-center"
                >
                  <FaUser className="mr-4" />
                  <span className=" text-gray-600 tracking-wide">
                    Account
                  </span>{" "}
                </Link>
                <span className="h-6 w-px bg-gray-100" aria-hidden="true" />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => signOut()}
                className="hidden lg:flex border-l text-sm     uppercase pl-5 lg:items-center        font-roboto hover:text-gray-600 tracking-wide lg:justify-end lg:space-x-6"
              >
                <FaSignOutAlt className="mr-2" /> logout
              </button>
            )}
            <Link href={"/order"} className=" lg:hidden flex">
              <LiaBoxOpenSolid
                className="h-7 w-7 flex-shrink-0 mr-2 ml-3  text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Link>
            <div className="ml-3 flow-root lg:ml-2">
              <Link
                href={"/cart"}
                className="group -mt-[3px]  lg:ml-4  flex items-center p-21"
              >
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {cartItems.length}
                </span>
                {isCartOpen && <Cart />}
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
