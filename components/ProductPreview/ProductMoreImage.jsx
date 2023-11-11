export default function ProductMoreImage({ product, handleImageClick }) {
  return (
    <div className="flex space-x-3 mt-4   ">
      {product.images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Small Image ${index}`}
          onClick={() => handleImageClick(src)}
          className={`lg:w-20 lg:h-auto  h-8 lg:w-20 border-2 rounded-md border-black cursor-pointer  `}
        />
      ))}
    </div>
  );
}
