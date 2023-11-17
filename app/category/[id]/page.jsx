import Productlist from "@components/ProductByCategory/Productlist";
import ProductFilter from "@components/ProductByCategory/ProductFilter";
import Header from "@components/ProductByCategory/ProductHeader";
import ProductBread from "@components/ProductByCategory/ProductBread";

export default async function Example({ params: { id } }) {
  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const setMobileFiltersOpen = true;
  const mobileFiltersOpen = true;
  const products = await getProductByCategory(id);
  return (
    <div className="bg-white">
      <div>
        <ProductBread products={products} />
        <main className="max-w-2xl mx-auto px-4 lg:max-w-[90rem] lg:px-8">
          <Header products={products} />
          <div className=" border-b">
            <div className="w-32   flex justify-end">
              <select className="border rounded-md p-2 mb-5 w-full">
                <option value="newest">Newest</option>
                <option value="price-low-to-high">Price (low to high)</option>
                <option value="price-high-to-low">Price (high to low)</option>
                <option value="name-a-z">Name A-Z</option>
                <option value="name-z-a">Name Z-A</option>
              </select>
            </div>
          </div>

          <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <ProductFilter filters={filters} products={products} />
            <Productlist products={products} />
          </div>
        </main>
      </div>
    </div>
  );
}

export async function getProductByCategory(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/category/${id}`, {
      headers: { tags: ["products"] },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch product. Status: ${response.status}, Error: ${errorText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error in getProductByID:", error);
    throw error;
  }
}
var filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
];
