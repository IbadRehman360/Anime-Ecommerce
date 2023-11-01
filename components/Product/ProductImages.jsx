import React from "react";

function ProductImages({ product }) {
  return (
    <div className=" ">
      <img
        src={"assets/latest/2.jpg"}
        alt={product.images[3].alt}
        className="border-2 border-black w-full"
      />
    </div>
  );
}

export default ProductImages;
