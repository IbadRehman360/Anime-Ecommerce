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
          src={`/assets/ppp.webp`}
          alt={`bg ${index}`}
          className="sm:hidden   h-64    object-cover w-full mx-auto my-auto"
        ></img>
      </div>
    </div>
  );
}
