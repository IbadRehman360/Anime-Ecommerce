import { FaArrowRight } from "react-icons/fa";

export default function RightButton({
  handleNextPage,
  featuredProductsSlide2,
}) {
  return (
    <button className="rounded-full hidden lg:flex bg-gray-50 shadow-md border text-sm border-gray-300 p-2 absolute -right-4 top-1/2 transform -translate-y-1/2 z-50">
      <a href={"#" + featuredProductsSlide2} onClick={handleNextPage}>
        <FaArrowRight className="text-red-500" />
      </a>
    </button>
  );
}
