const features = [
  {
    id: 1,
    title: "High Quality",
    description: "crafted from top materials",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M8 21H16M12 17V21M7 4H17V10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10V4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 6H4V8C4 10.2091 5.79086 12 8 12M17 6H20V8C20 10.2091 18.2091 12 16 12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Warranty Protection",
    description: "Over 2 years",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3L20 6V11C20 16 16.5 20.5 12 21C7.5 20.5 4 16 4 11V6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 12L10.8 14.3L15.8 9.3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Order over 150 $",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M3 7H15V17H3V7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M15 10H19L21 13V17H15V10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "24 / 7 Support",
    description: "Dedicated support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V16C20 17.1046 19.1046 18 18 18H16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 12H8V17H6C4.89543 17 4 16.1046 4 15V14C4 12.8954 4.89543 12 6 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M18 12H16V17H18C19.1046 17 20 16.1046 20 15V14C20 12.8954 19.1046 12 18 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M10 20H14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-[#FAF3EA] py-[70px]">
      <div className="mx-auto grid max-w-[1334px] gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <article key={feature.id} className="flex items-center gap-[10px]">
            <div className="h-[60px] w-[60px] shrink-0 text-[#242424]">
              {feature.icon}
            </div>

            <div>
              <h3 className="font-['Poppins'] text-[22px] font-semibold leading-[1.5] text-[#242424] md:text-[25px]">
                {feature.title}
              </h3>

              <p className="font-['Poppins'] text-[16px] font-medium leading-[1.5] text-[#898989] md:text-[20px]">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}