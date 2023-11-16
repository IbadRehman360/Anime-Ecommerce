"use client";
import Carousel from "@components/Carousel";
import LatestDropOption from "./LatestDropOption";
import { useState, useEffect } from "react";

function LatestDropRender({ products }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.category_id?._id === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  return (
    <>
      <LatestDropOption
        selectedCategory={selectedCategory}
        handleCategorySelect={setSelectedCategory}
      />
      <div className="mt-2">
        <Carousel
          products={filteredProducts}
          Feature1={"FeatureProductSlide1"}
          Feature2={"FeatureProductSlide2"}
        />
      </div>
    </>
  );
}

export default LatestDropRender;
