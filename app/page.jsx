import Categories from "@components/Home/Categories";
import CategoriesImage from "@components/Home/CategoriesImage";
import Details from "@components/Home/Details";
import Details2 from "@components/Home/Details2";
import HeroCarousel from "@components/Home/HeroCarousel";
import LatestDrop from "@components/Home/LatestDrop";
import Testimonials from "@components/Home/Testimonial";
import TrendingProduct from "@components/Home/TrendingProduct";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <HeroCarousel />
    <LatestDrop />
    <Categories />
    <TrendingProduct />
    <Details2 />
    <Details />
    <Testimonials />
    <CategoriesImage />
  </section>
);

export default Home;
