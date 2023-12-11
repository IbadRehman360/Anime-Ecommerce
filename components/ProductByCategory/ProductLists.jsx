"use client";
import ProductItem from "@components/ProductByCategory/ProductItem";
import Pagination from "./Pagination";
import NotFoundMessage from "./NotFoundMessage";
import { useState } from "react";

export default function Productlist({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts =
    products[0]?.title &&
    products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section
      aria-labelledby="product-heading"
      className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3"
    >
      <h2 id="product-heading" className="sr-only">
        Products
      </h2>
      <div
        className={`grid grid-cols-1 gap-y-4 ${
          products[0]?.title ? " sm:grid-cols-2 " : " "
        }  sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3`}
      >
        {products[0]?.title ? (
          currentProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        ) : (
          <NotFoundMessage />
        )}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
}
