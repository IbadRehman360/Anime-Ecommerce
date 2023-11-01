function BreadCrumbs({ product }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-6">
      <ol role="list" className="  flex  space-x-3  ">
        {product.breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <a
                href={breadcrumb.href}
                className="mr-2 text-sm font-medium text-gray-900"
              >
                {breadcrumb.name}
              </a>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
        ))}
        <li className="text-sm">
          <a
            href={product.href}
            aria-current="page"
            className="  first-letter:uppercase   font-medium text-gray-800    hover:text-gray-700"
          >
            {product.anime}
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default BreadCrumbs;
