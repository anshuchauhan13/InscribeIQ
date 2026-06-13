import SectionViewer from "@/components/common/SectionViewer";
import { cn } from "@/lib/utils";

const items = [
    { num: "1,500+", title: "Scholars Assisted",          desc: "PhD / DBA Programs"          },
    { num: "5,000+", title: "Papers Published",           desc: "Publication Services"         },
    { num: "2,000+", title: "Thesis Projects Supported",  desc: "Thesis Support"               },
    { num: "300+",   title: "Global Honorees Recognized", desc: "Honorary Doctorate"           },
    { num: "10,000+",title: "Students Guided",            desc: "UG/PG Admissions"             },
    { num: "5,000+", title: "Professionals Upskilled",    desc: "Certification Programs"       },
];

const DetailsCard = ({ num, title, desc, offColor = false }) => {
    if (offColor) {
        return (
            <div className="bg-light-blue rounded-xl px-5 py-8 text-white flex flex-col gap-1">
                <span className="text-3xl lg:text-4xl font-bold leading-none mb-4">{num}</span>
                <h5 className="font-bold text-sm lg:text-base mt-2">{title}</h5>
                <p className="text-xs lg:text-sm text-white/80 leading-snug">{desc}</p>
            </div>
        );
    }

    return (
        <div className={cn(
            "flex flex-col justify-center py-8 px-4 text-white",
            "lg:py-0 lg:px-6 lg:border-l lg:border-muted/10"
        )}>
            <span className="text-3xl lg:text-4xl font-bold leading-none mb-4">{num}</span>
            <p className="text-sm lg:text-base font-medium">{title}</p>
            <p className="text-xs text-white/60 mt-0.5">{desc}</p>
        </div>
    );
};

function Impact() {
    return (
        <SectionViewer className={"manrope"}>
            <div className="bg-primary rounded-3xl p-2">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-0 lg:items-stretch">
                    {items.map((item, i) => (
                        <DetailsCard key={i} {...item} offColor={i === 0} />
                    ))}
                </div>
            </div>
        </SectionViewer>
    );
}

export default Impact;
