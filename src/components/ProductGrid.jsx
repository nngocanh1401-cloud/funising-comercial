import Button from "./Button.jsx";
import Container from "./Container.jsx";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ title = "Our Products", products = [] }) {
  return (
    <section className="pb-[56px] md:pb-[70px]">
      <Container size="products">
        <h2 className="text-center font-['Poppins'] text-[clamp(32px,4vw,40px)] font-bold leading-[1.2] text-[#3A3A3A]">
          {title}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/shop" variant="outline" size="showMore">
  Show More
</Button>
        </div>
      </Container>
    </section>
  );
}