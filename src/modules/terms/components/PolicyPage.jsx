import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
import Reveal from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

// A single numbered clause. `blocks` is an ordered mix of paragraph strings
// and `{ list: [...] }` bullet groups, so clauses can interleave prose and
// lists in whatever order the source policy uses.
function PolicySection({ heading, blocks = [], className }) {
  return (
    <Reveal className={cn("scroll-mt-24", className)} amount={0.1}>
      <h2 className="text-lg md:text-xl font-bold text-primary tracking-tight mb-3">
        {heading}
      </h2>
      <div className="flex flex-col gap-3">
        {blocks.map((block, i) =>
          typeof block === "string" ? (
            <p
              key={i}
              className="text-sm md:text-base text-muted-foreground leading-relaxed"
            >
              {block}
            </p>
          ) : (
            <ul key={i} className="flex flex-col gap-2.5 mt-1">
              {block.list.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-light-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </Reveal>
  );
}

// Generic legal-page shell shared by Privacy Policy and Refund Policy —
// same header + card pattern, fed by a per-page data file.
function PolicyPage({ label, title, intro, lastUpdated, sections = [] }) {
  return (
    <div className="w-full relative">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[300px] md:w-[600px] rounded-full bg-light-blue/10 blur-[100px]"
      />

      <SectionViewer className="inter relative z-10 pt-16 md:pt-20 pb-20">
        {/* Header */}
        <Reveal
          as="div"
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center mb-14"
        >
          <SectionLabel label={label} />
          <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl xl:text-5xl leading-tight">
            {title}
          </h1>
          {intro && (
            <p className="text-base text-muted-foreground leading-relaxed md:text-lg max-w-2xl">
              {intro}
            </p>
          )}
          {lastUpdated && (
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm shadow-primary/15">
              Last updated: {lastUpdated}
            </span>
          )}
        </Reveal>

        {/* Body */}
        <div className="mx-auto flex max-w-3xl flex-col gap-8 rounded-3xl bg-white p-6 shadow-sm shadow-primary/5 md:p-10">
          {sections.map((section, i) => (
            <PolicySection
              key={section.heading}
              {...section}
              className={cn(i !== 0 && "pt-8 border-t border-dashed border-primary/10")}
            />
          ))}
        </div>
      </SectionViewer>
    </div>
  );
}

export default PolicyPage;
