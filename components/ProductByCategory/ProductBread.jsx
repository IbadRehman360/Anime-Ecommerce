"use client";
import Link from "next/link";

function ProductBread({ products }) {
  return (
    <div className="  bg-[#fefefe] border-b border-gray-200">
      <nav
        aria-label="Breadcrumb"
        className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 "
      >
        <ol role="list" className="flex items-center space-x-4 py-5">
          <li>
            <div className="flex items-center">
              <Link
                href={"/"}
                className="mr-4 text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                Home
              </Link>
              <svg
                viewBox="0 0 6 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <Link
                href={"#"}
                className="mr-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                Category
              </Link>
              <svg
                viewBox="0 0 6 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </li>

          <li className="text-sm">
            <Link
              href={`${products[0].anime_category_id.title}`}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {products[0].anime_category_id.title}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default ProductBread;
