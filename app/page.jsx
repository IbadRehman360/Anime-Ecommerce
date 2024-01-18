import Categories from "@components/Home/Categories";
import Details from "@components/Home/Details";
import Details2 from "@components/Home/Details2";
import HeroCarousel from "@components/Home/HeroCarousel";
import LatestDrop from "@components/Home/LatestDrop";
import Testimonials from "@components/Home/Testimonial";
import TrendingProduct from "@components/Home/TrendingProduct";
import MustHave from "@components/Home/MustHave";
// import HomeCard from "@components/Home/Cart";

export default async function Home() {
  if (!process.env.NEXTAUTH_URL) {
    return null;
  }

  const products = await getProductsData();

  return (
    <section className="relative     w-full main flex-center flex-col">
      <HeroCarousel />
      <div className="mx-auto md:max-w-[93rem]">
        <LatestDrop products={products} />
      </div>
      <div className=" border bg-gray-50   opacity-95 px-0.5 border-gray-200">
        <div className="mx-auto md:max-w-[95rem]">
          <Categories />
        </div>
      </div>

      <div className="border   ">
        <div className="mx-auto md:max-w-[95rem]">
          <TrendingProduct products={products} />
        </div>
      </div>
      <div className="mx-auto md:max-w-[95rem]">
        <MustHave products={products} />
      </div>

      <div className=" pt-1  border border-gray-300      ">
        <div className="  mx-auto  md:max-w-[90rem] ">
          <Details2 />
          <Details />
        </div>
      </div>

      <div className="mx-auto md:max-w-[92rem]">
        <Testimonials />
      </div>
    </section>
  );
}

async function getProductsData() {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("failed to fetch users");
  }

  return await response.json();
}
