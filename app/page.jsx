import Categories from "@components/Home/Categories";
import HeroCarousel from "@components/Home/HeroCarousel";
import LatestDrop from "@components/Home/LatestDrop";
import TrendingProduct from "@components/Home/TrendingProduct";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <HeroCarousel />
    <LatestDrop />
    <TrendingProduct />
    <Categories />
  </section>
);

export default Home;
