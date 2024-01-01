import DesktopFilter from "@components/ProductByCategory/DesktopFilter";
import BreedDialogHeader from "@components/ProductByCategory/BreedDialogHeader";
import Pagination from "@components/ProductByCategory/Pagination";
import Productlist from "@components/ProductByCategory/ProductLists";

export default async function Example({ params: { id } }) {
  const products = await getProductByCategory(id);

  return (
    <div className="bg-white">
      <div>
        <BreedDialogHeader
          paramsId={id}
          products={products}
          sortOptions={sortOptions}
          filters={filters}
        />
        <main className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <section
            aria-labelledby="products-heading"
            className=" sm:pt-6 pb-12 sm:pb-24"
          >
            <h2 id="products-heading" className="sr-only">
              Product
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              <DesktopFilter filters={filters} />
              <div className="lg:col-span-3">
                <Productlist products={products} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export async function getProductByCategory(id) {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/category/${id}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

var sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
var filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "xs", label: "XS", checked: false },
      { value: "xss", label: "XSS", checked: false },
      { value: "s", label: "S", checked: false },
      { value: "m", label: "M", checked: false },
      { value: "l", label: "L", checked: false },
      { value: "xl", label: "XL", checked: false },
      { value: "2xl", label: "2XL", checked: false },
      { value: "3xl", label: "3XL", checked: false },
    ],
  },
];
