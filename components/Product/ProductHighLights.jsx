function ProductHighLights({ product }) {
  return (
    <div className="mt-6 pb-7">
      <ul
        role="list"
        className="list-disc space-y-3 font-poppins pl-4  text-sm"
      >
        {product.highlights.map((highlight) => (
          <li key={highlight} className="text-gray-500  tracking-wider">
            <span className="text-gray-700">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductHighLights;
