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
          src={`/assets/ppp.webp`}
          alt={`bg ${index}`}
          className="sm:hidden max-h-[56vh] h-40 w-full mx-auto my-auto"
        ></img>
      </div>
    </div>
  );
}
