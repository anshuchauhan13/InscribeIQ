import { motion } from "motion/react";
import { Users, School, Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

// The four partner profiles the program is designed for — each gets its own
// jewel-tone accent so the grid reads modern and colourful while staying on-brand.
const AUDIENCE = [
    {
        icon: Users,
        title: "Education Consultants",
        desc: "Add high-value PhD, DBA and honorary doctorate offerings to your portfolio and earn on every scholar you refer.",
        gradient: "from-violet-500 to-purple-600",
        hoverBorder: "hover:border-violet-300",
        hoverShadow: "hover:shadow-violet-500/20",
    },
    {
        icon: School,
        title: "Coaching & Training Centres",
        desc: "Turn your existing student base into recurring income by guiding them toward advanced academic credentials.",
        gradient: "from-blue-500 to-indigo-600",
        hoverBorder: "hover:border-blue-300",
        hoverShadow: "hover:shadow-blue-500/20",
    },
    {
        icon: Briefcase,
        title: "Corporate L&D & HR Teams",
        desc: "Offer leadership recognition and executive doctorate pathways to your workforce through a trusted partner.",
        gradient: "from-fuchsia-500 to-purple-600",
        hoverBorder: "hover:border-fuchsia-300",
        hoverShadow: "hover:shadow-fuchsia-500/20",
    },
    {
        icon: GraduationCap,
        title: "University Representatives",
        desc: "Connect institutions and alumni networks to our publishing and accreditation services with full support.",
        gradient: "from-sky-500 to-blue-600",
        hoverBorder: "hover:border-sky-300",
        hoverShadow: "hover:shadow-sky-500/20",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function PartnerAudience() {
    return (
        <SectionViewer className="inter py-16 md:py-24">
            {/* Heading */}
            <motion.div
                className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
            >
                <SectionLabel label="Who Can Partner" />
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
                    Built for everyone who guides ambitious learners
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    Whether you advise individuals or represent an institution, there is a place
                    for you in the Inscribe IQ partner network.
                </p>
            </motion.div>

            {/* Cards */}
            <motion.div
                className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {AUDIENCE.map(({ icon: Icon, title, desc, gradient, hoverBorder, hoverShadow }) => (
                    <motion.div
                        key={title}
                        variants={fadeUp}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={cn(
                            "group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl",
                            hoverBorder,
                            hoverShadow
                        )}
                    >
                        {/* Corner glow on hover */}
                        <span
                            aria-hidden="true"
                            className={cn(
                                "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30",
                                gradient
                            )}
                        />

                        <span
                            className={cn(
                                "relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110",
                                gradient
                            )}
                        >
                            <Icon className="h-7 w-7" />
                        </span>
                        <h3 className="relative text-lg font-bold text-primary">{title}</h3>
                        <p className="relative text-sm leading-relaxed text-muted-foreground">{desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </SectionViewer>
    );
}
