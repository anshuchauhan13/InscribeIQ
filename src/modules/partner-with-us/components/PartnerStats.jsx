import { motion } from "motion/react";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

// Headline metrics that build trust in the partner program. Reworded from the
// reference brief but kept directionally accurate for Inscribe IQ.
const STATS = [
    { value: "750+", label: "Active Partners Worldwide" },
    { value: "40+", label: "Countries Served" },
    { value: "₹2L+", label: "Avg. Monthly Partner Payouts" },
    { value: "95%", label: "Partner Retention Rate" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function PartnerStats() {
    return (
        <SectionViewer className="inter">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="noise relative overflow-hidden rounded-3xl bg-primary px-6 py-12 md:px-12 md:py-16 lg:px-16"
            >
                {/* Soft brand glows */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-light-blue/30 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-blue/50 blur-3xl"
                />

                {/* Heading */}
                <div className="relative flex flex-col items-center gap-3 text-center md:items-start md:text-left">
                    <SectionLabel label="Why Partners Choose Us" className="text-secondary" />
                    <h2 className="max-w-3xl text-2xl font-bold leading-tight text-white md:text-3xl xl:text-4xl">
                        A partner network built on real leads and on-time payouts
                    </h2>
                    <p className="max-w-2xl text-sm text-primary-foreground/70 md:text-base">
                        We have spent years helping scholars and professionals publish, graduate
                        and earn recognition. Our partners share in that success — transparently
                        and dependably.
                    </p>
                </div>

                {/* Metrics */}
                <motion.div
                    className="relative mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-14 md:grid-cols-4 md:gap-8"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                >
                    {STATS.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col gap-1.5 border-l border-white/15 pl-4 md:pl-6"
                        >
                            <span className="text-3xl font-extrabold tracking-tight text-secondary md:text-4xl xl:text-5xl">
                                {stat.value}
                            </span>
                            <span className="text-xs leading-snug text-primary-foreground/70 md:text-sm">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </SectionViewer>
    );
}
