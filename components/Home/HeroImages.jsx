/* eslint-disable @next/next/no-img-element */
export default function HeroImages({ index, imageUrl }) {
  return (
    <div className="">
      <img
        className="w-full"
        src={`/assets/heroimage/${imageUrl}`}
        alt={`bg ${index}`}
      />
    </div>
  );
}
