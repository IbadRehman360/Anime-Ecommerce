"use client";

import { useState } from "react";

const options = [
  "SHOP BY BRACELETS",
  "SHOP BY CAPS",
  "SHOP BY BAGS",
  "SHOP BY NECKLACE",
  "SHOP BY KEYCHAIN",
];

function LatestDropOption() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex justify-center md:pt-6 pt-4    text-[0.8rem] md:text-[0.9rem]  lg:mt-0 scroll-hidden">
      <div className="flex overflow-x-auto gap-6     border-gray-300  border-b whitespace-nowrap">
        {options.map((option, index) => (
          <div
            key={index}
            className={`group flex flex-col   pb-4 items-center mx-3 relative   ${
              selectedOption === index
                ? "border-b-2 border-black border-solid  "
                : "none"
            }`}
            onClick={() => setSelectedOption(index)}
          >
            <span className="   font-opensans      tracking-wider opacity-95">
              {option}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestDropOption;
