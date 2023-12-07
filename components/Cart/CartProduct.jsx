import Quantity from "@components/Quantity";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../app/Global/Features/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
import EmptyCartMessage from "./EmptyCartMessage";
import { useProductUtils } from "@utils/productUtils";
import Image from "next/image";

function CartProduct() {
  const products = useSelector(selectCartItems);
  const { handleRemoveItem } = useProductUtils();

  if (!products.length) {
    return <EmptyCartMessage />;
  }

  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7  ">
      <ul
        role="list"
        className="border-t border-b border-gray-200 divide-y divide-gray-200"
      >
        {products.map((product, productIdx) => (
          <li key={productIdx} className="flex py-6 sm:py-8">
            <div className="flex-shrink-0">
              <Image
                width={100}
                height={100}
                src={product.product.images}
                className="w-28 h-28 shadow-md    rounded-md object-center object-cover sm:w-48 sm:h-48"
                alt=""
              />
            </div>

            <div className=" flex-1 flex flex-col justify-between ml-5 sm:ml-8  ">
              <div className="relative flex">
                <div className="flex-grow mt-0.5 sm:mt-1">
                  <h2 className="text-[0.89rem]  font-poppins  line-clamp-1 sm:text-base font-medium text-gray-800">
                    {product.size} - {product.product.title}
                  </h2>
                </div>
                <div className="flex pl-5 justify-end">
                  <button
                    type="button"
                    className="font-medium text-gray-600 hover:text-gray-500"
                    onClick={() => handleRemoveItem(product.product._id)}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>

              <div className=" ">
                <p className="  text-[0.7rem] hidden sm:flex uppercase tracking-wider  font-lato text-gray-500">
                  color: {product.color}
                </p>
                <p className="    text-[0.7rem] hidden sm:flex   uppercase tracking-wider mt-1.5 font-lato text-gray-500">
                  Size - {product.size}
                </p>
              </div>
              <div>
                <p className="text-sm lg:text-[0.95rem]  line-clamp-1 mt-2 sm:mt-1  sm:mb-1   font-satoshi ">
                  {product.product.discount_price ? (
                    <span>
                      <span className="text-red-600">
                        Rs {product.product.discount_price.toFixed(2)}
                      </span>
                      <del className="text-gray-700 ml-3">
                        Rs {product.product.price.toFixed(2)}
                      </del>
                    </span>
                  ) : (
                    <span>Rs {product.product.price.toFixed(2)}</span>
                  )}
                </p>
                <Quantity quantity={product.quantity} product={product} />{" "}
              </div>
              <p className=" mb-3 flex text-[0.8rem] sm:text-sm   mt-2 sm:mt-1  font-satoshi  text-gray-700 space-x-2">
                {product.inStock ? (
                  <CheckIcon
                    className="flex-shrink-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ClockIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                    aria-hidden="true"
                  />
                )}

                <span className="line-clamp-1 ">
                  {product.inStock
                    ? "In stock"
                    : `Ships in ${product.leadTime}`}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CartProduct;
