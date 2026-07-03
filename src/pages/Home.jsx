import ProductGrid from "../components/ProductGrid.jsx";
import { products } from "../data/products.js";
import CategorySection from "../sections/Home/CategorySection.jsx";
import HeroBanner from "../sections/Home/HeroBanner.jsx";
import InspirationSection from "../sections/Home/InspirationSection.jsx";
import InteriorGallery from "../sections/Home/InteriorGallery.jsx";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CategorySection />
      <ProductGrid title="Our Products" products={products.slice(0, 8)} />
      <InspirationSection />
      <InteriorGallery />
    </>
  );
}