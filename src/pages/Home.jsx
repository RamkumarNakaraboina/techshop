import HeroSlider from "../components/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";

function Home() {
  return (
    <main className="bg-[#050505] text-white w-full">
      {/* Full width hero */}
      <HeroSlider />

      {/* Content area */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        <FeaturedProducts />
        <Services />
      </section>
    </main>
  );
}

export default Home;
