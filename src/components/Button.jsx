export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "default",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center font-['Poppins'] text-[16px] font-semibold leading-[24px] transition duration-200";

  const variants = {
    primary:
      "border border-[#B88E2F] bg-[#B88E2F] !text-white hover:bg-[#9F7928] hover:border-[#9F7928]",
    outline:
      "border border-[#B88E2F] bg-white !text-[#B88E2F] hover:bg-[#B88E2F] hover:!text-white",
    dark:
      "border border-black bg-white !text-black hover:bg-black hover:!text-white",
  };

  const sizes = {
    default: "h-12 px-9",
    hero: "h-[74px] w-[222px] uppercase",
    showMore: "h-12 w-[245px]",
    inspiration: "h-12 w-[176px]",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}