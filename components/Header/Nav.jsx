import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { LiaBoxOpenSolid } from "react-icons/lia";
import Cart from "../Cart";
import SearchMenu from "./SearchMenu";
import Image from "next/image";
import Link from "next/link";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";

function Nav({ setOpen, signOut, session, cartItems, isCartOpen }) {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [mbSearch, setMbSearch] = useState(false);

  useEffect(() => {
    getProductsData();
  }, []);
  const getProductsData = async () => {
    try {
      const response = await fetch("/api/products", {
        next: { revalidate: 10 },
      });

      if (!response.ok) {
        console.log("ERROR: " + response.message);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };
  const handleSearchTextChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    if (searchText.length >= 3) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };
  return (
    <nav aria-label="Top" className="mx-auto      lg:px-8 2xl:px-60">
      <div className="border-b   ml-3  mr-3">
        <div className="flex h-[65px] md:h-[80px] items-center">
          <button
            type="button"
            className="relative rounded-md border border-gray-300 bg-white p-1.5 text-gray-400 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex">
            <SearchMenu
              handleSearchTextChange={handleSearchTextChange}
              filteredProducts={filteredProducts}
              searchText={searchText}
            />
          </div>
          <div className="flex items-center w-full">
            <div className="ml-4 lg:ml-0 flex items-center ">
              <Link
                href={"/"}
                className="absolute left-1/2 transform    -translate-x-1/2"
              >
                <Image
                  src="/assets/AnimeSiteLogo.png"
                  alt="Senpai Merch Logo"
                  width={66}
                  height={66}
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
                  width={30}
                  height={30}
                  className="border  flex-shrink-0 block"
                />
                <span className="ml-3 block text-sm font-medium">PKR</span>
                <span className="sr-only">, change currency</span>
              </Link>
            </div>

            <div className="flex  lg:hidden lg:ml-8">
              <Link
                href="#"
                onClick={() => setMbSearch((prevMbSearch) => !prevMbSearch)}
                className="p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon
                  className="h-6 w-6   flex"
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
            <Link href={"/track-order"} className=" hidden lg:pl-4 lg:flex">
              <LiaBoxOpenSolid
                className="h-7 w-7  hide-using-css  flex-shrink-0 mr-2 ml-4 mb-0.5    text-gray-400 group-hover:text-gray-500"
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
      {mbSearch && (
        <div
          class="  w-full border  lg:hidden flex  bg-white shadow-xl"
          id="search-content"
        >
          <MagnifyingGlassIcon
            className="  mt-4 ml-3 mr-2     font-bold  h-5 w-5  text-gray-900"
            aria-hidden="true"
          />
          <div class="     py-2    w-full    px-0 text-black">
            <input
              id="searchfield"
              type="search"
              value={searchText}
              onChange={handleSearchTextChange}
              placeholder="What are you looking for?"
              autofocus="autofocus"
              class="w-full text-gray-900 font-poppins text-[0.9rem] pr-4 transition focus:outline-none focus:border-transparent py-2 appearance-none leading-normal    "
            />
          </div>
          {filteredProducts.length > 0 && (
            <div className=" grid     text-black   absolute     w-full  top-[11.45rem]  rounded-b-sm   pt-4  pl-2      cursor-pointer z-50   gap-4     divide-y shadow   overflow-y-auto bg-white ...">
              <h5 className="font-inter  uppercase text-sm">
                {" "}
                Products Related{" "}
              </h5>
              <ul>
                {filteredProducts.map((product) => (
                  <Link href={`/product/${product._id}`} key={product._id}>
                    <li className=" flex gap-4  border-b  py-2    pb-2  ">
                      <Image
                        width={80}
                        height={80}
                        alt=""
                        src={product.images[0]}
                        className="rounded-md"
                      />
                      <div>
                        <p className="mt-2 text-[0.9rem]  line-clamp-3  font-poppins">
                          {" "}
                          {product.title}
                        </p>
                        <p className="    font-opensans   line-clamp-1 tracking-wide mt-0.5 lg:mt-0.5">
                          {product.discount_price ? (
                            <span>
                              <span className="text-red-600">
                                Rs {product.discount_price.toFixed(2)}
                              </span>
                              <del className="text-gray-600 ml-3">
                                Rs {product.price.toFixed(2)}
                              </del>
                            </span>
                          ) : (
                            <>
                              <span>Rs {product.price.toFixed(2)}</span>
                              <div className="w-10 h-5  "> </div>
                            </>
                          )}
                        </p>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Nav;
