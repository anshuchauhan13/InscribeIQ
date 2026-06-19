
import SectionLabel from "@/components/common/SectionLabel";
import { cn } from "@/lib/utils";

const ICONS = {
  executive: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect
        x="6"
        y="14"
        width="22"
        height="22"
        rx="5"
        fill="#4F46E5"
        opacity="0.85"
      />
      <rect
        x="16"
        y="8"
        width="18"
        height="18"
        rx="5"
        fill="#818CF8"
        opacity="0.7"
      />
    </svg>
  ),

  strategy: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="28" r="14" fill="#FCD34D" />
      <path
        d="M24 28 L24 14 A14 14 0 0 1 38 28 Z"
        fill="#34D399"
      />
      <circle cx="24" cy="28" r="6" fill="#fff" />
    </svg>
  ),

  global: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="18" stroke="#F472B6" strokeWidth="4" />
      <circle cx="24" cy="24" r="10" stroke="#818CF8" strokeWidth="4" />
      <circle cx="24" cy="24" r="4" fill="#F472B6" />
    </svg>
  ),

  research: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="18" fill="#FCD34D" opacity="0.3" />
      <path
        d="M24 24 L24 6 A18 18 0 0 1 42 24 Z"
        fill="#F472B6"
      />
      <path
        d="M24 24 L42 24 A18 18 0 0 1 24 42 Z"
        fill="#34D399"
      />
      <path
        d="M24 24 L24 42 A18 18 0 0 1 6 24 Z"
        fill="#818CF8"
      />
      <circle cx="24" cy="24" r="8" fill="#fff" />
    </svg>
  ),
};

function FeatureCard({ service }) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6",
        "border border-gray-100 shadow-sm",
        "hover:shadow-lg transition-all duration-300",
        "hover:-translate-y-1"
      )}
    >
      <div className="mb-4">
        {ICONS[service.iconType]}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-3">
        {service.title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default function WhyChooseUs({
  tagline,
  heading,
  subheading,
  services = [],
  className,
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      {/* Decorative Shapes */}
{/* Yellow + Orange group */}
<div
  className="absolute top-40 right-20 hidden lg:block pointer-events-none"
  style={{ animation: 'floatBob 4s ease-in-out infinite' }}
>
  <div className="relative w-36 h-36">
    <div className="absolute inset-0 rounded-full bg-yellow-300/70" />
    <div
      className="absolute top-0 right-0 w-24 h-24 bg-orange-400 rounded-full"
      style={{ animation: 'pulseSwell 3.5s ease-in-out infinite' }}
    />
  </div>
</div>

{/* Blue ball */}
<div
  className="absolute bottom-5 left-10 hidden lg:block pointer-events-none"
  style={{ animation: 'floatBob 5s ease-in-out infinite 1s' }}
>
  <div className="w-28 h-28 rounded-full bg-blue-500/80" />
</div>

      <div className="container mx-auto px-5 md:px-16 lg:px-20 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="max-w-3xl mb-12">
            <SectionLabel label={tagline} />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {heading}
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services?.map((service) => (
            <FeatureCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}