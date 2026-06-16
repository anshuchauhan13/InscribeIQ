import { MessageSquareText, Send, Phone, ArrowRight } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// Universities shown in the small "trusted by" infinite carousel.
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

export default function ContactInfo() {
    return (
        <div className="flex flex-col gap-10">
            {/* Chat with us */}
            <div>
                <h2 className="text-lg font-bold text-primary">Chat with us</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                    Speak to our friendly team via live chat.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                    <ContactLink icon={MessageSquareText} href="#">
                        Start a live chat
                    </ContactLink>
                    <ContactLink
                        icon={Send}
                        href="mailto:hello@inscribeiq.com"
                    >
                        Shoot us an email
                    </ContactLink>
                    <ContactLink icon={IconBrandX} href="#">
                        Message us on X
                    </ContactLink>
                </div>
            </div>

            {/* Call us */}
            <div>
                <h2 className="text-lg font-bold text-primary">Call us</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                    Call our team Mon–Fri from 9am to 6pm.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                    <ContactLink icon={Phone} href="tel:+919876543210">
                        +91 98765 43210
                    </ContactLink>
                    <ContactLink icon={Phone} href="tel:+911140001234">
                        +91 11 4000 1234
                    </ContactLink>
                </div>
            </div>

            {/* Trusted by — small infinite carousel */}
            <div>
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
            </div>
        </div>
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
