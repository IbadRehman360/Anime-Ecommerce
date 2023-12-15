import Image from "next/image";

export default function ProductMoreImage({
  product,
  handleImageClick,
  selectedColor,
  selectedSize,
}) {
  return (
    <div
      className={` space-y-4 sm:space-y-3  ${
        !selectedSize && !selectedSize
          ? "flex space-x-3 mt-4  "
          : " space-y-4 sm:space-y-3 "
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
          className={`  lg:h-auto w-auto    border-2 rounded-md   border-gray-300 border-opacity-60   cursor-pointer  `}
        />
      ))}
    </div>
  );
}
