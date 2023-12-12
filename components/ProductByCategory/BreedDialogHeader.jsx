"use client";
import { useState } from "react";
import Header from "./Header";
import ProductBread from "./ProductBread";
import DialogBox from "./Dialog";
function BreedDialogHeader({ products, sortOptions, paramsId, filters }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <div>
      <DialogBox
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        filters={filters}
      />
      <div className="        border-b   bg-[#fdfdfd]   w-full ">
        <ProductBread paramsId={paramsId} products={products} />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <Header
          products={products}
          sortOptions={sortOptions}
          paramsId={paramsId}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />
      </div>
    </div>
  );
}

export default BreedDialogHeader;
