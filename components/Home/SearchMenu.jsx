import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchMenu({
  searchText,
  onSearchTextChange,
  onSearchSubmit,
}) {
  return (
    <div className="    lg:flex hidden">
      <form onSubmit={onSearchSubmit} className="relative">
        <input
          type="text"
          className="w-72 h-11 p-2 pl-12 font-cabin mt-0.5 text-gray-900 border  border-gray-500 rounded-full  hover:border-none focus:border-blue-50"
          placeholder="Search..."
          value={searchText}
          onChange={onSearchTextChange}
        />
        <MagnifyingGlassIcon
          className="absolute left-4 font-bold top-3 h-5 w-5 mr-10 text-gray-900"
          aria-hidden="true"
        />
      </form>
    </div>
  );
}
