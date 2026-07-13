import { motion } from "motion/react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const EASE = [0.22, 0.61, 0.36, 1];

const gridVar = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** A single clean feature card — uniform across the grid. */
function FeatureCard({ item }) {
  return (
    <motion.div
      variants={cardVar}
      className="group flex flex-col rounded-2xl border border-primary/10 bg-white p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-light-blue/40 hover:shadow-[0_22px_44px_-26px_rgba(50,15,140,0.28)]"
    >
      <div className="mb-5 h-1 w-8 rounded-full bg-gradient-to-r from-light-blue to-blue transition-all duration-300 group-hover:w-12" />
      {item.label && (
        <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[.18em] text-light-blue">
          {item.label}
        </p>
      )}
      <h3 className="mb-2 text-lg md:text-xl font-bold leading-snug text-primary">
        {item.title}
      </h3>
      {item.accent && (
        <p className="mb-2 text-[12.5px] font-medium text-light-blue">{item.accent}</p>
      )}
      <p className="text-[13.5px] leading-relaxed text-foreground/70">{item.body}</p>
    </motion.div>
  );
}

const WhyInscribe = ({
  tagline = "why choose Inscribe IQ",
  heading = "",
  subheading = "",
  cards = {},
}) => {
  // Normalise the five card entries into one uniform list.
  const { stat, imageCard, lightCard, darkCard1, darkCard2 } = cards;
  const items = [
    stat && {
      label: stat.eyebrow,
      title: [stat.stat, stat.statLabel].filter(Boolean).join(" "),
      body: stat.body,
    },
    imageCard && {
      label: imageCard.badge,
      title: imageCard.title,
      body: imageCard.sub,
    },
    lightCard && {
      label: lightCard.eyebrow,
      title: lightCard.title,
      accent: lightCard.accent,
      body: lightCard.body,
    },
    darkCard1 && {
      label: darkCard1.badge,
      title: darkCard1.title,
      accent: darkCard1.accent,
      body: darkCard1.body,
    },
    darkCard2 && {
      label: darkCard2.badge,
      title: darkCard2.title,
      accent: darkCard2.accent,
      body: darkCard2.body,
    },
  ].filter(Boolean);

  return (
    <section className="bg-muted">
      <SectionViewer className="py-14 md:py-20">
        {/* ── Heading ── */}
        <div className="mb-10 md:mb-12 max-w-3xl">
          <SectionLabel label={tagline} />
          <h2 className="mt-2 mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-primary">
            {heading}
          </h2>
          <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-light-blue to-blue" />
          <p className="text-[14px] md:text-[15px] leading-[1.75] text-foreground/70">
            {subheading}
          </p>
        </div>

        {/* ── Uniform feature grid ── */}
        <motion.div
          variants={gridVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </motion.div>
      </SectionViewer>
    </section>
  );
};

export default WhyInscribe;
