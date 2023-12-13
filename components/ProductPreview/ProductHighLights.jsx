import { faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCrosshair } from "react-icons/bs";
import { FaCheck, FaTimes } from "react-icons/fa";

function ProductHighLights({ product }) {
  const buttonStyle = {
    base: "py-1  text-[0.7rem] sm:text-xs  xl:py-1.5 lg:text-sm tracking-wider border w-32 mb-1  sm:w-36   xl:w-40 text-center",
    inStock: "border-green-600 text-green-600",
    outOfStock: "border-red-600 text-red-600",
  };
  return (
    <div className="md:mt-4 mt-6 pb-7">
      <div className="flex  line-clamp-1 overflow-hidden   justify-between ">
        <h3 className="text-gray-600  line-clamp-1 text-[1.02rem]  font-opensans mb-3 tracking-wide mr-10">
          Product details
        </h3>
        <div className="font-poppins flex font-semibold pb-2 ">
          {product.stock_quantity === 0 ? (
            <button
              className={`${buttonStyle.base} ${buttonStyle.outOfStock} hover:opacity-80  `}
            >
              <div className="flex  justify-center text-center   items-center">
                <span className="border   flex justify-center items-center rounded-full   pl-1 border-red-600 mr-1 sm:mr-2">
                  <FaTimes className="   " /> &nbsp;
                </span>{" "}
                &nbsp;Out of Stock
              </div>
            </button>
          ) : (
            <button
              className={`${buttonStyle.base} ${buttonStyle.inStock}  hover:opacity-95     ${buttonStyle.hover}`}
            >
              <div className="flex  justify-center text-center    items-center">
                <span className="border   flex justify-center items-center rounded-full  tracking-wider   pl-1 border-green-600 mr-1 sm:mr-2">
                  <FaCheck className="   " /> &nbsp;
                </span>
                {product.stock_quantity} In Stock
              </div>
            </button>
          )}
        </div>
      </div>
      <ul
        role="list"
        style={{ whiteSpace: "pre-line" }}
        className="list-disc space-y-3    pl-4 text-xs "
      >
        {product.highlights?.map((highlight, index) => (
          <li
            key={index}
            className="text-gray-600  text-[0.94rem] ml-2   tracking-wider     font-poppins   leading-6  md:leading-7"
          >
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductHighLights;
