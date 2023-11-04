import Quantity from "@components/Quantity";
import { CheckIcon, ClockIcon, XMarkIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    price: 3210,
    color: "Sienna",
    inStock: true,
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: 3200,
    color: "Black",
    inStock: false,
    leadTime: "3–4 weeks",
    discountPrice: 10,

    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: "Nomad Tumbler",
    href: "#",
    price: 3530,
    color: "White",
    inStock: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
    discountPrice: 10,
    imageAlt: "Insulated bottle with white base and black snap lid.",
  },
];
function CartProduct({}) {
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
          <li key={product.id} className="flex py-6 sm:py-10">
            <div className="flex-shrink-0">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-24 h-24 shadow-md    rounded-md object-center object-cover sm:w-48 sm:h-48"
              />
            </div>

            <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div className="product-details  mt-2  ">
                  <h2 className="products-title text-sm lg:text-[1.05rem] font-cabin    ">
                    Attack on Titans Bracelet
                  </h2>
                  <p className="text-sm lg:text-[0.9rem]    font-satoshi mt-2 lg:mt-3">
                    {product.discountPrice ? (
                      <span>
                        <span className="text-red-500">
                          Rs {product.discountPrice.toFixed(2)}
                        </span>
                        <del className="text-gray-600 ml-3">
                          Rs {product.price.toFixed(2)}
                        </del>
                      </span>
                    ) : (
                      <span>Rs {product.price.toFixed(2)}</span>
                    )}
                  </p>
                </div>
              </div>
              <Quantity border="true" />

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
