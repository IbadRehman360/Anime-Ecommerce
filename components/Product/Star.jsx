import { StarIcon } from "@heroicons/react/20/solid";

function Star({ rating, onClick }) {
  return (
    <div className="flex items-center -mt-[6px]">
      <div className="flex mb-[1px]  justify-end items-end">
        {[1, 2, 3, 4, 5].map((starRating) => (
          <StarIcon
            key={starRating}
            className={`h-5 w-5 lg:w-6 lg:h-6  flex-shrink-0 cursor-pointer  ${
              starRating <= rating ? "text-yellow-400 " : "text-gray-300 "
            }`}
            aria-hidden="true"
            onClick={() => onClick(starRating)}
          />
        ))}
      </div>
    </div>
  );
}

export default Star;
