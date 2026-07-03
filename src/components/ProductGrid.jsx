import Container from "./Container.jsx";
import SectionTitle from "./SectionTitle.jsx";
import ProductCard from "./ProductCard.jsx";
import Button from "./Button.jsx";

export default function ProductGrid({ title = "Our Products", products = [] }) {
  return (
    <section className="pb-[70px]">
      <Container>
        <SectionTitle title={title} />

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button href="/shop" variant="outline" className="h-12 px-[78px]">
            Show More
          </Button>
        </div>
      </Container>
    </section>
  );
}