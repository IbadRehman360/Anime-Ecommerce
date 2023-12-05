/* eslint-disable @next/next/no-img-element */
export default function HeroImages({ index, imageUrl }) {
  return (
    <div className="   ">
      <div className="     ">
        <img
          className="hidden sm:flex border border-gray-200 max-h-[30rem]  w-full mx-auto"
          src={`/assets/ppp.webp`}
          alt={`bg ${index}`}
        />
        <img
          src="https://thesagacity.s3.ap-south-1.amazonaws.com/media/new_banner_-_oversized_tshirts_mobile.webp"
          alt={`bg ${index}`}
          className="sm:hidden  aspect-square w-full mx-auto my-auto"
        ></img>
      </div>
    </div>
  );
}
