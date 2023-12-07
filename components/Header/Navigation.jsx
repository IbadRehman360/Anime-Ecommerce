import Link from "next/link";

function Navigation({
  navigation,
  handleListMouseLeave,
  setHoveredPage,
  hoveredPage,
}) {
  const handlePageHover = (page) => {
    setHoveredPage(page);
  };

  const getPageListClassName = (page) => {
    return page.list
      ? `bg-white border-gray-300 absolute mt-5 border-t pt-4 pr-6 -left-6 pb-5 border grid space-y-3 ${
          hoveredPage === page ? "visible" : "hidden"
        }`
      : "";
  };

  return (
    <>
      {navigation.category.map((page) => (
        <div
          key={page.name}
          className="relative z-20 inline-block bg-white text-sm font-medium text-gray-600 whitespace-nowrap tracking-wider hover:text-gray-800"
          onMouseEnter={() => handlePageHover(page)}
        >
          <Link href={page.href} className="flex items-center">
            {page.icon}
            <span className="ml-4 font-inter">{page.name}</span>
          </Link>

          <div
            className={getPageListClassName(page)}
            onMouseLeave={handleListMouseLeave}
          >
            {page.list &&
              page.list.map((item) => (
                <Link href={`/category/${item.id}`} key={item.id}>
                  <div className="ml-6 text-gray-600 text-[1rem] font-poppins hover:text-black">
                    {item.name}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Navigation;
