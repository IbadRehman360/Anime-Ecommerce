import Categories from "@components/Home/Categories";
import CategoriesImage from "@components/Home/CategoriesImage";
import HeroCarousel from "@components/Home/HeroCarousel";
import LatestDrop from "@components/Home/LatestDrop";
import TrendingProduct from "@components/Home/TrendingProduct";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <HeroCarousel />
    <LatestDrop />
    <Categories />
    <TrendingProduct />
    <CategoriesImage />
  </section>
);

export default Home;
