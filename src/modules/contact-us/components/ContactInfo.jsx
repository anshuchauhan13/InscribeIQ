import { motion } from "motion/react";
import { MessageSquareText, Send, Phone, ArrowRight } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const UNIVERSITIES = [
    "Global Leadership Academy",
    "Cambridge International Institute",
    "Pacific State University",
    "Heritage School of Business",
    "Meridian University",
    "Atlantic Institute of Technology",
    "Northgate University",
    "Royal Academy of Sciences",
];

const slideRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const linkStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
};

export default function ContactInfo() {
    return (
        <motion.div
            className="flex flex-col gap-10"
            variants={slideRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div variants={stagger} initial="hidden" animate="visible">
                {/* Chat with us */}
                <motion.div variants={fadeUp} transition={{ duration: 0.45, ease: "easeOut" }}>
                    <h2 className="text-lg font-bold text-primary">Chat with us</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Speak to our friendly team via live chat.
                    </p>
                    <motion.div className="mt-4 flex flex-col gap-3" variants={linkStagger}>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={MessageSquareText} href="#">
                                Start a live chat
                            </ContactLink>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={Send} href="mailto:hello@inscribeiq.com">
                                Shoot us an email
                            </ContactLink>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={IconBrandX} href="#">
                                Message us on X
                            </ContactLink>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Call us */}
                <motion.div
                    className="mt-10"
                    variants={fadeUp}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <h2 className="text-lg font-bold text-primary">Call us</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Call our team Mon–Fri from 9am to 6pm.
                    </p>
                    <motion.div className="mt-4 flex flex-col gap-3" variants={linkStagger}>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={Phone} href="tel:+919876543210">
                                +91 98765 43210
                            </ContactLink>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={Phone} href="tel:+911140001234">
                                +91 11 4000 1234
                            </ContactLink>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Trusted by — small infinite carousel */}
                <motion.div
                    className="mt-10"
                    variants={fadeUp}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <h2 className="text-lg font-bold text-primary">
                        Trusted by 10,000+ universities
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Recognised by institutions and academic bodies worldwide.
                    </p>
                    <div className="mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] space-y-3">
                        <InfiniteSlider gap={28} duration={48} durationOnHover={1000}>
                            {UNIVERSITIES.map((name) => (
                                <span
                                    key={name}
                                    className="whitespace-nowrap text-sm font-semibold text-muted-foreground/80"
                                >
                                    {name}
                                </span>
                            ))}
                        </InfiniteSlider>

                        <InfiniteSlider gap={28} duration={48} durationOnHover={1000} reverse={true}>
                            {UNIVERSITIES.map((name) => (
                                <span
                                    key={name}
                                    className="whitespace-nowrap text-sm font-semibold text-muted-foreground/80"
                                >
                                    {name}
                                </span>
                            ))}
                        </InfiniteSlider>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}




// A single icon + label contact row that links out.
function ContactLink({ icon: Icon, href, children }) {
    return (
        <a
            href={href}
            className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-blue"
        >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                <Icon className="size-4" />
            </span>
            <span className="underline-offset-4 group-hover:underline">{children}</span>
            <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
        </a>
    );
}
