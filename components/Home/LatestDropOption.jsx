function LatestDropOption({ selectedCategory, handleCategorySelect }) {
  const categoryMapping = {
    "SHOP BY BRACELETS": "654cc9b672d1fa8b7fc1316b",
    "SHOP BY FIGURES": "654cc9b872d1fa8b7fc1317d",
    "SHOP BY CLOTHES": "654cc9b672d1fa8b7fc1316f",
    "SHOP BY NECKLACE": "654cc9b672d1fa8b7fc1316d",
    "SHOP BY KEYCHAIN": "654cc9b772d1fa8b7fc13175",
  };

  const options = Object.keys(categoryMapping);

  return (
    <div className="flex justify-center md:pt-6 pt-4 text-[0.8rem] md:text-[0.9rem] lg:mt-0 scroll-hidden">
      <div className="flex overflow-x-auto gap-6 border-gray-300 border-b whitespace-nowrap">
        {options.map((option, index) => (
          <button
            key={index}
            className={`group flex flex-col pb-4 items-center mx-3 relative ${
              selectedCategory === categoryMapping[option] &&
              "border-b-2 border-black border-solid"
            }`}
            onClick={() => handleCategorySelect(categoryMapping[option])}
          >
            <span className="font-opensans tracking-wider opacity-95">
              {option}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default LatestDropOption;
