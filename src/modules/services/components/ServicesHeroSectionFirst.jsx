import { Check, ArrowUpRight } from 'lucide-react';

const badge = "Globally affiliated institutions, internationally recognised";

const checkItems = [
    "Honorary Doctorate: A Ph.D.-level recognition for life's work and contributions",
    "No exams, no thesis — your profile is your qualification",
    "Globally affiliated institutions, internationally accepted credential",
    'Use "Dr." in all professional, public, and academic contexts',
];

const CheckItem = ({ text }) => (
    <div className="flex items-start gap-4">
        <div className="mt-0.5 shrink-0 h-7 w-7 rounded-full bg-light-blue/10 border border-light-blue/30 flex items-center justify-center">
            <Check className="h-4 w-4 text-light-blue" strokeWidth={2.5} />
        </div>
        <p className="text-base text-foreground font-medium leading-snug">{text}</p>
    </div>
);

function ServicesHeroSectionFirst() {
    return (
        <div className="flex flex-col gap-8">

            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-muted px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-light-blue shrink-0" />
                <span className="text-sm text-primary font-medium">{badge}</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary leading-[1.05] tracking-tight">
                Earn the{" "}
                <span className="italic">"Dr."</span>
                {" "}Title
                <br />
                You Deserve
            </h1>

            {/* Checklist */}
            <div className="flex flex-col gap-5">
                {checkItems.map((item, i) => (
                    <CheckItem key={i} text={item} />
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Primary */}
                <button className="flex items-center gap-3 bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:opacity-90 transition-opacity cursor-pointer">
                    Apply for Honorary Doctorate
                    <span className="h-9 w-9 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                    </span>
                </button>

                {/* Secondary */}
                <button className="flex items-center gap-3 bg-accent text-foreground font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-accent/70 transition-colors cursor-pointer">
                    Talk to an Expert
                    <span className="h-9 w-9 rounded-full bg-background shadow-sm flex items-center justify-center shrink-0">
                        <ArrowUpRight className="h-5 w-5 text-foreground" />
                    </span>
                </button>
            </div>

        </div>
    );
}

export default ServicesHeroSectionFirst;
