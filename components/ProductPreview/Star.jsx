import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";

export default function Star({ rating, onClick, classStar }) {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className={`flex items-center -mt-[6px]`}>
      <div className={`flex mb-[1px] justify-end items-end`}>
        {[1, 2, 3, 4, 5].map((starRating) => (
          <StarIcon
            key={starRating}
            className={`h-5 w-5 lg:w-6 lg:h-6 flex-shrink-0 cursor-pointer ${classStar} ${
              starRating <= rating || starRating <= hoveredRating
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            aria-hidden="true"
            onMouseEnter={() => setHoveredRating(starRating)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => {
              onClick(starRating);
              setHoveredRating(0);
            }}
          />
        ))}
      </div>
    </div>
  );
}
