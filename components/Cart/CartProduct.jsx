import Quantity from "@components/Quantity";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../app/Global/Features/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
import EmptyCartMessage from "./EmptyCartMessage";
import { useProductUtils } from "@utils/productUtils";

function CartProduct() {
  const products = useSelector(selectCartItems);
  const { handleRemoveItem } = useProductUtils();

  if (!products.length) {
    return <EmptyCartMessage />;
  }

  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7  ">
      <h2 id="cart-heading" className="sr-only">
        Items in your shopping cart
      </h2>

      <ul
        role="list"
        className="border-t border-b border-gray-200 divide-y divide-gray-200"
      >
        {products.map((product, productIdx) => (
          <li key={product.product._id} className="flex py-6 sm:py-8">
            <div className="flex-shrink-0">
              <img
                src={product.product.images}
                className="w-24 h-24 shadow-md    rounded-md object-center object-cover sm:w-48 sm:h-48"
              />
            </div>

            <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div className="flex">
                  <h2 className="products-title text-sm lg:text-[1.05rem] font-cabin">
                    Attack on Titans Bracelet
                  </h2>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="font-medium -mt-1 text-gray-600 hover:text-gray-500"
                    onClick={() => handleRemoveItem(product.product._id)}
                  >
                    <AiOutlineClose />{" "}
                  </button>
                </div>

                <p className="text-sm lg:text-[0.9rem]    font-satoshi mt-3 lg:mt-4">
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
              </div>
              <Quantity
                quantity={product.quantity}
                product={product}
                border="true"
              />{" "}
              <p className=" mb-3 flex text-sm   font-satoshi  text-gray-700 space-x-2">
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

                <span>
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
