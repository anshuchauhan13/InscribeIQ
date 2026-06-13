import { cn } from "@/lib/utils";

function ComparisonPanel({ comparison }) {
  const LeftIcon = comparison.left.icon;
  const RightIcon = comparison.right.icon;

  return (
    <div className="relative self-start">

      {/* Center Divider */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 z-10 pointer-events-none" />

      {/* Header — position:relative so VS badge is positioned relative to this */}
      <div className="relative grid grid-cols-2">

        {/* DBA */}
        <div className="bg-primary flex flex-col items-center justify-center px-4 pt-8 pb-6 gap-2">
          <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center">
            <LeftIcon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-4xl font-bold text-white tracking-tight">DBA</h3>
          <p className="text-xs font-semibold tracking-widest text-blue-200 uppercase text-center">
            Professional & Executive
          </p>
        </div>

        {/* PhD */}
        <div className="bg-light-blue/5 flex flex-col items-center justify-center px-4 pt-8 pb-6 gap-2">
          <div className="w-14 h-14 rounded-full bg-slate-200/70 flex items-center justify-center">
            <RightIcon className="w-7 h-7 text-slate-500" />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 text-center leading-snug">
            Traditional<br />PhD
          </h3>
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase text-center">
            Academic & Research
          </p>
        </div>

        {/* VS Badge — anchored to bottom of header div, centered on divider */}
        <div
          className="absolute left-1/2 bottom-0 z-30"
          style={{ transform: "translateX(-50%) translateY(50%)" }}
        >
          <div className="h-12 w-12 rounded-full bg-white border border-slate-300 shadow-lg flex items-center justify-center">
            <span className="text-sm font-bold text-slate-700">VS</span>
          </div>
        </div>
      </div>

      {/* Rows */}
      {comparison.left.items.map((leftItem, index) => {
        const rightItem = comparison.right.items[index];
        const LeftRowIcon = leftItem.icon;
        const RightRowIcon = rightItem.icon;

        return (
          <div
            key={index}
            className="relative grid grid-cols-2 border-t border-slate-200"
          >
            {/* Center chevron — skip first row where VS badge overlaps */}
            {index !== 0 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="h-7 w-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                  <svg className="h-3 w-3 text-[#062C73]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            )}

            {/* Left Cell */}
            <div className="bg-primary px-5 py-4 flex items-center gap-3">
              <div className="shrink-0 h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                <LeftRowIcon className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-white text-base leading-tight">
                {leftItem.label}
              </span>
            </div>

            {/* Right Cell */}
            <div className="bg-light-blue/5 px-5 py-4 flex items-center gap-3">
              <div className="shrink-0 h-10 w-10 rounded-xl bg-slate-200/50 flex items-center justify-center">
                <RightRowIcon className="h-5 w-5 text-slate-500" />
              </div>
              <span className="font-semibold text-slate-700 text-base leading-tight">
                {rightItem.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Main WhatIsCourse Component ─────────────────────────────────────────────

const WhatIsCourse = ({
  title,
  heading,
  description = [],
  sideImage,
  badge,
  comparison,
  highlights = [],
  className,
}) => {
  const BadgeIcon = badge?.icon;

  const panelOffset = "calc(3.75rem + 0.5rem + 0.25rem + 1.5rem)";

  return (
    <section
      className={cn(
        "container mx-auto px-5 md:px-12 lg:px-20 py-16",
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-8 lg:gap-12 items-start">

        {/* ── Left Content ── */}
        <div className="flex flex-col">
          <h2 className="mb-2 text-5xl font-bold tracking-tight">{title}</h2>
          <div className="mb-6 h-1 w-28 bg-light-blue rounded-full" />
          <h3 className="mb-5 text-3xl sm:text-4xl font-bold leading-tight">{heading}</h3>

          <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          {sideImage && (
            <div className="relative mt-10">
              <img
                src={"/service/hero4.png"}
                alt=""
                className="h-[260px] w-full rounded-3xl object-cover"
              />
              {badge && BadgeIcon && (
                <div
                  className="absolute bottom-5 right-5 flex flex-col items-center justify-center rounded-full border-4 border-white bg-white/90 text-center shadow-xl"
                  style={{ width: "9.5rem", height: "9.5rem" }}
                >
                  <BadgeIcon className="mb-1 h-5 w-5 text-blue-700" />
                  <p className="text-xs text-slate-500">{badge.title}</p>
                  <p className="text-xl font-bold text-blue-900 leading-tight">{badge.highlight}</p>
                  <p className="text-xs text-slate-500">{badge.subtitle}</p>
                  <p className="text-xl font-bold text-blue-900 leading-tight">{badge.emphasis}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Comparison Panel — desktop aligned to h3 ── */}
        {comparison && (
          <div style={{ paddingTop: panelOffset }} className="hidden lg:block">
            <ComparisonPanel comparison={comparison} />
          </div>
        )}

        {/* ── Comparison Panel — mobile, no offset ── */}
        {comparison && (
          <div className="block lg:hidden">
            <ComparisonPanel comparison={comparison} />
          </div>
        )}

      </div>
    </section>
  );
};

export default WhatIsCourse;