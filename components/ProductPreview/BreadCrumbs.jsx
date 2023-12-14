import Link from "next/link";

function BreadCrumbs({ product }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="lg:pt-6 font-satoshi tracking-wider"
    >
      <ol role="list" className="flex sm:space-x-3 space-x-1  ">
        <li>
          <div className=" items-center  hidden sm:flex">
            <Link
              href="/ "
              className="mr-2 mt-[1.5px] text-sm sm:text-[0.92rem]  font-medium text-gray-600"
            >
              Home
            </Link>
            <svg
              width={16}
              height={20}
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li className="   ">
          <Link
            aria-current="page"
            href={"/category/" + product.category_id.name}
            className="  first-letter:uppercase text-sm sm:text-[0.92rem] tracking-wider   font-medium text-gray-600    hover:text-gray-500"
          >
            {product.category_id.name}
          </Link>
        </li>
        <svg
          width={16}
          height={20}
          viewBox="0 0 16 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-5 w-4   text-gray-300"
        >
          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
        </svg>
        <li className="   ">
          <Link
            href={"/product/" + product._id}
            aria-current="page"
            className="  first-letter:uppercase  text-sm sm:text-[0.92rem] ml-1 sm:ml-0  text-gray-700    hover:text-gray-500"
          >
            {product.title.split(" ").slice(0, 3).join(" ")}
          </Link>
        </li>
      </ol>
    </nav>
  );
}

export default BreadCrumbs;
