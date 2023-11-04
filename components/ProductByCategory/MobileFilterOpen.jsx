import { XMarkIcon } from "@heroicons/react/24/outline";

function MobileFilterOpen({ setMobileFiltersOpen }) {
  return (
    <div className="px-4 flex items-center justify-between">
      <h2 className="text-lg font-medium text-gray-900">Filters</h2>
      <button
        type="button"
        className="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
        onClick={() => setMobileFiltersOpen(false)}
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}

export default MobileFilterOpen;
