const sizes = {
  page: "max-w-[1440px]",
  content: "max-w-[1240px]",
  products: "max-w-[1236px]",
  categories: "max-w-[1183px]",
};

export default function Container({
  children,
  size = "content",
  className = "",
}) {
  return (
    <div
      className={`mx-auto w-full px-5 xl:px-0 ${
        sizes[size] || sizes.content
      } ${className}`}
    >
      {children}
    </div>
  );
}