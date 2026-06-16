import PageViewer from "@/components/common/PageViewer";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ContactBottomCard from "../components/ContactBottomCard";


export default function ContactUsPage() {
    return (
        <PageViewer className="light-gradiant pb-20 md:pb-30">

            <div className="w-full bg-muted/50 relative">
                {/* Top Fade Grid Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
                                linear-gradient(to right, #e0e8f8 1px, transparent 1px),
                                linear-gradient(to bottom, #E0E8F8 1px, transparent 1px)
                            `,
                        backgroundSize: "40px 60px",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                    }}
                />
                <SectionViewer className="inter py-16 md:py-24 relative z-5">
                    {/* Header */}
                    <div className="mx-auto flex flex-col items-center gap-3 text-center">
                        <SectionLabel label="Contact Us" />
                        <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl xl:text-5xl leading-tight">
                            Talk to our academic advisory team
                        </h1>
                        <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
                            We'll help you find the right academic path — no matter your goal or
                            where you are in your journey.
                        </p>
                    </div>

                    {/* Two-column layout: form + contact info */}
                    <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
                        {/* Left — form */}
                        <ContactForm />

                        {/* Right — contact info */}
                        <ContactInfo />
                    </div>
                </SectionViewer>

            </div>

            <ContactBottomCard />
        </PageViewer>
    );
}






