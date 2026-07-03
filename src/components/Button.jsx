export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center font-['Poppins'] text-[16px] font-semibold transition duration-200";

  const variants = {
    primary: "bg-[#B88E2F] text-white hover:bg-[#9F7928]",
    outline:
      "border border-[#B88E2F] bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white",
    dark: "border border-black bg-white text-black hover:bg-black hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

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