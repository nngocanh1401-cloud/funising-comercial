import { useState } from "react";

function LogoIcon() {
  return (
    <svg
      width="50"
      height="32"
      viewBox="0 0 50 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 30L16 4L30 30H22L16 18L10 30H2Z" fill="#B88E2F" />
      <path d="M20 30L34 4L48 30H40L34 18L28 30H20Z" fill="#B88E2F" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 21C5.5 17 8.4 15 12 15C15.6 15 18.5 17 19.5 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M20 20L16.2 16.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.8 5.6C20.3 5 19.6 4.5 18.9 4.3C18.1 4 17.3 4 16.5 4.2C15.7 4.4 15 4.8 14.4 5.4L12 7.8L9.6 5.4C9 4.8 8.3 4.4 7.5 4.2C6.7 4 5.9 4 5.1 4.3C4.4 4.5 3.7 5 3.2 5.6C2.6 6.3 2.3 7.2 2.3 8.1C2.3 9.4 2.8 10.6 3.7 11.5L12 20L20.3 11.5C21.2 10.6 21.7 9.4 21.7 8.1C21.7 7.2 21.4 6.3 20.8 5.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 5H7L8.5 15H18.5L20 8H8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.4" fill="currentColor" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-6 md:h-[100px] md:px-[54px]">
        <a href="/" className="flex items-center gap-[5px]" aria-label="Furniro Home">
          <LogoIcon />
          <span className="font-['Montserrat'] text-[28px] font-bold leading-none text-black md:text-[34px]">
            Furniro
          </span>
        </a>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="m-0 flex items-center gap-[75px] p-0 font-['Poppins'] text-[16px] font-medium text-black">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="transition-colors duration-200 hover:text-[#B88E2F]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-[45px] text-black md:flex">
          <button type="button" aria-label="Account" className="hover:text-[#B88E2F]">
            <UserIcon />
          </button>
          <button type="button" aria-label="Search" className="hover:text-[#B88E2F]">
            <SearchIcon />
          </button>
          <button type="button" aria-label="Wishlist" className="hover:text-[#B88E2F]">
            <HeartIcon />
          </button>
          <a href="/cart" aria-label="Cart" className="hover:text-[#B88E2F]">
            <CartIcon />
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[#D9D9D9] text-2xl md:hidden"
          aria-label="Open menu"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? "×" : "☰"}
        </button>
      </div>

      {openMenu && (
        <nav className="border-t border-[#D9D9D9] bg-white px-6 py-5 md:hidden">
          <ul className="m-0 flex flex-col gap-4 p-0 font-['Poppins'] text-[16px] font-medium text-black">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.path} className="block hover:text-[#B88E2F]">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-6 text-black">
            <button type="button" aria-label="Account">
              <UserIcon />
            </button>
            <button type="button" aria-label="Search">
              <SearchIcon />
            </button>
            <button type="button" aria-label="Wishlist">
              <HeartIcon />
            </button>
            <a href="/cart" aria-label="Cart">
              <CartIcon />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}