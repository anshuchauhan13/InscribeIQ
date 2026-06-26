import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useIsMobile } from "@/hooks/use-mobile";

const EASE = [0.22, 0.61, 0.36, 1];

const headerVar = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function UniversityPartnership() {
  const logos1 = [
    {
      src: "/lpu.jpg",
      alt: "Lovely Professional University",
    },
    {
      src: "/mizoram.png",
      alt: "Mizoram University",
    },
    {
      src: "/amu.png",
      alt: "aligarh muslim university",
    },
    {
      src: "/Kennedy.png",
      alt: "Kenedy University",
    },
    {
      src: "/jamia.png",
      alt: "Jamia Hamdard",
    },
    {
      src: "/kuru.png",
      alt: "Kurukshetra University",
    },
    {
      src: "/dyp.webp",
      alt: "Dr. DY Patil, Pune",
    },
  ];
  
   const logos2 = [
    {
      src: "/amity.jpeg",
      alt: "Amity University",
    },
    {
      src: "/gla-logo.webp",
      alt: "GLA University",
    },
    {
      src: "/cu.png",
      alt: "Chandigrah University",
    },
    {
      src: "/dpu.png",
      alt: "Dr Patil University",
    },
    {
      src: "/euroasian.png",
      alt: "EuroAsian ",
    },
    {
      src: "/jain.png",
      alt: "Jain University",
    },
  ];

  return (
    <SectionViewer className="py-14 md:py-24">
      {/* Header */}
      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12 flex flex-col items-center gap-3 text-center"
      >
        <motion.div variants={headerVar}>
          <SectionLabel label="University Partnerships" />
        </motion.div>
        <motion.h2
          variants={headerVar}
          className="text-3xl font-bold tracking-tight text-primary md:text-4xl xl:text-5xl leading-tight"
        >
          Academic <span className="text-light-blue">Partnerships</span> <br /> Built on <span className="text-light-blue">Credibility</span>
        </motion.h2>
        <motion.p
          variants={headerVar}
          className="max-w-3xl text-base text-muted-foreground leading-relaxed md:text-lg"
        >
          InscribeIQ works exclusively with affiliated universities and accredited academic bodies,
          ensuring that every credential earned through our platform has genuine global standing.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        className="w-full place-content-center"
      >
        <div
          aria-hidden="true"
          className={cn(
            "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] sm:w-[120vmin] rounded-b-full",
            "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
            "blur-[30px]"
          )}
        />

        <section>
          <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,blue,transparent)]" />

          <LogoCloud logos={logos1} reverse={false} />
          <LogoCloud logos={logos2} reverse={true} />

          <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,blue,transparent)]" />
        </section>
      </motion.div>

    </SectionViewer>
  );
}



export function LogoCloud({ className, imageClass, logos, reverse = false, ...props }) {
  const isMobile = useIsMobile()
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={isMobile ? 54 : 60} reverse={reverse} duration={80} durationOnHover={25}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className={cn("pointer-events-none h-6 select-none md:h-10 lg:h-12", imageClass)}
            height={logo.height || "auto"}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || "auto"}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
