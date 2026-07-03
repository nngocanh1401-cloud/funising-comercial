import heroImg from "../../assets/furniro-hero.png";
import Container from "../../components/Container.jsx";

export default function InteriorGallery() {
  const galleryImages = [
    heroImg,
    heroImg,
    heroImg,
    heroImg,
    heroImg,
    heroImg,
    heroImg,
    heroImg,
  ];

  return (
    <section className="overflow-hidden py-14">
      <div className="text-center">
        <p className="font-['Poppins'] text-[20px] font-semibold text-[#616161]">
          Share your setup with
        </p>

        <h2 className="font-['Poppins'] text-[32px] font-bold text-[#3A3A3A] md:text-[40px]">
          #FurniroFurniture
        </h2>
      </div>

      <Container className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Furniro furniture setup ${index + 1}`}
            className={`w-full object-cover ${
              index % 3 === 0 ? "h-[320px]" : "h-[240px]"
            }`}
          />
        ))}
      </Container>
    </section>
  );
}