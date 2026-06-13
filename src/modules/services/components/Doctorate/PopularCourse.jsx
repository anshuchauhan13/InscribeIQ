import { cn } from "@/lib/utils";

import noise from "@/assets/noise.webp";


function SpecCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="bg-white rounded-xl p-5 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-200">
      {/* Icon + Title row */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-purple-700 flex items-center justify-center text-white flex-shrink-0">
          <Icon size={20} />
        </div>
        <h3 className="text-[14px] sm:text-[15px] font-bold text-gray-900 leading-snug">
          {item.title}
        </h3>
        
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Points */}
      <ul className="flex flex-col gap-2">
        {item.points.map((point, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-[12.5px] sm:text-[13px] text-gray-500 leading-snug"
          >
            <span className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

const PopularCourse = ({
  heading ,
  highlight ,
  accentColor ,
  items,
  columns ,
  containerClass ,
}) => {
  const colClass =
    {
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    }[columns] ?? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const headingParts = highlight
    ? heading.split(new RegExp(`(${highlight})`, "i"))
    : [heading];

  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-20 py-12 md:py-16 lg:py-16">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-snug">
          {headingParts.map((part, i) =>
            part.toLowerCase() === highlight?.toLowerCase() ? (
              <span key={i} className="relative inline-block">
                {part}
                <span
                  className={cn(
                    "absolute -left-45 -bottom-1 w-full h-[3px] rounded",
                    accentColor,
                  )}
                />
              </span>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </h2>
        <div className="mb-6 h-1 w-42 bg-light-blue rounded-full" />
      </div>

      {/* Dark container */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-12",
          containerClass,
        )}
        style={{
          background:
            "linear-gradient(160deg, #0C0E18 0%, #1e273d 50%, #2e3e5a 100%)",
        }}
      >
        {/* Noise overlay — rendered as an img for guaranteed load */}
        <img
          src={noise}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{
            opacity: 0.25,
            mixBlendMode: "overlay",
            zIndex: 0,
          }}
        />
        {/* Content */}
        <div className="relative z-10">
          <div className={cn("grid gap-4 sm:gap-6", colClass)}>
            {items.map((item) => (
              <SpecCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;
