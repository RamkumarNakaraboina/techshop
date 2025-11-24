// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

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

  const mainImage = images[0];

  return (
    <article className="bg-[#111] rounded-2xl p-4 flex flex-col gap-3 hover:scale-[1.02] transition">
      {/* PRODUCT IMAGE */}
      <Link to={`/product-details/${id}`}>
        <div className="bg-[#1a1a1a] rounded-xl p-4 flex items-center justify-center h-40">
          <img
            src={mainImage}
            alt={title}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* PRODUCT INFO */}
      <div className="flex flex-col gap-1 text-sm">
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          {brand}
        </span>

        <Link to={`/product-details/${id}`}>
          <h3 className="font-semibold hover:text-red-500 transition">
            {title}
          </h3>
        </Link>

        <p className="text-xs text-gray-400">{info}</p>
      </div>

      {/* PRICE + RATING */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-baseline gap-2">
          <span className="text-red-500 font-semibold">
            ₹{finalPrice.toLocaleString("en-IN")}
          </span>

          <span className="text-xs text-gray-500 line-through">
            ₹{originalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="text-xs text-gray-400">
          ⭐ {ratings} ({rateCount})
        </div>
      </div>

      {/* ADD TO CART BUTTON */}
      <button
        onClick={() => addToCart(product)}
        className="mt-2 w-full bg-red-600 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
      >
        Add to cart
      </button>
    </article>
  );
}

export default ProductCard;
