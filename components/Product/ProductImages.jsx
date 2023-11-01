function ProductImages({ product }) {
  return (
    <div className="mx-auto p-1 border    sm:px-6 lg:grid  w-96">
      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img
          src={"assets/latest/2.jpg"}
          alt={product.images[3].alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}

export default ProductImages;
