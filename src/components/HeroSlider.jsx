import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../data/productsData";

function HeroSlider() {
  const heroProducts = productsData.filter((p) => p.tag === "hero-product");
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroProducts.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [heroProducts.length]);

  return (
    <section className="w-full overflow-hidden bg-[#0f0f0f]">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{
          width: `${heroProducts.length * 100}%`,
          transform: `translateX(-${
            currentIndex * (100 / heroProducts.length)
          }%)`,
        }}
      >
        {/* Each Slide */}
        {heroProducts.map((product, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: `${100 / heroProducts.length}%` }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 w-full">
              {/* LEFT TEXT */}
              <div className="flex-1 space-y-6">
                <p className="tracking-widest text-gray-400 font-medium">
                  {product.title.toUpperCase()}
                </p>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
                  {product.tagline}
                </h1>

                <div className="flex items-center gap-4">
                  <p className="text-red-500 text-3xl font-bold">
                    ₹{product.finalPrice}
                  </p>
                  <p className="line-through text-gray-500">
                    ₹{product.originalPrice}
                  </p>
                </div>

                <Link to={`/product-details/${product.id}`}>
                  <button className="bg-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
                    Shop Now
                  </button>
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex-1 flex justify-center mt-10 md:mt-0">
                <img
                  src={product.heroImage}
                  alt={product.title}
                  className="w-[380px] md:w-[520px] drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 py-4">
        {heroProducts.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === i ? "w-6 bg-red-500" : "w-2 bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
