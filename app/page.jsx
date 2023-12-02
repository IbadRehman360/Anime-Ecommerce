import Categories from "@components/Home/Categories";
import Details from "@components/Home/Details";
import Details2 from "@components/Home/Details2";
import HeroCarousel from "@components/Home/HeroCarousel";
import LatestDrop from "@components/Home/LatestDrop";
import Testimonials from "@components/Home/Testimonial";
import TrendingProduct from "@components/Home/TrendingProduct";
import MustHave from "@components/Home/MustHave";
import React from "react";
import HomeCard from "@components/Home/Cart";

export default async function Home() {
  const products = await getProductsData();
  return (
    <section className="relative  w-full main flex-center flex-col">
      <HeroCarousel />

      <div className="mx-auto md:max-w-[100rem]">
        <LatestDrop products={products} />
      </div>
      <div className="bg-stone-100 border border-gray-200">
        <div className="mx-auto md:max-w-[100rem]">
          <Categories />
        </div>
      </div>
      <div className="mx-auto md:max-w-[100rem]">
        <MustHave products={products} />
      </div>

      <div className=" pt-1  border border-gray-300      ">
        <div className="  mx-auto  md:max-w-[95rem] ">
          <HomeCard />
          <Details2 />
          <Details />
        </div>
      </div>

      <div className="mx-auto md:max-w-[95rem]">
        <Testimonials />
      </div>
    </section>
  );
}

async function getProductsData() {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error("failed to fetch users");
  }

  return await response.json();
}
