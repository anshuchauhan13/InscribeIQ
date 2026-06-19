import { motion } from "motion/react";
import { ClipboardList, PhoneCall, GraduationCap, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

// Four-step onboarding flow — reworded from the reference's
// "Apply / Assessment / Onboarding / Start Earning" journey.
const STEPS = [
    {
        icon: ClipboardList,
        title: "Apply Online",
        desc: "Share who you are, the network you reach and your goals through our short partner application.",
    },
    {
        icon: PhoneCall,
        title: "Quick Alignment Call",
        desc: "Our partner team reviews your profile and hops on a 30-minute call to confirm the right fit.",
    },
    {
        icon: GraduationCap,
        title: "Onboarding & Certification",
        desc: "Finish our partner certification, then unlock your portal, marketing kit and unique referral links.",
    },
    {
        icon: Wallet,
        title: "Refer & Start Earning",
        desc: "Refer scholars, track every lead and commission live, and receive your payouts right on schedule.",
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

export default function PartnerProcess() {
    return (
        <div className="light-gradiant">
            <SectionViewer className="inter py-16 md:py-24">
                {/* Heading */}
                <motion.div
                    className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <SectionLabel label="How It Works" />
                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
                        From application to earning in under 7 days
                    </h2>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                        Our onboarding is simple, fast and fully supported — so you can start
                        referring and earning without the usual paperwork.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative mt-14">
                    {/* Connector segments (desktop) — drawn in the gaps *between* the
                        icons. Mirrors the steps grid so each segment lines up, fades out
                        at both ends, and carries a blue ray that travels one by one. */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 hidden grid-cols-4 gap-x-6 lg:grid"
                    >
                        {STEPS.map((_, i) => (
                            <div key={i} className="relative">
                                {i < STEPS.length - 1 && (
                                    <div className="absolute top-7 left-1/2 h-px w-[calc(100%+1.5rem)]">
                                        <div className="relative mx-9 h-px bg-gradient-to-r from-transparent via-light-blue/60 to-transparent">
                                            <span
                                                className="process-ray"
                                                style={{ animationDelay: `${i}s` }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <motion.div
                        className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {STEPS.map(({ icon: Icon, title, desc }, i) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative flex sm:flex-col items-start gap-6 sm:gap-4 lg:items-center lg:text-center"
                            >
                                {/* Vertical connector (single-column layout) — drawn in the
                                    gap below this icon down to the next, with a top→bottom ray. */}
                                {i < STEPS.length - 1 && (
                                    <div className="absolute left-7 top-16 h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-light-blue/60 to-transparent sm:hidden">
                                        <span
                                            className="process-ray-v"
                                            style={{ animationDelay: `${i}s` }}
                                        />
                                    </div>
                                )}

                                {/* Icon with step-number badge */}
                                <div className="relative">
                                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-secondary-foreground ring-2 ring-white">
                                        {i + 1}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1.5 -mt-1 sm:mt-0">
                                    <h3 className="text-lg font-bold text-primary">{title}</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Button asChild size="lg" variant="gradiant" className="font-semibold pr-6 pl-8 rounded-full">
                        <a href="#apply">
                            Apply Now <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>
                </motion.div>
            </SectionViewer>
        </div>
    );
}
