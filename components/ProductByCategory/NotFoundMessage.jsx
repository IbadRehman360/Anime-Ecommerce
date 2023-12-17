import { MdInfo } from "react-icons/md";
import Link from "next/link";

function NotFoundMessage() {
  return (
    <section
      aria-labelledby="cart-heading"
      className="lg:col-span-7 sm:my-10 my-6   lg:my-16  xl:my-20 relative"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b   text-black opacity-70"></div>
      <div className="relative  flex flex-col items-center justify-center text-center  ">
        <MdInfo className="text-5xl mb-4 text-black opacity-90 " />
        <p className="text-xl sm:text-2xl mb-4 font-montserrat text-black opacity-95">
          There are currently no products listed in this category.
        </p>
        <p className="sm:text-lg mb-8 sm:mx-24 font-poppins">
          Explore our other collections on the &ldquo;Shop&ldquo; page.
          featuring carefully curated items that cater to your unique taste and
          style preferences.
        </p>

        <Link
          href="/"
          className={`bg-black opacity-95 text-white uppercase font-montserrat border border-transparent rounded-md shadow-sm py-3 px-4 tracking-wide  text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500`}
        >
          GO BACK TO HOMEPAGE
        </Link>
      </div>
    </section>
  );
}

export default NotFoundMessage;
