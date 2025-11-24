import productsData from "../data/productsData";
import ProductCard from "./ProductCard";
import { useMemo, useState, useEffect } from "react";

function RelatedProducts({ currentId }) {
  const [slide, setSlide] = useState(0);

  const related = useMemo(() => {
    const current = productsData.find((p) => p.id === currentId);
    if (!current) return [];
    return productsData
      .filter((p) => p.id !== currentId && p.category === current.category)
      .slice(0, 8);
  }, [currentId]);

  const slidesCount = Math.max(1, Math.ceil(related.length / 4));

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % slidesCount);
    }, 4000);
    return () => clearInterval(t);
  }, [slidesCount]);

  if (!related.length) return null;

  const start = slide * 4;
  const visible = related.slice(start, start + 4);

  return (
    <section className="bg-[#050505] py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Related Products
        </h2>

        <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: slidesCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`w-2 h-2 rounded-full ${
                slide === i ? "bg-red-600" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
