"use client";
import { classNames } from "@app/product/[id]/page";
import { Fragment } from "react";

function OrderDisplay({ data }) {
  const product = data;

  return (
    <>
      <div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
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
        <p className="text-sm text-gray-600">
          Order placed{" "}
          {data.map((order) => (
            <Fragment key={order.id}>
              <time
                dateTime={order.createdAt}
                className="font-medium text-gray-900"
              >
                {" "}
                - {new Date(order.createdAt).toLocaleDateString()}{" "}
              </time>
            </Fragment>
          ))}
        </p>

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

        <div className="space-y-8">
          {data.map((order) => (
            <div
              key={order._id}
              className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg"
            >
              {order.items.map((product) => (
                <div
                  key={product._id}
                  className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8"
                >
                  <div className="sm:flex lg:col-span-7">
                    <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                      <img
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
                        {product.product_id.discount_price ? (
                          <span>
                            <span className="text-red-500">
                              Rs {product.product_id.discount_price.toFixed(2)}
                            </span>
                            <del className="text-gray-600 ml-3">
                              Rs {product.product_id.price.toFixed(2)}
                            </del>
                          </span>
                        ) : (
                          <span>Rs {product.product_id.price.toFixed(2)}</span>
                        )}
                      </p>
                      <p className="  text-[0.7rem]   uppercase tracking-wider mt-2     font-poppins text-gray-600">
                        color: {product.color} / Size {product.size}
                      </p>

                      <p className="mt-2 text-[0.8rem]   font-poppins  leading-5    text-gray-500">
                        {product.product_id.description
                          .split(" ")
                          .slice(0, 24)
                          .join(" ")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:col-span-5 line-clamp-1">
                    <dl className="grid grid-cols-2 gap-x-6 text-sm line-clamp-1">
                      <div>
                        <dt className="font-medium text-gray-900">
                          Delivery address
                        </dt>
                        <dd className="mt-3 text-gray-500 space-y-1 line-clamp-1">
                          <span className="block  line-clamp-1">
                            {order.customer.address}
                          </span>
                          <span className="block   line-clamp-1">
                            {order.customer.apartment}
                          </span>
                          <span className="block   line-clamp-1">
                            {order.customer.city}
                          </span>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">
                          Shipping updates
                        </dt>
                        <dd className="mt-3  text-gray-500 space-y-2 line-clamp-3">
                          <p>{order.customer.email_address}</p>
                          <p>{order.customer.phone}</p>
                          <p>{order.customer.secondPhone}</p>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
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

      <section aria-labelledby="summary-heading" className="mt-16">
        <h2 className="sr-only">Billing Summary</h2>

        <div className="bg-gray-50 py-6 px-4 sm:px-6 sm:rounded-lg lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
          <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
            <div>
              <dt className="font-medium text-gray-900">Billing address</dt>
              <dd className="mt-3 text-gray-500">
                <span className="block">Floyd Miles</span>
                <span className="block">7363 Cynthia Pass</span>
                <span className="block">Toronto, ON N3Y 4H8</span>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Payment information</dt>
              <div className="mt-3">
                <dd className="-ml-4 -mt-4 flex flex-wrap">
                  <div className="ml-4 mt-4 flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      width={36}
                      height={24}
                      viewBox="0 0 36 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-auto"
                    >
                      <rect width={36} height={24} rx={4} fill="#224DBA" />
                      <path
                        d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                        fill="#fff"
                      />
                    </svg>
                    <p className="sr-only">Visa</p>
                  </div>
                  <div className="ml-4 mt-4">
                    <p className="text-gray-900">Ending with 4242</p>
                    <p className="text-gray-600">Expires 02 / 24</p>
                  </div>
                </dd>
              </div>
            </div>
          </dl>

          <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
            <div className="pb-4 flex items-center justify-between">
              <dt className="text-gray-600">Subtotal</dt>
              <dd className="font-medium text-gray-900">$72</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Shipping</dt>
              <dd className="font-medium text-gray-900">$5</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Tax</dt>
              <dd className="font-medium text-gray-900">$6.16</dd>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <dt className="font-medium text-gray-900">Order total</dt>
              <dd className="font-medium text-indigo-600">$83.16</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}

export default OrderDisplay;
