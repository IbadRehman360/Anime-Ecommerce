/* eslint-disable @next/next/no-img-element */
export default function HeroImages({ index, imageUrl }) {
  return (
    <div className=" ">
      <img
        className="      max-h-[35rem] w-full "
        src={`/assets/heroimage/${imageUrl}`}
        alt={`bg ${index}`}
      />
      <img
        src="https://thesagacity.s3.ap-south-1.amazonaws.com/media/new_banner_-_oversized_tshirts_mobile.webp"
        alt={`bg ${index}`}
        className=" sm:hidden flex  h-3/4 w-full"
      ></img>
    </div>
  );
}
