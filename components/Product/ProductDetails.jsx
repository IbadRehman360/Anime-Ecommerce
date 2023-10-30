import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function ProductDetails({ product }) {
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(true);

  const toggleDescription = () => {
    setDescriptionOpen(!descriptionOpen);
  };

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
      <div>
        <div className=" ">
          <div className="   border-y border-gray-300  py-5">
            <div className="flex items-center  mx-5    justify-between">
              <h4 className="   uppercase  text-xs font-bold text-black">
                DESCRIPTION
              </h4>{" "}
              <button
                onClick={toggleDescription}
                className="text-gray-600 hover:text-gray-900"
              >
                {descriptionOpen ? <FaAngleUp /> : <FaAngleDown />}
              </button>
            </div>
            {descriptionOpen && (
              <p className="text-gray-800  text-sm py-2    font-medium  tracking-wider   ">
                {product.description}
              </p>
            )}
          </div>
          <div className="">
            <div className="   border-b border-gray-300  py-5">
              <div className="flex items-center   mx-5  py-1 justify-between">
                <h4 className="   uppercase  text-xs font-bold text-black">
                  SHIPPING + RETURN
                </h4>
                <button
                  onClick={toggleDetails}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {detailsOpen ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </div>
              {detailsOpen && (
                <p className="text-gray-900 text-sm">{product.details}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
