import Container from "../../components/Container.jsx";
import SectionTitle from "../../components/SectionTitle.jsx";
import { categories } from "../../data/categories.js";

function CategoryCard({ category }) {
  return (
    <article className="text-center">
      <a href={category.href} className="group block">
        <div className="aspect-[381/480] overflow-hidden rounded-[10px]">
          <img
            src={category.image}
            alt={category.alt}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <h3 className="mt-[30px] font-['Poppins'] text-[24px] font-semibold leading-[36px] text-[#333333]">
          {category.name}
        </h3>
      </a>
    </article>
  );
}

export default function CategorySection() {
  return (
    <section className="pb-[56px] pt-[56px]">
      <Container size="categories">
        <SectionTitle
          title="Browse The Range"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <div className="mt-[48px] grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}