import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";


// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────────

function LearnMoreBtn({ dark = false }) {
  return (
    <button
      className={`inline-flex items-center gap-2 text-[13px] font-bold underline underline-offset-2 transition-opacity hover:opacity-75 border-none bg-transparent cursor-pointer ${
        dark ? "text-white" : "text-[#0d3322]"
      }`}
    >
      Learn More
      <span className="w-7 h-7 rounded-full bg-light-blue flex items-center justify-center flex-shrink-0">
        <ArrowDown size={13} color="#fff" strokeWidth={2.5} />
      </span>
    </button>
  );
}

/** Card 1 — Stat card */
function StatCard({ data }) {
  return (
    <div className="rounded-[18px] bg-white flex flex-col justify-between p-7 lg:row-span-2 min-h-[280px] lg:min-h-[320px]">
      <div>
        <p className="text-[10px] font-semibold tracking-[.18em] uppercase text-primary mb-3">
          {data.eyebrow}
        </p>
        <p className="text-[15px] font-medium text-black leading-relaxed">{data.body}</p>
      </div>
      <div className="mt-6 lg:mt-0">
        <p className="text-[46px] font-bold text-light-blue leading-none tracking-tight mb-1">
          {data.stat}
        </p>
        <p className="text-[12px] text-light-blue mb-4">{data.statLabel}</p>
        <div className="inline-block bg-primary text-white text-[12px] font-semibold px-5 py-2.5 rounded-[10px] leading-snug">
          {data.badgeText}
        </div>
      </div>
    </div>
  );
}

/** Card 2 — Dark image card */
function ImageCard({ data }) {
  return (
    <div className="rounded-[18px] overflow-hidden relative flex flex-col justify-end lg:row-span-2 min-h-[280px] lg:min-h-[320px] bg-black">
      <img
        src={data.img}
        alt="Research workspace"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div className="relative z-10 p-6">
        <span className="inline-flex bg-white/20 backdrop-blur-sm border border-white/25 text-white text-[11px] font-medium px-3 py-1.5 rounded-full mb-3">
          {data.badge}
        </span>
        <h3 className="text-[20px] font-bold text-white leading-snug mb-2">{data.title}</h3>
        <p className="text-[12.5px] text-white/75 leading-relaxed mb-4">{data.sub}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {data.tags.map((t) => (
            <span
              key={t}
              className="bg-white/15 border border-white/20 text-white text-[11px] px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <LearnMoreBtn dark />
      </div>
    </div>
  );
}

/** Card 3 — Light text card */
function LightCard({ data }) {
  return (
    <div className="rounded-[18px] bg-white md:col-span-2 lg:col-span-2 flex flex-col justify-between p-7">
      <div>
        <p className="text-[10px] font-semibold tracking-[.18em] uppercase text-primary mb-2.5">
          {data.eyebrow}
        </p>
        <h3 className="text-[20px] font-bold text-primary leading-snug mb-1.5">{data.title}</h3>
        <p className="text-[12.5px] font-medium text-light-blue mb-2.5">{data.accent}</p>
        <p className="text-[13px] text-[#4a5a4e] leading-relaxed mb-5">{data.body}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {data.pills.map((p) => (
            <span
              key={p}
              className="bg-primary text-white text-[11.5px] font-medium px-3.5 py-1.5 rounded-full"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
      <LearnMoreBtn />
    </div>
  );
}

/** Card 4 & 5 — Dark text card */
function DarkCard({ data }) {
  return (
    <div className="rounded-[18px] bg-primary flex flex-col p-7">
      <span className="inline-flex bg-light-blue text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full mb-4 w-fit">
        {data.badge}
      </span>
      <h3 className="text-[20px] font-bold text-white leading-snug mb-2">{data.title}</h3>
      <p className="text-[12.5px] font-medium text-light-blue mb-2.5">{data.accent}</p>
      <p className="text-[13px] text-white/65 leading-relaxed mb-5 flex-1">{data.body}</p>
      <LearnMoreBtn dark />
    </div>
  );
}

const WhyInscribe = ({
  tagline="why choose Inscribe IQ",
 heading = "",
  subheading = "",
  cards = {},
}) => {
  return (
    <section className="bg-light-blue/10">
      <SectionViewer className="py-12 md:py-16">

      {/* ── TOP HEADING ── */}
      <div className="mb-8 md:mb-11">
          <SectionLabel label={tagline} />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-[1.15] tracking-tight mb-4">
          {heading}
        </h2><div className="mb-2 h-1 w-22 bg-light-blue rounded-full" />
        <p className="text-[14px] md:text-[15px] text-foreground leading-[1.75] max-w-3xl">{subheading}</p>
      </div>

      {/* ── BENTO GRID ──
          mobile:  1 col, all cards stacked
          tablet:  2 col, cards fill naturally (LightCard spans 2)
          desktop: 4 col × 2 row bento (unchanged)
      ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3.5">

        {/* Stat card — lg: col 1, rows 1-2 */}
        <StatCard data={cards.stat} />

        {/* Image card — lg: col 2, rows 1-2 */}
        <ImageCard data={cards.imageCard} />

        {/* Light card — md: spans 2 cols, lg: cols 3-4 row 1 */}
        <LightCard data={cards.lightCard} />

        {/* Dark card 1 — lg: col 3 row 2 */}
        <DarkCard data={cards.darkCard1} />

        {/* Dark card 2 — lg: col 4 row 2 */}
        <DarkCard data={cards.darkCard2} />

      </div>
      </SectionViewer>
    </section>
  );
};

export default WhyInscribe;