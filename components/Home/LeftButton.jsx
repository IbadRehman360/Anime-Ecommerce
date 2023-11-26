import { FaArrowLeft } from "react-icons/fa";
function LeftButton({ handlePrevPage, featuredProductsSlide1 }) {
  return (
    <button className="rounded-full hidden lg:flex bg-gray-50 p-2 absolute  text-sm shadow-md border border-gray-300 -left-4 top-1/2 transform -translate-y-1/2 z-50">
      <a
        href={"#" + featuredProductsSlide1}
        onClick={handlePrevPage}
        id="prevPage"
      >
        <FaArrowLeft className="text-red-500" />
      </a>
    </button>
  );
}

export default LeftButton;
