export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-['Poppins'] text-[32px] font-bold leading-tight text-[#333333] md:text-[40px]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 font-['Poppins'] text-[16px] text-[#666666] md:text-[20px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}