import { motion } from "motion/react";
import { Send, Phone, ArrowRight, MapPin } from "lucide-react";
import { IconBrandWhatsapp, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import { LogoCloud } from "@/modules/home/components/UniversityPartnership";
import { CONTACT, waLink } from "@/lib/contact";

const LOGOS_1 = [
    { src: "/lpu.jpg",       alt: "Lovely Professional University" },
    { src: "/mizoram.png",   alt: "Mizoram University" },
    { src: "/amu.png",       alt: "Aligarh Muslim University" },
    { src: "/Kennedy.png",   alt: "Kennedy University" },
    { src: "/jamia.png",     alt: "Jamia Hamdard" },
    { src: "/kuru.png",      alt: "Kurukshetra University" },
    { src: "/dyp.webp",      alt: "Dr. DY Patil, Pune" },
];

const LOGOS_2 = [
    { src: "/amity.jpeg",    alt: "Amity University" },
    { src: "/gla-logo.webp", alt: "GLA University" },
    { src: "/cu.png",        alt: "Chandigarh University" },
    { src: "/dpu.png",       alt: "Dr Patil University" },
    { src: "/euroasian.png", alt: "EuroAsian University" },
    { src: "/jain.png",      alt: "Jain University" },
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
                        Speak to our friendly team — we reply within a couple of hours.
                    </p>
                    <motion.div className="mt-4 flex flex-col gap-3" variants={linkStagger}>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={IconBrandWhatsapp} href={waLink()} external>
                                Chat on WhatsApp
                            </ContactLink>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={Send} href={`mailto:${CONTACT.email}`}>
                                {CONTACT.email}
                            </ContactLink>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={IconBrandInstagram} href={CONTACT.socials.instagram} external>
                                Follow us on Instagram
                            </ContactLink>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={IconBrandLinkedin} href={CONTACT.socials.linkedin} external>
                                Connect on LinkedIn
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
                            <ContactLink icon={Phone} href={`tel:${CONTACT.support.tel}`}>
                                Support · {CONTACT.support.display}
                            </ContactLink>
                        </motion.div>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={IconBrandWhatsapp} href={waLink()} external>
                                Enquiry · {CONTACT.enquiry.display}
                            </ContactLink>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Visit us */}
                <motion.div
                    className="mt-10"
                    variants={fadeUp}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <h2 className="text-lg font-bold text-primary">Visit us</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Our office is based in Ghaziabad, India.
                    </p>
                    <motion.div className="mt-4 flex flex-col gap-3" variants={linkStagger}>
                        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <ContactLink icon={MapPin} href={CONTACT.mapUrl} external>
                                {CONTACT.address}
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
                    <div className="mt-4">
                        <LogoCloud imageClass={"!h-8"} logos={LOGOS_1} reverse={false} />
                        <LogoCloud imageClass={"!h-8"} logos={LOGOS_2} reverse={true} />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}




// A single icon + label contact row that links out.
function ContactLink({ icon: Icon, href, external, children }) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
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
