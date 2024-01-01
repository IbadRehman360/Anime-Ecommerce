import Image from "next/image";

export default function ProductMoreImage({
  product,
  handleImageClick,
  selectedColor,
  selectedSize,
}) {
  return (
    <div
      className={`    ${
        !selectedSize || !selectedColor
          ? "    space-y-2 "
          : " lg:flex lg:space-x-2     "
      }`}
    >
      {product.images.map((src, index) => (
        <Image
          key={index}
          width={70}
          src={src}
          height={70}
          alt={`Small Image ${index}`}
          onClick={() => handleImageClick(src)}
          className={`  lg:h-28 lg:w-28  w-12  p-0.5 sm:w-16  border-2 rounded-md shadow-sm  border-gray-200 border-opacity-60   cursor-pointer  `}
        />
      ))}
    </div>
  );
}
