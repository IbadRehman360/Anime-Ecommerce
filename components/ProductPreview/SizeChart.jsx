"use client";
import Image from "next/image";
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function SizeChart({ QuickView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold text-gray-700 font-inter">Size</h3>
      {isOpen && (
        <div
          className={`fixed px-2 top-0 left-0 w-full h-full flex z-50 justify-center items-center  ${
            !QuickView ? "bg-black bg-opacity-80" : "bg-gray-500 bg-opacity-75"
          }`}
        >
          <div className="relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2.5 bg-white right-2 md:top-4  md:right-3 opacity-95 text-black z-20 text-xs md:text-sm w-6 h-6 md:w-7 md:h-7  border hover:opacity-80 border-black font-bold  rounded-full"
            >
              X
            </button>
            <TransformWrapper
              minScale={1}
              initialScale={1}
              centerOnInit
              initialPositionX={0}
              initialPositionY={0}
            >
              <TransformComponent>
                <Image
                  width={800}
                  height={800}
                  src="/assets/size.webp"
                  className="object-cover rounded-md border w-auto h-auto border-gray-900 mx-auto"
                  alt="Size Chart"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      )}
      <div>
        <a
          href="#sizeChart"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Size Chart &gt;
        </a>
      </div>
    </div>
  );
}

export default SizeChart;
