import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function HeroImages({ index, imageUrl }) {
  return (
    <div className="relative">
      <img
        className="hidden sm:flex border-x-4     border-y-4  border-black border-opacity-90 3xl:max-h-[44rem]     max-h-[36rem] w-full mx-auto filter   brightness-100    contrast-100"
        src={`/assets/WEB.svg`}
        alt={`pc banner`}
      />

      <img
        src={"/assets/gr.svg"}
        alt="mobile banner"
        className="sm:hidden border-2 w-full    border-black    mx-auto my-auto"
      />
      <div className="absolute inset-0 bg-black  opacity-5 hover:opacity-0"></div>
    </div>
  );
}
