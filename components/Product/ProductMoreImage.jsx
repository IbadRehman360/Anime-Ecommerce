import React, { useState } from "react";

export default function ProductMoreImage() {
  const [currentImage, setCurrentImage] = useState(0);

  const smallImages = [
    "assets/latest/2.jpg",
    "assets/latest/3.jpg",
    "assets/latest/8.jpg",
  ];

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex space-x-3 mt-4   ">
      {smallImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Small Image ${index}`}
          onClick={() => handleImageClick(index)}
          className={`lg:w-20 h-auto w-12 border-2 rounded-md border-black cursor-pointer ${
            index === currentImage ? "border-white" : ""
          }`}
        />
      ))}
    </div>
  );
}
