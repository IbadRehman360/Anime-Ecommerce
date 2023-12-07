"use client";
import { classNames } from "@app/product/[id]/page";
import { Fragment } from "react";
import Image from "next/image";

function OrderDisplay({ data }) {
  const product = Array.isArray(data) ? data : [data];
  const subtotal = product
    .map((product) => {
      return product.items.map((item) => {
        const price = item.discounted_price || item.price;
        const quantity = item.quantity || 1;
        return price * quantity;
      });
    })
    .flat()
    .reduce((total, productTotal) => total + productTotal, 0);

  const shippingCost = 149.99;
  const taxRate = 0.08;

  const shipping = shippingCost;
  const tax = subtotal * taxRate;

  const totalAmount = subtotal + shipping + tax;

  return (
    <>
      <div className="px-4 space-y-2 sm:px-0 sm:flex  sm:items-baseline sm:justify-between sm:space-y-0">
        <div className="flex sm:items-baseline sm:space-x-4">
          <h1 className="text-2xl font-montserrat sm:text-3xl mt-3 tracking-wide text-black">
            Order #54879
          </h1>
          <a
            href="#"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block"
          >
            View invoice<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="text-sm text-gray-600 line-clamp-1   sm:w-60  lg:w-72 ">
          <span className="mr-1">
            {" "}
            {product.length > 1 ? "Orders placed at" : "Order placed at"}{" "}
          </span>
          {product.map((order) => (
            <Fragment key={order.id}>
              <time
                dateTime={order.createdAt}
                className="font-medium text-gray-900   "
              >
                - {new Date(order.createdAt).toLocaleDateString()}{" "}
              </time>
            </Fragment>
          ))}
        </div>

        <a
          href="#"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:hidden"
        >
          View invoice<span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
      <section aria-labelledby="products-heading" className="mt-6">
        <h2 id="products-heading" className="sr-only">
          Products purchased
        </h2>

        <div className="space-y-8  shadow-md">
          {product.map((order) => (
            <div
              key={order._id}
              className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg"
            >
              {order.items.map((product, index) => (
                <div
                  key={product._id}
                  className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8"
                >
                  <div className="sm:flex lg:col-span-7">
                    <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                      <Image
                        width={400}
                        height={400}
                        src={product.product_id.images[0]}
                        alt={product.product_id.title}
                        className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                      />
                    </div>

                    <div className="mt-6 sm:mt-0 sm:ml-6">
                      <h3 className="text-base font-medium text-gray-900">
                        <a href="#">
                          {" "}
                          <span className="text-gray-600   text-sm tracking-wider font-lato">
                            {" "}
                            QTY {product.quantity}{" "}
                          </span>{" "}
                          - {product.product_id.title}
                        </a>
                      </h3>
                      <p className=" text-[0.9rem] sm:text-sm      font-roboto   tracking-wider mt-1.5">
                        {product.discounted_price ? (
                          <span>
                            <span className="text-red-500">
                              Rs {product.discounted_price.toFixed(2)}
                            </span>
                            <del className="text-gray-600 ml-3">
                              Rs {product.price.toFixed(2)}
                            </del>
                          </span>
                        ) : (
                          <span>Rs {product.price.toFixed(2)}</span>
                        )}
                      </p>
                      <p className="  text-[0.7rem]   uppercase tracking-wider mt-2     font-poppins text-gray-600">
                        color: {product.color} / Size {product.size}
                      </p>

                      <p className="mt-2 hidden md:flex text-[0.8rem]   font-poppins  leading-5    text-gray-500">
                        {product.product_id.description
                          .split(" ")
                          .slice(0, 24)
                          .join(" ")}
                      </p>
                      <p className="mt-2 flex md:hidden text-[0.75rem]   font-poppins  leading-5    text-gray-500">
                        {product.product_id.description
                          .split(" ")
                          .slice(0, 18)
                          .join(" ")}
                        .
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:col-span-5    font-poppins     line-clamp-1">
                    {index === 0 && (
                      <dl className="grid grid-cols-2 gap-x-6   text-sm line-clamp-1">
                        <div>
                          <dt className="font-medium text-gray-900">
                            Delivery address
                          </dt>
                          <dd className="mt-3  text-[0.8rem] text-gray-500 space-y-2 line-clamp-1">
                            <span className="block  line-clamp-1">
                              {order.customer.address}
                            </span>
                            <span className="   line-clamp-1">
                              {order.customer.apartment}
                            </span>
                            <span className="   line-clamp-1">
                              {order.customer.city}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-900">
                            Shipping updates
                          </dt>
                          <dd className="mt-3   text-[0.82rem]  tracking-wider text-gray-500 space-y-2 line-clamp-3">
                            <p>{order.customer.email_address}</p>
                            <p>{order.customer.phone}</p>
                            <p>{order.customer.secondPhone}</p>
                          </dd>
                        </div>
                      </dl>
                    )}
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-200  py-6 px-4 sm:px-6 lg:p-8">
                <h4 className="sr-only">Status</h4>
                <p className="text-sm font-medium text-gray-900">
                  {order.status} on{"  "}
                  <time dateTime={order.createdAt}>
                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </p>
                <div className="mt-6" aria-hidden="true">
                  <div className="bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-indigo-600 rounded-full"
                      style={{
                        width: `calc((${product.step} * 2 + 1) / 8 * 100%)`,
                      }}
                    />
                  </div>
                  <div className="hidden sm:grid grid-cols-4 text-sm font-medium text-gray-600 mt-6">
                    <div className="text-indigo-600">Order placed</div>
                    <div
                      className={classNames({
                        "text-indigo-600": product.step > 0,
                        "text-center": true,
                      })}
                    >
                      Processing
                    </div>
                    <div
                      className={classNames({
                        "text-indigo-600": product.step > 1,
                        "text-center": true,
                      })}
                    >
                      Shipped
                    </div>
                    <div
                      className={classNames({
                        "text-indigo-600": product.step > 2,
                        "text-right": true,
                      })}
                    >
                      Delivered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="summary-heading"
        className="md:mt-10 lg:mt-16       "
      >
        <h2 className="sr-only">Billing Summary</h2>

        <div className="bg-gray-50 py-6 px-4 sm:px-6   shadow-md sm:rounded-lg border border-gray-300 ">
          <dl className="mt-8 divide-y font-satoshi tracking-wide divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
            <div className="pb-4 flex items-center justify-between">
              <dt className="text-gray-600">Subtotal</dt>
              <dd className="font-medium text-gray-800">
                Rs {subtotal.toFixed(2)}
              </dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Shipping</dt>
              <dd className="font-medium text-gray-800">
                Rs {shipping.toFixed(2)}{" "}
              </dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Tax</dt>
              <dd className="font-medium  text-gray-800">
                Rs {tax.toFixed(2)}{" "}
              </dd>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <dt className="font-medium text-gray-900">Order total</dt>
              <dd className="font-medium text-indigo-600">
                Rs {totalAmount.toFixed(2)}{" "}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}

export default OrderDisplay;
