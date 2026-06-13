import { useState } from "react";


const Journey = ({
  steps ,
  eyebrow ,
  headingMain ,
  headingAccent ,
  subheading ,
}) => {
  return (
    <section className="w-full bg-white sm:px-10 lg:px-16 font-inter overflow-hidden container mx-auto px-5 md:px-16 lg:px-20 py-12 md:py-16 lg:py-16">
      {/* Heading */}
      <div className="mb-12">
        {eyebrow && (
          <p className="text-lg font-bold tracking-[.14em] uppercase text-light-blue mb-2.5">
            {eyebrow}
          </p>
        )}
        <h2 className="text-5xl font-bold text-[#170545] leading-[1.15] mb-2.5">
          {headingMain}{" "}
          
        </h2>
        <div className="mb-4 h-1 w-25 bg-light-blue rounded-full" />
        {subheading && (
          <p className="text-[13.5px] text-gray-400 max-w-md leading-[1.75]">
            {subheading}
          </p>
        )}
      </div>

     {/* Desktop Horizontal Timeline — only lg+ */}
<div className="hidden lg:block relative">
  <div className="absolute top-[34px] left-0 right-0 h-0.5 bg-[#ddd8f8] z-0" />
  <div className="relative flex items-start justify-between gap-6 z-10">
    {steps.map((step, i) => (
      <StepNode key={step.id} step={step} isLast={i === steps.length - 1} />
    ))}
  </div>
</div>

{/* Mobile + Tablet Vertical Stack — below lg */}
<div className="flex lg:hidden flex-col">
  {steps.map((step, i) => (
    <MobileStep key={step.id} step={step} isLast={i === steps.length - 1} />
  ))}
</div>
    </section>
  );
};

/* Desktop Step with improved hover */
function StepNode({ step, isLast }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover Card */}
      <div
        className={`
          absolute bottom-[calc(100%+24px)] left-1/2 -translate-x-1/2 w-60
          bg-white border border-purple-100 rounded-2xl px-5 py-4 shadow-xl
          transition-all duration-300 z-30
          ${hovered 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }
        `}
      >
        <p className="text-[10px] font-bold tracking-[.12em] uppercase text-purple-400 mb-1.5">
          STEP {String(step.id).padStart(2, "0")}
        </p>
        <p className="text-[15px] font-bold text-[#170545] leading-tight mb-2">
          {step.title}
        </p>
        <p className="text-[13px] text-gray-500 leading-relaxed">
          {step.desc}
        </p>
      </div>

      {/* Circle */}
      <div
        className="relative flex items-center justify-center rounded-full transition-all duration-300 z-20"
        style={{
          width: 68,
          height: 68,
          background: hovered ? "#320F8C" : "#170545",
          boxShadow: hovered
            ? "0 0 0 8px #c4b8f0, 0 0 0 14px rgba(122,94,233,0.25)"
            : "0 0 0 5px #dbd3f7, 0 0 0 10px rgba(196,184,240,0.18)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        <div className="absolute inset-2 rounded-full border border-white/30" />
        <span
          className="relative z-10 text-white font-bold"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18 }}
        >
          {String(step.id).padStart(2, "0")}
        </span>
      </div>

      {/* Short Title */}
      <p className="mt-4 text-[13px] font-bold text-[#170545] text-center max-w-[110px] leading-snug">
        {step.shortTitle ?? step.title}
      </p>

      {/* Connecting Line (except last) */}
      {!isLast && (
        <div className="absolute top-[34px] left-[50%] w-[calc(100%-32px)] h-0.5 bg-[#ddd8f8] -z-10 group-hover:bg-purple-200 transition-colors" />
      )}
    </div>
  );
}

/* Mobile Step (unchanged but slightly refined) */
/* Mobile Step — with connecting line */
function MobileStep({ step, isLast }) {
  return (
    <div className="flex items-start gap-5">
      {/* Left: circle + vertical line */}
      <div className="flex flex-col items-center">
        <div
          className="relative flex items-center justify-center rounded-full shrink-0"
          style={{
            width: 56,
            height: 56,
            background: "#170545",
            boxShadow: "0 0 0 4px #dbd3f7, 0 0 0 8px rgba(196,184,240,0.16)",
          }}
        >
          <div className="absolute inset-2 rounded-full border border-white/25" />
          <span
            className="relative z-10 text-white font-bold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 15 }}
          >
            {String(step.id).padStart(2, "0")}
          </span>
        </div>

        {/* Vertical connecting line */}
        {!isLast && (
          <div className="w-0.5 flex-1 min-h-[70px] bg-[#ddd8f8] my-1" />
        )}
      </div>

      {/* Right: text content */}
      <div className="pt-1 pb-6">
        <p className="text-[9.5px] font-bold tracking-widest uppercase text-purple-400 mb-1">
          STEP {String(step.id).padStart(2, "0")}
        </p>
        <p className="text-[14px] font-bold text-[#170545] mb-1.5">{step.title}</p>
        <p className="text-[13px] text-gray-500 leading-relaxed pr-4">{step.desc}</p>
      </div>
    </div>
  );
}

export default Journey;