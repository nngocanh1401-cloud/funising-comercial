import heroImg from "../../assets/furniro-hero.png";
import Container from "../../components/Container.jsx";
import Button from "../../components/Button.jsx";

export default function InspirationSection() {
  return (
    <section className="bg-[#FCF8F3] py-12 md:py-[44px]">
      <Container className="grid items-center gap-10 lg:grid-cols-[422px_1fr]">
        <div>
          <h2 className="font-['Poppins'] text-[32px] font-bold leading-[1.2] text-[#3A3A3A] md:text-[40px]">
            50+ Beautiful rooms inspiration
          </h2>

          <p className="mt-2 max-w-[368px] font-['Poppins'] text-[16px] font-medium leading-[1.5] text-[#616161]">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>

          <Button href="/shop" className="mt-6 h-12 px-9">
            Explore More
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-[404px_1fr]">
          <div className="relative h-[500px] overflow-hidden md:h-[582px]">
            <img
              src={heroImg}
              alt="Bedroom inspiration interior"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white/80 px-8 py-8 backdrop-blur-sm">
              <p className="font-['Poppins'] text-[16px] font-medium text-[#616161]">
                01 — Bed Room
              </p>

              <h3 className="mt-2 font-['Poppins'] text-[28px] font-semibold text-[#3A3A3A]">
                Inner Peace
              </h3>
            </div>

            <a
              href="/shop"
              aria-label="Explore room inspiration"
              className="absolute bottom-6 left-[241px] flex h-12 w-12 items-center justify-center bg-[#B88E2F] text-2xl text-white"
            >
              →
            </a>
          </div>

          <div className="hidden gap-6 md:grid md:grid-cols-2">
            <img
              src={heroImg}
              alt="Bright interior inspiration"
              className="h-[486px] w-full object-cover"
            />
            <img
              src={heroImg}
              alt="Modern room inspiration"
              className="h-[486px] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}