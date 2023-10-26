export default function CategoriesImage() {
  return (
    <section className="mt-16 grid w-full grid-cols-5 sm:grid-cols-2 md:grid-cols-5 gap-0 border-b-2">
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className="flex items-center justify-center border-[0.5px] border-gray-200 p-2"
        >
          <img
            src={`/assets/categoryImages/${i + 1}.webp`}
            alt={`Image ${i}`}
            className="mx-auto h-16 sm:h-24 md:h-16 w-full sm:w-40 md:w-16 object-contain"
          />
        </div>
      ))}
    </section>
  );
}
{
  /* <div className="flex items-center justify-center border-[0.5px] border-gray-200 px-1">
  <img
    src={amex}
    alt={amex}
    className="mx-auto h-16 w-40 object-contain"
  />
</div>
<div className="flex items-center justify-center border-[0.5px] border-gray-200 px-1">
  <img src={visa} alt={visa} className="h-4 w-12 sm:h-5 sm:w-14" />
</div>
<div className="flex items-center justify-center border-[0.5px] border-gray-200 px-2">
  <img
    src={skrill}
    alt={skrill}
    className="h-[19px] w-12 sm:h-6 sm:w-14"
  />
</div>
<div className="hidden items-center justify-center border-[0.5px] border-gray-200 px-1 md:flex">
  <img
    src={paypal}
    alt={paypal}
    className="mx-auto h-16 w-28 object-contain"
  />
</div>

<div className="hidden items-center justify-center border-[0.5px] border-gray-200 px-1 md:flex">
  <img
    src={cards}
    alt={cards}
    className="mx-auto h-[42px] w-20 lg:h-[60px]"
  />
</div> */
}
