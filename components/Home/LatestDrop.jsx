"use client";

import LatestDropOption from "./LatestDropOption";
import Carousel from "@components/Carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import products from "@data/fakeProduct";

function LatestDrop() {
  const [products1, setProducts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/products`);
      const data = await response.json();

      setProducts(data);
    };

    fetchPosts();
  }, []);
  if (!products1) {
    return <div>Loading products...</div>;
  }
  console.log(products1);

  return (
    <div className=" pt-8 pb-6     sm:pb-8   lg:pb-10 mx-auto     md:px-6 px-2 py-2      w-full  ">
      <div className="text-center pb-0.5">
        <h2 className=" font-montserrat font-extrabold text-[2rem] sm:text-[2.6rem] text-gray-900 tracking-wider text-center lg:mt-6">
          OTAKU ACCESSORIES
        </h2>
      </div>

      <LatestDropOption />
      <div className="mt-2">
        <Carousel
          products={products}
          Feature1={"FeatureProductSlide1"}
          Feature2={"FeatureProductSlide2"}
        />
      </div>
    </div>
  );
}
export default LatestDrop;
