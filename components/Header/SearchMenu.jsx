import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SearchMenu({
  searchText,
  setSearchText,
  filteredProducts,
  handleSearchTextChange,
  setFilteredProducts,
}) {
  const searchMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchMenuRef.current &&
        !searchMenuRef.current.contains(event.target)
      ) {
        setSearchText("");
        setFilteredProducts([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchMenuRef, setSearchText, setFilteredProducts]);

  return (
    <div ref={searchMenuRef} className="lg:flex hidden">
      <input
        type="text"
        className="w-72 relative h-11 p-2 pl-12 font-cabin mt-0.5 text-gray-900 border border-gray-500 rounded-full hover:border-none focus:border-blue-50"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="What are you looking for?"
        aria-label="Search products"
      />
      <MagnifyingGlassIcon
        className="absolute   mt-3.5 ml-4 font-bold  h-5 w-5 mr-10 text-gray-500"
        aria-hidden="true"
      />
      {filteredProducts.length > 0 && (
        <div className="  px-3 border-gray-300   bg-white    pt-3  pb-1   text-black   absolute    left-6 2xl:left-52 top-[7.5rem] rounded-lg  border    cursor-pointer z-50   gap-4 grid    divide-y shadow   overflow-y-auto  w-96    max-h-[80vh]   ...">
          <h5 className="font-inter  uppercase "> Products Related </h5>
          <ul>
            {filteredProducts.map((product) => (
              <Link
                onClick={() => {
                  setSearchText("");
                  setFilteredProducts("");
                }}
                href={`/product/${product._id}`}
                key={product._id}
              >
                <li className=" my-2 flex gap-4      mb-2  ">
                  <Image
                    width={84}
                    height={84}
                    className="border object-cover "
                    src={product.images[0]}
                    alt=" "
                  />
                  <div>
                    <p className="mt-2 text-[1rem] line-clamp-1 text-gray-900  font-poppins">
                      {" "}
                      {product.title}
                    </p>
                    <p
                      className="     font-poppins tracking-wide mt-0.5 lg:mt-1"
                      style={{ fontWeight: "500" }}
                    >
                      {product.discount_price ? (
                        <span>
                          <span className="text-red-500">
                            Rs {product.discount_price.toFixed(2)}
                          </span>
                          <del className="text-gray-600 ml-3">
                            Rs {product.price.toFixed(2)}
                          </del>
                        </span>
                      ) : (
                        <>
                          <span className="   text-[1.05rem]  opacity-95  font-poppins tracking-wide mt-0.5 lg:mt-1">
                            Rs {product.price.toFixed(2)}
                          </span>
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
  );
}
