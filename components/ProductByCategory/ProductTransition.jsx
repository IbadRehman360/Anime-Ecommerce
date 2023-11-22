"use client";
import ProductMobileFilters from "@components/ProductByCategory/ProductMobileFilters";
import MobileFilterOpen from "@components/ProductByCategory/MobileFilterOpen";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ProductFilter from "./ProductFilter";

function ProductTransition({ filters, products }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <div className="bg-white">
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
              <MobileFilterOpen setMobileFiltersOpen={setMobileFiltersOpen} />
              <ProductMobileFilters filters={filters} />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default ProductTransition;
