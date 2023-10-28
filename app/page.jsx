import Categories from "@components/Home/Categories";
import Details from "@components/Home/Details";
import Details2 from "@components/Home/Details2";
import HeroCarousel from "@components/Home/HeroCarousel";
import LatestDrop from "@components/Home/LatestDrop";
import Testimonials from "@components/Home/Testimonial";
import TrendingProduct from "@components/Home/TrendingProduct";
import MustHave from "@components/Home/MustHave";
const Home = () => (
  <section className="w-full main flex-center flex-col">
    <HeroCarousel />
    <LatestDrop />
    <Categories />
    <TrendingProduct />
    <MustHave />
    <Details2 />
    <Details />
    <div className="bg-[#fdfdfd]">
      <Testimonials />
    </div>
  </section>
);

export default Home;
