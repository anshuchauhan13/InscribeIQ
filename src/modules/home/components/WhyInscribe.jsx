import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Eye, Tag, Globe, Headphones, BrainCircuit, Zap } from 'lucide-react';
import SectionViewer from '@/components/common/SectionViewer';
import SectionLabel from '@/components/common/SectionLabel';

const DEFAULT_ITEMS = [
    {
        icon: Eye,
        title: "Transparency",
        description: "Full visibility into every step of your project — no hidden fees, no surprises. You always know exactly where things stand.",
    },
    {
        icon: Tag,
        title: "Competitive Pricing",
        description: "Premium academic support at market-leading rates, with flexible packages designed to fit every budget and requirement.",
    },
    {
        icon: Globe,
        title: "Global Network",
        description: "Connected to universities, indexed journals, and academic bodies across 50+ countries to give your work the widest possible reach.",
    },
    {
        icon: Headphones,
        title: "Dedicated Support",
        description: "A personal point of contact from start to finish — always available to answer questions and keep your project on track.",
    },
    {
        icon: BrainCircuit,
        title: "SME Expert Team",
        description: "Our subject-matter experts bring years of domain-specific academic and research experience to every engagement.",
    },
    {
        icon: Zap,
        title: "Fast Response",
        description: "Prompt communication guaranteed — we respond within hours, not days, because your deadlines matter as much to us as they do to you.",
    },
];

// Reusable Process Card Component
const ProcessCard = ({ icon: Icon, title, description, className }) => (
    <div
        className={cn(
            "group relative w-full rounded-lg border bg-card p-6 transition-all cursor-pointer duration-300 hover:border-primary/60 hover:shadow-lg ",
            className
        )}>
        {/* Decorative Line - Visible on larger screens */}
        <div
            className="absolute -left-[1px] top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-border transition-colors group-hover:bg-primary/60 md:block" />
        <div
            className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-border transition-colors group-hover:bg-primary/60 md:hidden" />


        {/* Icon Container */}
        <div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg duration-300 border bg-background text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
        </div>

        {/* Content */}
        <div className="flex flex-col">
            <h3 className="mb-1 text-lg font-semibold tracking-tight text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
    </div>
);

// Main Process Section Component
const WhyInscribe = ({
    subtitle = "Why Inscribe IQ",
    title = "The Difference That Drives Results",
    description = "We don't just deliver services — we deliver confidence. Every engagement is built on honesty, expertise, and a genuine commitment to your academic success.",
    buttonText = "Explore Our Services",
    items = DEFAULT_ITEMS,
}) => {
    return (
        <SectionViewer className="w-full bg-background py-14 md:py-24">
            <div
                className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
                {/* Left Content */}
                <div
                    className="flex flex-col items-start justify-center text-center md:col-span-1 md:text-left">
                    <SectionLabel label={subtitle} className={"mb-3"} />

                    <h2
                        className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl xl:text-5xl leading-tight">
                        {title}
                    </h2>
                    <p className="mb-6 text-base text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Right Content - Grid of Process Cards */}
                <div
                    className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 md:col-span-2">
                    {items.map((item, index) => (
                        <ProcessCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </SectionViewer>
    );
};

export default WhyInscribe