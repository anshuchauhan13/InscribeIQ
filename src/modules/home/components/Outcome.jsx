import { Check } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const OUTCOMES = [
  { emoji: "🎓", category: "PhD / DBA", text: "Be Among the Elite 1% of Doctoral Scholars" },
  { emoji: "📚", category: "Publication Services", text: "Get Published in Journals That Influence Global Research" },
  { emoji: "📝", category: "Thesis Support", text: "Submit Your Thesis with Confidence and Academic Excellence" },
  { emoji: "🏅", category: "Honorary Doctorate", text: "Earn Recognition for Your Lifetime Achievements" },
  { emoji: "🎯", category: "UG / PG Admissions", text: "Unlock New Career Opportunities Through Higher Education" },
  { emoji: "📜", category: "Certification Programs", text: "Future-Proof Your Career with In-Demand Skills" },
];

function Outcome() {
  return (
    <SectionViewer className="py-14 md:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — heading + checklist */}
        <div className="flex flex-col">
          <SectionLabel label="The InscribeIQ Advantage" className="mb-3" />

          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl xl:text-5xl leading-tight">
            Outcomes Only We Deliver
          </h2>
          {/* Accent underline */}
          <span className="mt-4 h-1 w-28 rounded-full bg-light-blue" />

          <ul className="mt-10 flex flex-col gap-5">
            {OUTCOMES.map(({ emoji, category, text }) => (
              <li key={category} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-light-blue/10 text-light-blue">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {emoji} {category}
                  </span>
                  <span className="text-base font-medium text-primary">
                    {text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — layered image */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Offset background cards for the stacked effect */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-light-blue/20" />
          <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-3xl bg-muted" />

          <img
            src="https://picsum.photos/seed/graduation-ceremony/900/720"
            alt="Graduates celebrating their achievement"
            className="relative w-full rounded-3xl border-4 border-white object-cover shadow-xl"
          />
        </div>
      </div>
    </SectionViewer>
  );
}

export default Outcome;
