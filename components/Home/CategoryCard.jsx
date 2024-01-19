import Link from "next/link";

export default function CategoryCard({ Anime }) {
  const containerStyle = {
    borderRadius: "50%",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
  };
  return (
    <Link href={`${Anime.path}`}>
      <div className="relative flex flex-col mx-1 sm:px-1">
        <div
          style={containerStyle}
          className="custom-animation custom img-hover-effect h-[130px] max:h-[130px] sm:h-[180px]    object-center md:w-[180px] md:h-[180px] lg:w-[205px] lg:h-[205px] xl:min-h-[215px] xl:min-w-[215px]   xl:max:h-[300px]"
        >
          <img
            src={`${Anime.imageSrc}`}
            alt="giftcardIcon"
            style={imageStyle}
            className="    object-cover object-center "
          />
        </div>
        <div
          style={{ color: "#bf011c" }}
          className="bottom-0 font ml-2.5 mb-4  mt-4 sm:ml-3 sm:mb-6   text-center label-text"
        >
          <p className="mb-2 text-[0.8rem]  line-clamp-1 lg:text-[1rem]  tracking-widest font-inter">
            {Anime.name}
          </p>

          {/* <div className="flex justify-center border px-3 sm:px-8 bg-white text-black bg-gray-50/25 py-1 sm:py-1.5 lg:py-2">
            <Link
              href="#"
              className="flex text-center font-cabin tracking-widest text-red-500 text-[0.7rem] sm:text-xs"
            >
              SHOP NOW
            </Link>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
