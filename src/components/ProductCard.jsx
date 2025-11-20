// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const {
    id,
    images,
    brand,
    title,
    info,
    finalPrice,
    originalPrice,
    ratings,
    rateCount,
  } = product;

  // ✅ IMPORTANT: just use images[0] directly – do NOT add "../" or "public"
  const mainImage = images[0];

  return (
    <article className="bg-zinc-900 rounded-2xl p-4 flex flex-col gap-3">
      <Link to={`/product-details/${id}`}>
        <div className="bg-zinc-800 rounded-xl p-4 flex items-center justify-center">
          <img
            src={mainImage}
            alt={title}
            className="max-h-40 w-auto object-contain"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-1 text-sm">
        <span className="text-xs text-zinc-400 uppercase tracking-wide">
          {brand}
        </span>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-zinc-400">{info}</p>
      </div>

      <div className="flex items-center justify-between mt-auto text-sm">
        <div className="flex items-baseline gap-2">
          <span className="text-red-500 font-semibold">
            ₹{finalPrice.toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-zinc-500 line-through">
            ₹{originalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="text-xs text-zinc-400">
          ⭐ {rateCount} ({ratings})
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
