export default function Pagination({
  currentPage = 1,
  totalPages = 3,
  onPageChange,
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Pagination" className="flex justify-center">
      <ul className="flex items-center gap-[38px]">
        {pages.map((page) => {
          const isActive = page === currentPage;

          return (
            <li key={page}>
              <button
                type="button"
                onClick={() => handleClick(page)}
                className={`flex h-[60px] w-[60px] items-center justify-center rounded-[10px] font-['Poppins'] text-[20px] transition ${
                  isActive
                    ? "bg-[#B88E2F] text-white"
                    : "bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white"
                }`}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li>
          <button
            type="button"
            onClick={() =>
              handleClick(currentPage < totalPages ? currentPage + 1 : totalPages)
            }
            className="flex h-[60px] min-w-[98px] items-center justify-center rounded-[10px] bg-[#F9F1E7] px-6 font-['Poppins'] text-[20px] text-black transition hover:bg-[#B88E2F] hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}