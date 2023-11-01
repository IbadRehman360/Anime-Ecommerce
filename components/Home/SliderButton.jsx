import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SlideButton({
  currentSlide,
  handlePrevPage,
  handleNextPage,
  featuredProductsSlide1,
  featuredProductsSlide2,
}) {
  return (
    <div className="mt-2 flex justify-center text-xs sm:mt-4 md:mt-6">
      <div>
        <div className="hidden justify-center md:flex">
          <button>
            <a
              href={"#" + featuredProductsSlide1}
              onClick={handlePrevPage}
              id="prevPage"
            >
              <FaArrowLeft />
            </a>
          </button>
          <button>
            <a href={"#" + featuredProductsSlide1} onClick={handleNextPage}>
              <FaArrowRight />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
