import { Link } from "react-router-dom";
import productsData from "../data/productsData";

function RelatedProducts({ currentId }) {
  // 1. Find current product
  const currentProduct = productsData.find((p) => p.id === Number(currentId));

  if (!currentProduct) return null;

  // 2. Filter same category products except current one
  const relatedList = productsData
    .filter(
      (p) =>
        p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .slice(0, 4); // show only 4 like your UI

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-10">
      <h2 className="text-xl font-semibold mb-6">Related Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {relatedList.map((product) => (
          <article
            key={product.id}
            className="bg-[#111] rounded-xl p-4 hover:scale-[1.02] transition"
          >
            <Link to={`/product-details/${product.id}`}>
              <div className="bg-[#1a1a1a] rounded-xl p-4 flex justify-center items-center h-32">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="max-h-full object-contain"
                />
              </div>
            </Link>

            <div className="mt-3">
              <p className="text-gray-400 text-xs uppercase">{product.brand}</p>

              <Link to={`/product-details/${product.id}`}>
                <h3 className="text-sm font-semibold hover:text-red-500 transition">
                  {product.title}
                </h3>
              </Link>

              <div className="mt-2">
                <span className="text-red-500 font-semibold">
                  ₹{product.finalPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-gray-500 line-through text-xs ml-2">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
