import productsData from "../data/productsData.js";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const featured = productsData.filter((p) => p.tag === "featured-product");

  return (
    <div className="px-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {featured.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
