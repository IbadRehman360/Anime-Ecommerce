import React from "react";
import { MdInfo } from "react-icons/md";

const EmptyCartMessage = () => {
  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7 mt-10  ">
      <div className="flex flex-col items-center justify-center ">
        <MdInfo className="text-5xl mb-4 text-gray-500" />
        <p
          className="text-3xl   font-montserrat
         mb-4 text-gray-800"
        >
          Your cart is currently empty.
        </p>
        <p className="  mb-6 font-poppins text-gray-600">
          Before proceeding to checkout, you must add some products to your
          shopping cart. You will find a lot of interesting products on our
          "Shop" page.
        </p>
        <button
          className={`  bg-gray-700 uppercase font-montserrat border border-transparent rounded-md shadow-sm py-3 px-4 tracking-wide text-sm text-white  
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500`}
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default EmptyCartMessage;
