// src/pages/Products.jsx
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

function Products() {
  const { products } = useProducts();

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Top Products</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
