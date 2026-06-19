import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

// Partner social proof — reworded from the reference testimonial, expanded into
// a small grid so the section carries more weight.
const TESTIMONIALS = [
    {
        quote:
            "Within three months of joining the Channel program, my consultancy was earning steady monthly commissions. The leads are genuine, payouts are always on time, and the partner team feels like an extension of my own.",
        name: "Arjun Mehta",
        role: "Founder, Pinnacle Education Consultancy",
        initials: "AM",
        featured: true,
    },
    {
        quote:
            "The onboarding was effortless and the partner portal makes tracking referrals simple. It's the most transparent program I've worked with.",
        name: "Priya Nair",
        role: "Director, BrightPath Coaching",
        initials: "PN",
    },
    {
        quote:
            "As a strategic partner we co-host webinars and share territory rights. Inscribe IQ treats us like true collaborators, not just affiliates.",
        name: "Daniel Okafor",
        role: "Head of L&D, Vertex Group",
        initials: "DO",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

function Stars() {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
            ))}
        </div>
    );
}

function Avatar({ initials, dark }) {
    return (
        <span
            className={
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold " +
                (dark ? "bg-white/15 text-white" : "bg-primary/10 text-primary")
            }
        >
            {initials}
        </span>
    );
}

export default function PartnerTestimonial() {
    const [featured, ...rest] = TESTIMONIALS;

    return (
        <SectionViewer className="inter py-16 md:py-24">
            {/* Heading */}
            <motion.div
                className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-3 text-center"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
            >
                <SectionLabel label="Partner Stories" />
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
                    Loved by partners across the globe
                </h2>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 gap-6 lg:grid-cols-3"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Featured */}
                <motion.figure
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="noise relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-primary p-8 text-white lg:col-span-2 lg:p-10"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-light-blue/30 blur-3xl"
                    />
                    <div className="relative flex flex-col gap-6">
                        <Quote className="h-10 w-10 text-secondary" />
                        <blockquote className="text-xl font-medium leading-relaxed md:text-2xl">
                            “{featured.quote}”
                        </blockquote>
                    </div>
                    <figcaption className="relative flex items-center gap-3">
                        <Avatar initials={featured.initials} dark />
                        <div>
                            <p className="font-bold">{featured.name}</p>
                            <p className="text-sm text-primary-foreground/70">{featured.role}</p>
                        </div>
                        <div className="ml-auto">
                            <Stars />
                        </div>
                    </figcaption>
                </motion.figure>

                {/* Supporting */}
                <div className="flex flex-col gap-6">
                    {rest.map((t) => (
                        <motion.figure
                            key={t.name}
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-1 flex-col justify-between gap-5 rounded-3xl border border-border bg-white p-6"
                        >
                            <div className="flex flex-col gap-3">
                                <Stars />
                                <blockquote className="text-sm leading-relaxed text-foreground/80">
                                    “{t.quote}”
                                </blockquote>
                            </div>
                            <figcaption className="flex items-center gap-3">
                                <Avatar initials={t.initials} />
                                <div>
                                    <p className="text-sm font-bold text-primary">{t.name}</p>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </motion.div>
        </SectionViewer>
    );
}
