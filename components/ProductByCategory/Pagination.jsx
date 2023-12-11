import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className=" mt-8 border-t   border-gray-200  px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0   flex-1 flex">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <HiArrowNarrowLeft
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </button>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`${
              currentPage === number
                ? "border-indigo-500 border-t-2 text-indigo-600"
                : "   "
            }   pt-4 px-4 inline-flex items-center text-sm font-medium`}
            aria-current={currentPage === number ? "page" : undefined}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}
          className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          Next
          <HiArrowNarrowRight
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
