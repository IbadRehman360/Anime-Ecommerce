import Categories from "@components/Home/Categories";
import Details from "@components/Home/Details";
import Details2 from "@components/Home/Details2";
import HeroCarousel from "@components/Home/HeroCarousel";
import LatestDrop from "@components/Home/LatestDrop";
import Testimonials from "@components/Home/Testimonial";
import TrendingProduct from "@components/Home/TrendingProduct";
import MustHave from "@components/Home/MustHave";
import React from "react";

const Home = () => (
  <section className="relative  w-full main flex-center flex-col">
    <HeroCarousel />
    <div className="mx-auto md:max-w-[105rem]">
      <LatestDrop />
    </div>
    <div className="bg-stone-50 border border-gray-200">
      <div className="mx-auto md:max-w-[105rem]">
        <Categories />
      </div>
    </div>
    <div className="mx-auto md:max-w-[105rem]">
      <MustHave />

      <Details2 />
      <Details />
    </div>
    <img className="w-full  h-0.5 bg-black" src="/assets/lll.webp" />
    <img className="w-full h-18 lg:h-24 bg-black" src="/assets/bbb.webp" />
    <img className="w-full  h-0.5 bg-black" src="/assets/lll.webp" />

    <div className="mx-auto md:max-w-[110rem]">
      <Testimonials />
    </div>
  </section>
);

export default Home;
