function Header({ products }) {
  return (
    <div className="  border-gray-200 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
        {products[0].anime_category_id.title}
      </h1>
      <p className=" text-gray-600 leading-relaxed">
        Checkout out the latest release of{" "}
        <span className=" font-semibold">
          {" "}
          {products[0].anime_category_id.title},{" "}
        </span>
        new and improved with four openings!
      </p>
    </div>
  );
}

export default Header;
