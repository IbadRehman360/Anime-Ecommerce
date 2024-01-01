import React, { useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";

const DisplayImage = ({
  selectedColor,
  currentImage,
  selectedSize,
  product,
  handleImageClick,
}) => {
  return (
    <div className="border-gray-200 border-2">
      <TransformWrapper options={{ panEnabled: false }}>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <TransformComponent>
              <img
                src={currentImage}
                className={`   ${
                  selectedColor || selectedSize
                    ? "lg:h-[650px]    "
                    : "lg:h-[530px]  "
                }  h-auto   w-[1200px]  p-0.5 s     object-fill`}
                alt="Product Image"
                width={300}
                height={300}
              />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
      <div
        className={`absolute    ${
          selectedColor && selectedSize
            ? "left-4 right-0  bottom-3 "
            : " left-0 right-0   lg:left-0   lg:right-0 bottom-4  "
        }     p-2 flex justify-center items-center`}
      >
        {product.images.map((src, index) => (
          <div
            key={index}
            className={`w-2 h-2 xl:h-2.5 xl:w-2.5 z-50  opacity-90 rounded-full mx-1 cursor-pointer ${
              currentImage === src ? " bg-red-600 " : "bg-gray-300"
            }`}
            onClick={() => handleImageClick(src)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DisplayImage;
