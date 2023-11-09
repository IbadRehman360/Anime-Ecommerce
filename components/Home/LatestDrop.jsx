"use client";
import LatestDropOption from "./LatestDropOption";
import Carousel from "@components/Carousel";
import { useCallback, useEffect, useState } from "react";

function LatestDrop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    "654cc9b672d1fa8b7fc1316b"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `/api/products?productsbycategory=${selectedCategory}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch data (HTTP ${response.status})`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="pt-8 pb-6 sm:pb-8 lg:pb-10 mx-auto md:px-6 px-2 py-2 w-full">
      <div className="text-center pb-0.5">
        <h2 className="font-montserrat font-extrabold text-[2rem] sm:text-[2.6rem] text-gray-900 tracking-wider text-center lg:mt-6">
          OTAKU ACCESSORIES
        </h2>
      </div>

      <LatestDropOption
        selectedCategory={selectedCategory}
        handleCategorySelect={handleCategorySelect}
      />
      <div className="mt-2">
        {loading && <div>Loading products...</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && (
          <Carousel
            products={products}
            Feature1={"FeatureProductSlide1"}
            Feature2={"FeatureProductSlide2"}
          />
        )}
      </div>
    </div>
  );
}

export default LatestDrop;

// const handleCreateProducts = async () => {
//   try {
//     const response = await fetch("/api/createProducts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({}),
//     });

//     if (response.status === 201) {
//       console.log("Product created successfully");
//     } else {
//       console.error("Failed to create a product");
//     }
//   } catch (error) {
//     console.error("An error occurred while creating a product:", error);
//   }
// };

// <div className="mt-2">
//   <button onClick={handleCreateProducts}>Create New Product</button>
// </div>;
