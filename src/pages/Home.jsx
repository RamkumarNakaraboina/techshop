import HeroSlider from "../components/HeroSlider";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";
import TopProducts from "../components/TopProducts";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-16">
      <HeroSlider />

      <FeaturedProducts />
      <TopProducts />

      {/* Our Advantages */}
      <section className="mt-12">
        <Services />
      </section>
    </main>
  );
}

export default Home;
