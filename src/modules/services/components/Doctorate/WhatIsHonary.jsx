import { cn } from "@/lib/utils";
import SectionLabel from "@/components/common/SectionLabel";
import SectionViewer from "@/components/common/SectionViewer";

// ─── Main WhatIsHonary Component ─────────────────────────────────────────────
// Reusable "What is X" section — left content (label, heading, description,
// optional highlights) + right side image with optional floating badge.
// No comparison table here; image sits beside the text instead of below it.

const WhatIsHonary = ({
  tagline,
  heading,
  description = [],
  sideImage,
  badge,
  highlights = [],
  imagePosition = "right", 
  className,
}) => {
  const BadgeIcon = badge?.icon;

  return (
    <SectionViewer className={cn("py-12 md:py-16", className)}>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center",
          imagePosition === "left" && "lg:[&>*:first-child]:order-2"
        )}
      >
        {/* ── Left Content ── */}
        <div className="flex flex-col">
          <SectionLabel label={tagline} />

          <h3 className="mb-5 text-3xl md:text-3xl lg:text-5xl font-bold leading-[1.15] tracking-tight">
            {heading}
          </h3>

          <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          {highlights.length > 0 && (
            <ul className="mt-6 space-y-3">
              {highlights.map((item, index) => {
                const HighlightIcon = item.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    {HighlightIcon && (
                      <div className="shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                        <HighlightIcon className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <span className="text-slate-700 font-medium leading-snug">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* ── Right Side Image ── */}
        {sideImage && (
          <div className="relative">
            <img
              src={sideImage}
              alt={heading || ""}
              className="w-full h-[320px] sm:h-[380px] lg:h-[440px] rounded-3xl object-cover"
            />
            {badge && BadgeIcon && (
              <div
                className="absolute bottom-5 right-5 flex flex-col items-center justify-center rounded-full border-4 border-white bg-white/90 text-center shadow-xl"
                style={{ width: "9.5rem", height: "9.5rem" }}
              >
                <BadgeIcon className="mb-1 h-5 w-5 text-blue-700" />
                <p className="text-xs text-slate-500">{badge.title}</p>
                <p className="text-xl font-bold text-blue-900 leading-tight">
                  {badge.highlight}
                </p>
                <p className="text-xs text-slate-500">{badge.subtitle}</p>
                <p className="text-xl font-bold text-blue-900 leading-tight">
                  {badge.emphasis}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </SectionViewer>
  );
};

export default WhatIsHonary;