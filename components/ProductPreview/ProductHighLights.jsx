function ProductHighLights({ product }) {
  return (
    <div className="md:mt-4 mt-6 pb-7">
      <h3 className="text-gray-600 text-[1.05rem] font-opensans mb-3 tracking-wide">
        Product details
      </h3>
      <ul
        role="list"
        style={{ whiteSpace: "pre-line" }}
        className="list-disc space-y-3    pl-4 text-xs "
      >
        {product.highlights?.map((highlight, index) => (
          <li
            key={index}
            className="text-gray-600  text-[0.94rem] ml-2   tracking-wider     font-poppins   leading-6  md:leading-7"
          >
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductHighLights;
