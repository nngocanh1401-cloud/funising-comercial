import heroImg from "../../assets/furniro-hero.png";
import Button from "../../components/Button.jsx";

export default function HeroBanner() {
  return (
    <section className="relative h-[560px] overflow-hidden md:h-[716px]">
      <img
        src={heroImg}
        alt="Modern Scandinavian interior room with chair, plant and lamp"
        className="h-full w-full object-cover"
      />

      <div className="absolute left-1/2 top-1/2 w-[90%] max-w-[643px] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-[#FFF3E3] px-6 py-8 md:left-auto md:right-[58px] md:translate-x-0 md:px-[39px] md:py-[62px]">
        <p className="font-['Poppins'] text-[16px] font-semibold tracking-[3px] text-[#333333]">
          New Arrival
        </p>

        <h1 className="mt-1 font-['Poppins'] text-[34px] font-bold leading-tight text-[#B88E2F] md:text-[52px] md:leading-[65px]">
          Discover Our <br />
          New Collection
        </h1>

        <p className="mt-4 max-w-[546px] font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#333333] md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        <Button
          href="/shop"
          className="mt-8 h-[56px] px-10 uppercase md:mt-[46px] md:h-[74px] md:px-[72px]"
        >
          Buy Now
        </Button>
      </div>
    </section>
  );
}