import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionLabel from "@/components/common/SectionLabel";
import SectionViewer from "@/components/common/SectionViewer";

// Role → accent color + background (pill style)
const ROLE_STYLES = [
  { text: "text-violet-700", bg: "bg-violet-50", border: "border-violet-200" },
  { text: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
  { text: "text-sky-700", bg: "bg-sky-50", border: "border-sky-200" },
  { text: "text-rose-700", bg: "bg-rose-50", border: "border-rose-200" },
  { text: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
  { text: "text-indigo-700", bg: "bg-indigo-50", border: "border-indigo-200" },
];

// ─── Single instructor card ───────────────────────────────────────────────────

function InstructorCard({ image, name, role, company, quote, accentStyle }) {
  return (
    <div className="flex-none w-[280px] lg:w-[300px] flex flex-col gap-3.5">

      {/* Photo */}
      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-end justify-center bg-gradient-to-b from-gray-200 to-gray-300">
            <svg
              viewBox="0 0 80 80"
              className="w-20 opacity-40 translate-y-2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="28" r="16" fill="#9ca3af" />
              <path d="M10 80 C10 58 70 58 70 80" fill="#9ca3af" />
            </svg>
          </div>
        )}
      </div>

      {/* Name, role, company */}
      <div className="flex flex-col gap-1.5">
        <p className="text-lg font-semibold text-gray-900 leading-tight">{name}</p>

        {/* ── Pill ── */}
        <span
          className={cn(
            "self-start inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border",
            accentStyle.text,
            accentStyle.bg,
            accentStyle.border
          )}
        >
          {role}
        </span>

        <p className="text-xs text-gray-400 leading-snug">{company}</p>
      </div>

      {/* Quote */}
      <p className="text-sm text-gray-500 leading-relaxed">"{quote}"</p>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

const Benefit = ({
  eyebrow,
  heading,
  subheading,
  items = [],
  className,
}) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className={cn("py-12 md:py-16 bg-white text-gray-900", className)}>
      <SectionViewer>

        {/* ── Header row ── */}
        <div className="flex flex-row justify-between items-start mb-10">
          <div>
          

              <SectionLabel label={eyebrow} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              {heading}
            </h2>
            <div className="w-28 h-1 bg-violet-600 rounded-full mt-3" />
            <p className="mt-3 text-sm text-gray-400 max-w-md leading-relaxed">
              {subheading}
            </p>
          </div>

          {/* Scroll arrows */}
          <div className="flex items-center gap-3 mt-2 shrink-0">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="w-9 h-9 rounded-full  flex items-center justify-center text-gray-400  border border-light-blue text-light-blue transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className=" h-9 w-9 flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white shadow-lg shadow-light-blue/40 ring-1 ring-white/25 md:bottom-8 md:right-8"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Scrollable cards ── */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-2 dba-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`.dba-scroll::-webkit-scrollbar { display: none; }`}</style>

          {items.map((item, i) => (
            <InstructorCard
              key={item.id}
              {...item}
              accentStyle={ROLE_STYLES[i % ROLE_STYLES.length]}
            />
          ))}
        </div>

      </SectionViewer>
    </section>
  );
};

export default Benefit;