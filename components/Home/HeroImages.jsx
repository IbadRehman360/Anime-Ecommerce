/* eslint-disable @next/next/no-img-element */
export default function HeroImages({ index, imageUrl }) {
  return (
    <div className="   ">
      <div className="     ">
        <img
          className="hidden sm:flex border  max-h-[32rem]    w-full mx-auto"
          src={`/assets/ppp.webp`}
          alt={`bg ${index}`}
        />

        <div className="absolute inset-0 bg-black opacity-10  "></div>
        <img
          src="https://thesagacity.s3.ap-south-1.amazonaws.com/media/new_banner_-_oversized_tshirts_mobile.webp"
          alt={`bg ${index}`}
          className="sm:hidden max-h-[50vh] w-full mx-auto my-auto"
        ></img>
      </div>
    </div>
  );
}
