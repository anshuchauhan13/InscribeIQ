import { PlusIcon, University } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
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



export default function UniversityPartnership({ className, ...props }) {
  const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

  return (
    <SectionViewer className="py-14 md:py-24">
      {/* Header */}
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <SectionLabel label="University Partnerships" />
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl xl:text-5xl leading-tight">
          Recognised by Institutions Worldwide
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground leading-relaxed md:text-lg">
          We collaborate with globally affiliated universities and academic
          bodies to make your credentials count, wherever you go.
        </p>
      </div>

   <div className="w-full place-content-center">
    <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] sm:w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
          "blur-[30px]"
        )}
      />

      <section className="space-y-4 md:space-y-">
       
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,blue,transparent)]" />

        <LogoCloud logos={logos} reverse={false} />
        <LogoCloud logos={logos} reverse={true} />

        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,blue,transparent)]" />
      </section>
    </div>
   
    </SectionViewer>
  );
}



export function LogoCloud({ className, logos, reverse = false, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={54} reverse={reverse} duration={80} durationOnHover={25}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-6 select-none md:h-10 brightness-0 opacity-70"
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

