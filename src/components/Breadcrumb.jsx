export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-['Poppins'] text-[16px]">
      <ol className="flex flex-wrap items-center justify-center gap-2 text-black">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="font-medium transition hover:text-[#B88E2F]"
                >
                  {item.label}
                </a>
              ) : (
                <span className={isLast ? "font-normal" : "font-medium"}>
                  {item.label}
                </span>
              )}

              {!isLast && <span className="text-[20px]">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}