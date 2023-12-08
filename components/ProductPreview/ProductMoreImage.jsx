import Image from "next/image";

export default function ProductMoreImage({ product, handleImageClick }) {
  return (
    <div className="flex space-x-2 sm:space-x-3 mt-4   ">
      {product.images.map((src, index) => (
        <Image
          key={index}
          width={70}
          src={src}
          height={70}
          alt={`Small Image ${index}`}
          onClick={() => handleImageClick(src)}
          className={`lg:w-20 lg:h-auto w-auto  h-10  border-2 rounded-md border-black border-opacity-60   cursor-pointer  `}
        />
      ))}
    </div>
  );
}
