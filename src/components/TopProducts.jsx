import productsData from "../data/productsData";
import ProductCard from "./ProductCard";
import { useState, useMemo } from "react";

const categories = [
  { id: "all", label: "All" },
  { id: "Headphones", label: "Headphones" },
  { id: "Earbuds", label: "Earbuds" },
  { id: "Earphones", label: "Earphones" },
  { id: "Neckbands", label: "Neckbands" },
];

function TopProducts() {
  const [activeCat, setActiveCat] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeCat === "all") return productsData;
    return productsData.filter((p) => p.category === activeCat);
  }, [activeCat]);

  return (
    <section className="w-full bg-[#050505] pt-12 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
          Top Products
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-4 py-1.5 text-sm rounded-full border transition 
                ${
                  activeCat === cat.id
                    ? "bg-red-600 border-red-600 text-white"
                    : "border-gray-700 text-gray-300 hover:bg-gray-800"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopProducts;
