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
      <p
        className="text-[0.97rem] sm:text-[1rem] md:hidden"
        style={{ letterSpacing: "0.1em" }}
      >
        {currentSlide + 1}/2
      </p>
      <div>
        <div className="hidden justify-center md:flex">
          <button>
            <a
              href={featuredProductsSlide1}
              onClick={handlePrevPage}
              id="prevPage"
            >
              <FaArrowLeft />
            </a>
          </button>
          <button>
            <a href={featuredProductsSlide2} onClick={handleNextPage}>
              <FaArrowRight />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
