"use client";

import CartProduct from "@components/Cart/CartProduct";
import CartCheckOut from "@components/Cart/CartCheckOut";

export default function Example() {
  return (
    <div className=" ">
      <main className="max-w-2xl mx-auto pt-8  md:pt-16 pb-24 px-3 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl text-center sm:text-start font-montserrat lg:text-4xl      text-black opacity-90     ">
          Shopping Cart
        </h1>

        <form className="mt-10 lg:grid  lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <CartProduct />

          <CartCheckOut />
        </form>
      </main>
    </div>
  );
}
