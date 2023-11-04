import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function ProductDetails({ product }) {
  const [sections, setSections] = useState({
    description: true,
    details: false,
    shippingInfo: false,
  });

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      description:
        section === "description" ? !prevSections.description : false,
      details: section === "details" ? !prevSections.details : false,
      shippingInfo:
        section === "shippingInfo" ? !prevSections.shippingInfo : false,
    }));
  };
  const renderSection = (title, content, sectionName) => (
    <div
      className={`${
        sections.description || sections.details || sections.shippingInfo
          ? "lg:mt-28 text-900"
          : ""
      }`}
    >
      <div className="border lg:border-none border-gray-300 py-5">
        <div className="flex items-center xl:mx-4 mx-2 py-1   justify-between">
          <h4
            onClick={() => toggleSection(sectionName)}
            className={`uppercase   text-gray-600 ${
              sections[sectionName]
                ? "text-gray-700   font-inter"
                : "text-gray-600 font-raleway"
            } xl:text-sm text-xs lg:text-[0.8rem] tracking-wider`}
          >
            {title}
          </h4>
          <button
            onClick={() => toggleSection(sectionName)}
            className="text-gray-600 lg:hidden hover:text-gray-900"
          >
            {sections[sectionName] ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
      </div>
      {sections[sectionName] && (
        <div className="border-t">
          <p className="text-gray-900 px-3 lg:hidden leading-6 font-satoshi text-[0.8rem] py-6 tracking-wider">
            {content}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="  lg:-mt-36">
      <div className="pt-10 lg:pt-0 lg:flex lg:gap-7 border-b">
        {renderSection("DESCRIPTION", product.description, "description")}
        {renderSection("SHIPPING + RETURN", product.details, "details")}
        {renderSection(
          "SHIPPING AND DELIVERY",
          product.shipping,
          "shippingInfo"
        )}
      </div>

      <div className=" hidden lg:block">
        {sections.description && (
          <div className="border-t">
            <p className="text-gray-900 font-poppins lg:leading-6  lg:text-sm px-3 leading-6   text-[0.8rem] py-6 tracking-wider">
              {product.description}
            </p>
          </div>
        )}
        {sections.details && (
          <div className="border-t">
            <p className="text-gray-900 font-poppins lg:leading-6  lg:text-sm px-3 leading-6   text-[0.8rem] py-6 tracking-wider">
              {product.details}
            </p>
          </div>
        )}
        {sections.shippingInfo && (
          <div className="border-t">
            <p className="text-gray-900 font-poppins lg:leading-6  lg:text-sm px-3 leading-6   text-[0.8rem] py-6 tracking-wider">
              {product.shipping}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
