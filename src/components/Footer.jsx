export default function Footer() {
  return (
    <footer className="border-t border-black/20 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-[100px] md:py-[48px]">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_2fr]">
          <section aria-labelledby="footer-brand">
            <h2
              id="footer-brand"
              className="font-['Poppins'] text-[24px] font-bold text-black"
            >
              Furniro.
            </h2>

            <address className="mt-[50px] max-w-[285px] font-['Poppins'] text-[16px] not-italic leading-normal text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </address>
          </section>

          <nav aria-labelledby="footer-links">
            <h2
              id="footer-links"
              className="font-['Poppins'] text-[16px] font-medium text-[#9F9F9F]"
            >
              Links
            </h2>

            <ul className="mt-[55px] flex flex-col gap-[46px] font-['Poppins'] text-[16px] font-medium text-black">
              <li>
                <a href="/" className="hover:text-[#B88E2F]">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-[#B88E2F]">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#B88E2F]">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#B88E2F]">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-help">
            <h2
              id="footer-help"
              className="font-['Poppins'] text-[16px] font-medium text-[#9F9F9F]"
            >
              Help
            </h2>

            <ul className="mt-[55px] flex flex-col gap-[46px] font-['Poppins'] text-[16px] font-medium text-black">
              <li>
                <a href="/payment" className="hover:text-[#B88E2F]">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-[#B88E2F]">
                  Returns
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#B88E2F]">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </nav>

          <section aria-labelledby="newsletter-title">
            <h2
              id="newsletter-title"
              className="font-['Poppins'] text-[16px] font-medium text-[#9F9F9F]"
            >
              Newsletter
            </h2>

            <form className="mt-[53px] flex flex-col gap-4 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Enter Your Email Address
              </label>

              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border-b border-black pb-1 font-['Poppins'] text-[14px] text-black outline-none placeholder:text-[#9F9F9F] sm:max-w-[200px]"
              />

              <button
                type="submit"
                className="w-fit border-b border-black pb-1 font-['Poppins'] text-[14px] font-medium text-black hover:text-[#B88E2F]"
              >
                SUBSCRIBE
              </button>
            </form>
          </section>
        </div>

        <div className="mt-12 border-t border-[#D9D9D9] pt-8">
          <p className="font-['Poppins'] text-[16px] text-black">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
}