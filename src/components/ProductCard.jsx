export default function ProductCard({ product }) {
  const isDiscount = product.badge?.includes("-");

  return (
    <article className="group relative overflow-hidden bg-[#F4F5F7]">
      <div className="relative h-[301px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {product.badge && (
          <span
            className={`absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full font-['Poppins'] text-[16px] font-medium text-white ${
              isDiscount ? "bg-[#E97171]" : "bg-[#2EC1AC]"
            }`}
          >
            {product.badge}
          </span>
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-[#3A3A3A]/70 opacity-0 transition duration-300 group-hover:opacity-100">
          <button
            type="button"
            className="h-12 w-[202px] bg-white font-['Poppins'] text-[16px] font-semibold text-[#B88E2F]"
          >
            Add to cart
          </button>

          <div className="flex gap-5 font-['Poppins'] text-[16px] font-semibold text-white">
            <button type="button">Share</button>
            <button type="button">Compare</button>
            <button type="button">Like</button>
          </div>
        </div>
      </div>

      <div className="px-4 pb-[30px] pt-4">
        <h3 className="font-['Poppins'] text-[24px] font-semibold leading-[1.2] text-[#3A3A3A]">
          {product.name}
        </h3>

        <p className="mt-2 font-['Poppins'] text-[16px] font-medium text-[#898989]">
          {product.description}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <p className="font-['Poppins'] text-[20px] font-semibold text-[#3A3A3A]">
            {product.price}
          </p>

          {product.oldPrice && (
            <p className="font-['Poppins'] text-[16px] text-[#B0B0B0] line-through">
              {product.oldPrice}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}