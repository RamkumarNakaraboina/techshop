import { useParams } from "react-router-dom";
import { useState } from "react";
import productsData from "../data/productsData";
import reviewsData from "../data/reviewsData";
import RelatedProducts from "../components/RelatedProducts";
import Services from "../components/Services";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));
  const [activeTab, setActiveTab] = useState("specs");
  const [activeImage, setActiveImage] = useState(0);

  if (!product)
    return <div className="pt-20 text-center">Product not found</div>;

  return (
    <main className="bg-[#050505] min-h-screen pt-20 text-white">
      {/* top section with gallery and info */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-10 grid md:grid-cols-2 gap-10">
        {/* Images */}
        <div>
          <div className="bg-[#111] rounded-xl flex items-center justify-center p-6 mb-4">
            <img
              src={product.images[activeImage]}
              alt={product.title}
              className="w-full max-h-[320px] object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`bg-[#111] rounded-lg p-2 flex items-center justify-center border
                  ${
                    activeImage === idx
                      ? "border-red-600"
                      : "border-transparent"
                  }`}
              >
                <img
                  src={src}
                  alt={`${product.title} ${idx + 1}`}
                  className="h-16 object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {product.title}
          </h1>
          <p className="text-sm text-gray-400">{product.info}</p>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-red-500">
              ₹{product.finalPrice.toLocaleString("en-IN")}
            </span>
            <span className="text-gray-500 line-through text-sm">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>

          <p className="text-sm text-green-500">
            You save: ₹
            {(product.originalPrice - product.finalPrice).toLocaleString(
              "en-IN"
            )}
          </p>

          <button className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-medium">
            Add to cart
          </button>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-12">
        <div className="flex gap-4 border-b border-gray-800 mb-6">
          {["specs", "overview", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-sm md:text-base border-b-2 transition
                ${
                  activeTab === tab
                    ? "border-red-600 text-white"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
            >
              {tab === "specs"
                ? "Specifications"
                : tab === "overview"
                ? "Overview"
                : "Reviews"}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "specs" && (
          <div className="grid sm:grid-cols-2 gap-y-3 text-sm">
            <SpecRow label="Brand" value={product.brand} />
            <SpecRow label="Model" value={product.title} />
            <SpecRow label="Generic Name" value={product.category} />
            <SpecRow label="Headphone Type" value={product.type} />
            <SpecRow label="Connectivity" value={product.connectivity} />
            <SpecRow label="Microphone" value="Yes" />
          </div>
        )}

        {activeTab === "overview" && (
          <div className="text-sm text-gray-300 space-y-3">
            <p>
              Experience premium sound with {product.title}. Designed for
              comfort, powerful bass, and all-day listening.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>High quality drivers for rich, immersive audio</li>
              <li>Lightweight &amp; comfortable fit for long hours</li>
              <li>Perfect for music, movies, and gaming</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            {reviewsData.map((rev) => (
              <div
                key={rev.id}
                className="border border-gray-800 rounded-lg p-3 text-sm"
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-100">{rev.name}</span>
                  <span className="text-xs text-gray-500">{rev.date}</span>
                </div>
                <div className="text-yellow-400 text-xs mb-1">
                  {"★".repeat(rev.rateCount)}
                  {"☆".repeat(5 - rev.rateCount)}
                </div>
                <p className="text-gray-300">{rev.review}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Related products + advantages + footer */}
      <RelatedProducts currentId={product.id} />
      <section className="mt-10">
        <Services />
      </section>
      <Footer />
    </main>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-200">{value}</span>
    </div>
  );
}

export default ProductDetails;
