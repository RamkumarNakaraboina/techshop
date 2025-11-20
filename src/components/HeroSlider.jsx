import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../data/productsData";

function HeroSlider() {
  // hero products only
  const heroProducts = productsData.filter((p) => p.tag === "hero-product");

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide (works inside React Strict Mode)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroProducts.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex, heroProducts.length]);

  const currentProduct = heroProducts[currentIndex];

  return (
    <section className="w-full bg-[#0f0f0f]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20">
        {/* LEFT TEXT */}
        <div className="flex-1 space-y-6">
          <p className="tracking-widest text-gray-400 font-medium">
            {currentProduct.title.toUpperCase()}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
            {currentProduct.tagline}
          </h1>

          <div className="flex items-center gap-4">
            <p className="text-red-500 text-3xl font-bold">
              ₹{currentProduct.finalPrice}
            </p>
            <p className="line-through text-gray-500">
              ₹{currentProduct.originalPrice}
            </p>
          </div>

          <Link to="/products">
            <button className="bg-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
              Shop Now
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={currentProduct.heroImage}
            alt={currentProduct.title}
            className="w-[400px] md:w-[550px] drop-shadow-xl duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
