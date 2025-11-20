// src/pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-10 text-white">Product not found</div>;
  }

  const {
    images,
    brand,
    title,
    info,
    finalPrice,
    originalPrice,
    ratings,
    rateCount,
    connectivity,
    type,
    category,
  } = product;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-2 text-white">
      {/* Left: image + thumbnails */}
      <div>
        <div className="bg-zinc-900 rounded-2xl p-6 flex items-center justify-center">
          <img
            src={images[0]}
            alt={title}
            className="max-h-80 w-auto object-contain"
          />
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl p-2 flex items-center justify-center"
            >
              <img
                src={img}
                alt={`${title} ${index + 1}`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right: details */}
      <div className="space-y-4">
        <div className="text-sm text-zinc-400 uppercase tracking-wide">
          {brand} · {category} · {type} · {connectivity}
        </div>

        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-zinc-300">{info}</p>

        <div className="flex items-center gap-4 text-lg">
          <span className="text-red-500 font-semibold">
            ₹{finalPrice.toLocaleString("en-IN")}
          </span>
          <span className="text-sm text-zinc-500 line-through">
            ₹{originalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="text-sm text-zinc-400">
          ⭐ {rateCount} ({ratings} ratings)
        </div>

        <button className="mt-4 inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-sm font-medium">
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
