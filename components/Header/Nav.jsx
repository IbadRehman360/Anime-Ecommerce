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
import { useRouter } from "next/router";

function Nav({ setOpen, signOut, session, cartItems, isCartOpen }) {
  const [products, setProducts] = useState([]);
  const [mbSearch, setMbSearch] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const router = useRouter;
  useEffect(() => {
    setFilteredProducts([]);
  }, [router.asPath]);

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
              setFilteredProducts={setFilteredProducts}
              setSearchText={setSearchText}
            />
          </div>
          <div className="flex items-center w-full">
            <div className="ml-4 lg:ml-0 flex items-center ">
              <Link
                href={"/"}
                className="absolute left-1/2 transform    -translate-x-1/2"
              >
                <Image
                  src="/assets/AnimeSiteLogo.webp"
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
                  src="/assets/country.webp"
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
                className="hidden lg:flex border-l text-sm   mt-1   uppercase pl-5 lg:items-center          font-roboto hover:text-gray-400 tracking-wide lg:justify-end lg:space-x-6"
              >
                <FaSignOutAlt className="mr-2 mb-0.5" /> logout
              </button>
            )}
            <Link href={"/track-order"} className=" hidden lg:pl-4 lg:flex">
              <LiaBoxOpenSolid
                className="h-7 w-7  hide-using-css  flex-shrink-0 mr-2 ml-4     text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Link>
            <div className="ml-3 flow-root lg:ml-2">
              <Link
                href={"/cart"}
                className="group    lg:ml-4  flex items-center p-21"
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
          class=" z-40   w-full border   lg:hidden flex     "
          id="search-content"
        >
          <MagnifyingGlassIcon
            className="  mt-4 ml-3 mr-2     font-bold  h-5 w-5  text-gray-900"
            aria-hidden="true"
          />
          <div class=" z-40    py-2  bg-white   w-full    px-0 text-black">
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
            <div className=" grid  z-40    text-black   absolute     border w-full md:top-[11.5rem] top-[10rem]  rounded-b-sm      pl-2      cursor-pointer         divide-y shadow   overflow-y-auto bg-white ...">
              <h5 className="font-inter py-4 bg-gray-50  opacity-80    uppercase text-sm">
                {" "}
                Products Related{" "}
              </h5>
              <ul>
                {filteredProducts.map((product) => (
                  <Link href={`/product/${product._id}`} key={product._id}>
                    <li className=" pr-4 flex gap-4  border-b  py-2    pb-2  ">
                      <Image
                        width={80}
                        height={80}
                        alt=""
                        src={product.images[0]}
                        className="rounded-md border p-0.5"
                      />
                      <div>
                        <p className="mt-2 text-[0.94rem]  line-clamp-3  font-poppins">
                          {" "}
                          {product.title}
                        </p>
                        <p className="font-opensans line-clamp-1 tracking-wide mt-0.5 lg:mt-0.5">
                          {product.stock ? (
                            <>
                              {product.stock.colorswithsize ? (
                                <>
                                  {Object.entries(
                                    product.stock.colorswithsize
                                  ).map(([color, sizes], index) => {
                                    if (index === 0) {
                                      const firstSizeKey =
                                        Object.keys(sizes)[0];
                                      const firstSizeDetails =
                                        sizes[firstSizeKey];
                                      return (
                                        <span key={`${color}-${firstSizeKey}`}>
                                          {firstSizeDetails.discount_price >
                                          0 ? (
                                            <span>
                                              <span className="text-red-600">
                                                Rs{" "}
                                                {firstSizeDetails.discount_price.toFixed(
                                                  2
                                                )}
                                              </span>
                                              <del className="text-gray-600 ml-3">
                                                Rs{" "}
                                                {firstSizeDetails.price.toFixed(
                                                  2
                                                )}
                                              </del>
                                            </span>
                                          ) : (
                                            <>
                                              <span>
                                                Rs{" "}
                                                {firstSizeDetails.price.toFixed(
                                                  2
                                                )}
                                              </span>
                                              <div className="w-10 h-5"> </div>
                                            </>
                                          )}
                                        </span>
                                      );
                                    }
                                    return null;
                                  })}
                                </>
                              ) : product.stock.sizes ? (
                                <>
                                  {Object.entries(product.stock.sizes).map(
                                    ([size, details], index) =>
                                      index === 0 ? (
                                        <span key={size}>
                                          {details.discount_price > 0 ? (
                                            <span>
                                              <span className="text-red-600">
                                                Rs{" "}
                                                {details.discount_price.toFixed(
                                                  2
                                                )}
                                              </span>
                                              <del className="text-gray-600 ml-3">
                                                Rs {details.price.toFixed(2)}
                                              </del>
                                            </span>
                                          ) : (
                                            <>
                                              <span>
                                                Rs {details.price.toFixed(2)}
                                              </span>
                                              <div className="w-10 h-5"> </div>
                                            </>
                                          )}
                                        </span>
                                      ) : null
                                  )}
                                </>
                              ) : product.stock.colors ? (
                                <>
                                  {Object.entries(product.stock.colors).map(
                                    ([color, details], index) =>
                                      index === 0 ? (
                                        <span key={color}>
                                          {details.discount_price > 0 ? (
                                            <span>
                                              <span className="text-red-600">
                                                Rs{" "}
                                                {details.discount_price.toFixed(
                                                  2
                                                )}
                                              </span>
                                              <del className="text-gray-600 ml-3">
                                                Rs {details.price.toFixed(2)}
                                              </del>
                                            </span>
                                          ) : (
                                            <>
                                              <span>
                                                Rs {details.price.toFixed(2)}
                                              </span>
                                              <div className="w-10 h-5"> </div>
                                            </>
                                          )}
                                        </span>
                                      ) : null
                                  )}
                                </>
                              ) : (
                                <>
                                  {product.stock.discount_price > 0 ? (
                                    <span>
                                      <span className="text-red-600">
                                        Rs{" "}
                                        {product.stock.discount_price.toFixed(
                                          2
                                        )}
                                      </span>
                                      <del className="text-gray-600 ml-3">
                                        Rs {product.stock.price.toFixed(2)}
                                      </del>
                                    </span>
                                  ) : (
                                    <>
                                      <span>
                                        Rs {product.stock.price.toFixed(2)}
                                      </span>
                                      <div className="w-10 h-5"> </div>
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          ) : null}
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
