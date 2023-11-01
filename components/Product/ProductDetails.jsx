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
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const renderSection = (title, content, sectionName) => (
    <div className="">
      <div className={`border-b border-t border-gray-300 py-5`}>
        <div className="flex items-center mx-4 py-1 justify-between">
          <h4 className="uppercase font-montserrat text-xs tracking-wider">
            {title}
          </h4>
          <button
            onClick={() => toggleSection(sectionName)}
            className="text-gray-600 hover:text-gray-900"
          >
            {sections[sectionName] ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
      </div>
      {sections[sectionName] && (
        <p className="  text-gray-900 px-3 leading-6     font-satoshi  text-[0.8rem]  py-6 tracking-wider">
          {content}
        </p>
      )}
    </div>
  );

  return (
    <div className="pt-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
      <div>
        {renderSection("DESCRIPTION", product.description, "description")}
        {renderSection("SHIPPING + RETURN", product.details, "details")}
        {renderSection(
          "SHIPPING AND DELIVERY",
          product.shipping,
          "shippingInfo"
        )}
      </div>
    </div>
  );
}
