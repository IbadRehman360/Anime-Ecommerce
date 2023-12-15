import Link from "next/link";

export default function CategoryCard({ Anime }) {
  return (
    <Link href={`${Anime.path}`}>
      <div className="relative flex flex-col  mx-1 sm:px-1 ">
        <img
          src={`${Anime.imageSrc}`}
          alt="giftcardIcon"
          className="  rounded-md  custom-animation img-hover-effect  h-auto"
        />
        <div className="absolute inset-0 bg-black opacity-30 hover:opacity-10"></div>
        <div className="absolute bottom-0   font  ml-2.5 mb-4  sm:ml-3  sm:mb-6    text-white   label-text">
          <p className="mb-2 text-[0.8rem] lg:text-[1.1rem] uppercase tracking-widest      font-poppins   ">
            {Anime.name}
          </p>

          <div className="flex justify-center    border px-3 sm:px-8 bg-white text-black  bg-gray-50/25 py-1 sm:py-1.5 lg:py-2">
            <Link
              href="#"
              className="  flex text-center    font-cabin tracking-widest        text-[0.7rem] sm:text-xs  "
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
