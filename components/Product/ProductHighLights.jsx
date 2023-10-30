function ProductHighLights({ product }) {
  return (
    <div className="mt-4">
      <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
        {product.highlights.map((highlight) => (
          <li key={highlight} className="text-gray-400">
            <span className="text-gray-600">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductHighLights;
