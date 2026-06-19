import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "motion/react";
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

function parseNum(str) {
    const suffix = str.includes("+") ? "+" : "";
    const raw = parseInt(str.replace(/[^0-9]/g, ""), 10);
    return { raw, suffix };
}

function CountUp({ num }) {
    const { raw, suffix } = parseNum(num);
    const ref = useRef(null);
    const [display, setDisplay] = useState("0");
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(0, raw, {
            duration: 1.8,
            ease: "easeOut",
            onUpdate(v) {
                setDisplay(Math.round(v).toLocaleString());
            },
        });
        return () => controls.stop();
    }, [isInView, raw]);

    return <span ref={ref}>{display}{suffix}</span>;
}

const containerVar = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVar = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } },
};

const DetailsCard = ({ num, title, desc, offColor = false }) => {
    if (offColor) {
        return (
            <div className="bg-light-blue rounded-xl px-5 py-8 text-white flex flex-col items-center text-center gap-1">
                <span className="text-3xl lg:text-4xl font-bold leading-none mb-4">
                    <CountUp num={num} />
                </span>
                <h5 className="font-bold text-sm lg:text-base mt-2">{title}</h5>
                <p className="text-xs lg:text-sm text-white/80 leading-snug">{desc}</p>
            </div>
        );
    }

    return (
        <div className={cn(
            "flex flex-col items-center justify-center text-center py-8 px-4 text-white mt-[15%]",
            "lg:py-0 lg:px-6 lg:border-l lg:border-muted/10"
        )}>
            <span className="text-3xl lg:text-4xl font-bold leading-none mb-4">
                <CountUp num={num} />
            </span>
            <p className="text-sm lg:text-base font-medium">{title}</p>
            <p className="text-xs text-white/60 mt-0.5">{desc}</p>
        </div>
    );
};

function Impact() {
    return (
        <SectionViewer className={"manrope"}>
            <div className="bg-primary rounded-3xl p-2">
                <motion.div
                    variants={containerVar}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-0 lg:items-stretch"
                >
                    {items.map((item, i) => (
                        <motion.div key={i} variants={itemVar}>
                            <DetailsCard {...item} offColor={i === 0} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionViewer>
    );
}

export default Impact;
