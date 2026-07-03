import HeroBanner from "../sections/home/HeroBanner.jsx";
import CategorySection from "../sections/home/CategorySection.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import InspirationSection from "../sections/home/InspirationSection.jsx";
import InteriorGallery from "../sections/home/InteriorGallery.jsx";
import { products } from "../data/products.js";

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