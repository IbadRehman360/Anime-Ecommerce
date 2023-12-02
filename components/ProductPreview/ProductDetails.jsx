"use client";

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const shippingDelivery = [
  "All orders are processed within 12-24 hours.",
  "Estimated delivery time:",
  "For metros: 1-4 days.",
  "For the rest of India: 5-8 days.",
  "(Please note: All the COD orders may take up to 24-48 hours to be processed.)",
];

const returnAndExchange = [
  "We accept returns and exchanges within 7 days of the original purchase.",
  "Items must be in new and unused condition, with all original tags and labels attached.",
  "To return an item, please contact our customer service team at support@example.com.",
  "Refunds will be processed within 5-7 business days after we receive the returned item.",
  "Please note: Return shipping costs are the responsibility of the customer, except in cases of damaged or defective items.",
];
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
    <div>
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
          <p className="text-gray-900 px-3 lg:hidden       pb-6 pt-4   font-poppins lg:leading-7 lg:text-[0.96rem]  leading-6 text-[0.86rem]  tracking-wider">
            {content}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className=" mt-10  md:mt-7  ">
      <div className="    lg:flex lg:gap-7 border-b">
        {renderSection("DESCRIPTION", product.description, "description")}
        {renderSection(
          "SHIPPING + RETURN",
          returnAndExchange.join(" "),
          "details"
        )}
        {renderSection(
          "SHIPPING AND DELIVERY",
          shippingDelivery.join(" "),
          "shippingInfo"
        )}
      </div>
      <div className=" hidden lg:block">
        {sections.description && (
          <div className="border-t">
            <p
              className="text-gray-900     font-poppins lg:leading-7 lg:text-[0.96rem] px-3 leading-6 text-[0.7rem] py-6 tracking-wider"
              style={{ whiteSpace: "pre-line" }}
            >
              {product.description}
            </p>
          </div>
        )}
        {sections.details && (
          <div className="border-t">
            <p
              className="text-gray-900     font-poppins   lg:text-[0.9rem] px-3 leading-6 text-[0.8rem] py-6 tracking-wider"
              style={{ whiteSpace: "pre-line" }}
            >
              {returnAndExchange.join("\n")}
            </p>
          </div>
        )}
        {sections.shippingInfo && (
          <div className="border-t">
            <p
              className="text-gray-900     font-poppins lg:leading-7 lg:text-[0.96rem] px-3 leading-6 text-[0.8rem] py-6 tracking-wider"
              style={{ whiteSpace: "pre-line" }}
            >
              {shippingDelivery.join("\n")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
