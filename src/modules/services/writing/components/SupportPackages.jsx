import { motion } from "motion/react";
import { Check, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SupportPackages({ data }) {
  const { packages } = data;

  return (
    <div className="bg-muted/40">
      <SectionViewer className="inter py-16 md:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
        >
          <SectionLabel label="Support Packages" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
            {packages.heading}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {packages.sub}
          </p>
        </motion.div>

        {/* Tiers */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {packages.items.map((pkg) => {
            const popular = !!pkg.popular;
            return (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={cn(
                  "group relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1.5",
                  popular
                    ? "border-transparent text-white shadow-xl shadow-primary/25"
                    : "border-border bg-white hover:shadow-lg hover:shadow-light-blue/10"
                )}
                style={
                  popular
                    ? {
                        background:
                          "linear-gradient(160deg, #170545 0%, #320F8C 60%, #6B52F9 100%)",
                      }
                    : undefined
                }
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-secondary px-3 py-1 text-[11px] font-bold text-secondary-foreground shadow-sm">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </span>
                )}

                <h3 className={cn("text-lg font-bold", popular ? "text-white" : "text-primary")}>
                  {pkg.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    popular ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {pkg.desc}
                </p>

                {/* Best for */}
                <div
                  className={cn(
                    "mt-5 flex items-start gap-2 rounded-2xl p-3.5",
                    popular ? "bg-white/10" : "bg-muted/60"
                  )}
                >
                  <Check
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      popular ? "text-secondary" : "text-light-blue"
                    )}
                    strokeWidth={3}
                  />
                  <div>
                    <p
                      className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        popular ? "text-white/55" : "text-muted-foreground"
                      )}
                    >
                      Best for
                    </p>
                    <p
                      className={cn(
                        "text-sm font-semibold",
                        popular ? "text-white" : "text-primary"
                      )}
                    >
                      {pkg.bestFor}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#writing-form"
                  className={cn(
                    "mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold transition-colors",
                    popular ? "text-secondary hover:text-white" : "text-blue hover:text-light-blue"
                  )}
                >
                  Choose this
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionViewer>
    </div>
  );
}
