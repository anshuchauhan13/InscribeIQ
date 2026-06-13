import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Default data ─────────────────────────────────────────────────────────────


// Role → accent color (cycles through if more items than colors)
const ROLE_COLORS = [
  "text-violet-600",
  "text-emerald-600",
  "text-sky-600",
  "text-rose-500",
  "text-amber-600",
  "text-indigo-600",
];

// ─── Single instructor card ───────────────────────────────────────────────────

function InstructorCard({ image, name, role, company, quote, accentClass }) {
  return (
    <div className="flex-none  w-[280px] lg:w-[300px] flex flex-col gap-3.5">

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
      <div className="flex flex-col gap-0.5">
        <p className="text-lg font-semibold text-gray-900 leading-tight">{name}</p>
        <p className={cn("text-xs font-medium leading-snug rounded-full border-1 px-1 py-1", accentClass)}>{role}</p>
        <p className="text-xs text-gray-400 leading-snug">{company}</p>
      </div>

      {/* Quote */}
      <p className="text-sm text-gray-500 leading-relaxed">
        "{quote}"
      </p>
    </div>
  );
}


const  Benefit=({
  eyebrow ,
  heading  ,
  subheading ,
  items=[]   ,
  className,
}) =>{
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 248, behavior: "smooth" });
  };

  return (
    <section
    className={cn(
      "py-12 md:py-16 bg-white text-gray-900 ",
      className
    )}
  >
    <div className="container mx-auto px-6 md:px-16 lg:px-20">

      <div className="flex flex-row justify-between">
 <div className="mb-10">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-violet-600 mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900 ">
            {heading}
          </h2>
           <div className=" w-28 h-1 bg-violet-600 rounded-full" />
          <p className="mt-2 text-sm text-gray-400 max-w-md leading-relaxed">
            {subheading}
          </p>
         
        </div>
           <div className="mt-8 flex items-center gap-3">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-violet-500 hover:text-violet-600 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-violet-500 hover:text-violet-600 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

        {/* ── Header ── */}
       

        {/* ── Scrollable cards ── */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* hide webkit scrollbar inline so no external CSS file needed */}
          <style>{`
            .dba-scroll::-webkit-scrollbar { display: none; }
          `}</style>

          {items.map((item, i) => (
            <InstructorCard
              key={item.id}
              {...item}
              accentClass={ROLE_COLORS[i % ROLE_COLORS.length]}
            />
          ))}
        </div>

      
     

      </div>
    </section>
  );
}

export default Benefit