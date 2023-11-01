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
      description: section === "description",
      details: section === "details",
      shippingInfo: section === "shippingInfo",
    }));
  };

  const toggleSectionBig = (section) => {
    setSections((prevSections) => ({
      description: section === "description",
      details: section === "details",
      shippingInfo: section === "shippingInfo",
    }));
  };

  const renderSection = (title, content, sectionName) => (
    <>
      <div
        className={`lg: lg:w-1/3 lg:px-4 ${
          sections.description ? "lg:w-full" : ""
        }`}
      >
        <div className={`border lg:border-none  border-gray-300 py-5`}>
          <div className="flex items-center mx-4 py-1 justify-between">
            <h4
              onClick={() => {
                toggleSectionBig(sectionName);
              }}
              className="uppercase font-montserrat text-xs tracking-wider"
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
        <div className="border-t  ">
          {sections[sectionName] && (
            <p className="text-gray-900 px-3   leading-6 font-satoshi text-[0.8rem] py-6 tracking-wider">
              {content}
            </p>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className="pt-10 lg:flex">
      {renderSection("DESCRIPTION", product.description, "description")}
      {renderSection("SHIPPING + RETURN", product.details, "details")}
      {renderSection("SHIPPING AND DELIVERY", product.shipping, "shippingInfo")}
    </div>
  );
}
