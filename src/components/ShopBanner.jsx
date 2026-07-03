import Breadcrumb from "./Breadcrumb.jsx";

export default function ShopBanner({ title, currentPage }) {
  return (
    <section className="relative flex h-[316px] items-center justify-center overflow-hidden bg-[#F9F1E7]">
      <div className="absolute inset-0 bg-[url('/src/assets/furniro-hero.png')] bg-cover bg-center opacity-25" />

      <div className="relative z-10 text-center">
        <div className="mx-auto mb-2 flex h-[77px] w-[77px] items-center justify-center text-[#B88E2F]">
          <svg viewBox="0 0 50 50" fill="currentColor" aria-hidden="true">
            <path d="M25 4L5 20H10V44H21V31H29V44H40V20H45L25 4Z" />
          </svg>
        </div>

        <h1 className="font-['Poppins'] text-[40px] font-medium leading-[1.2] text-black md:text-[48px]">
          {title}
        </h1>

        <div className="mt-3">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: currentPage || title },
            ]}
          />
        </div>
      </div>
    </section>
  );
}