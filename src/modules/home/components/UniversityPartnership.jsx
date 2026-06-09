import { PlusIcon, University } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

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

      {/* Grid */}
      <div
        className={cn("relative grid grid-cols-2 border-x md:grid-cols-4", className)}
        {...props}
      >
        <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

        {UNIVERSITIES.map((name, i) => {
          const tinted = i % 3 === 0;
          // A cell's bottom-right corner is an internal junction when it is
          // neither in the last column nor the last row — computed per layout
          // since the grid is 2-col on mobile and 4-col on desktop.
          const junctionMobile = i % 2 === 0 && i < UNIVERSITIES.length - 2;
          const junctionDesktop = i % 4 !== 3 && i < UNIVERSITIES.length - 4;
          return (
            <LogoCard
              key={name}
              name={name}
              className={cn(
                "border-b",
                i % 2 === 0 && "border-r",
                i % 4 !== 3 && "md:border-r",
                tinted && "bg-muted",
                i >= UNIVERSITIES.length - 4 && "md:border-b-0"
              )}
            >
              {(junctionMobile || junctionDesktop) && (
                <PlusIcon
                  className={cn(
                    "-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-muted-foreground/50",
                    junctionMobile ? "block" : "hidden",
                    junctionDesktop ? "md:block" : "md:hidden"
                  )}
                  strokeWidth={1}
                />
              )}
            </LogoCard>
          );
        })}

        <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
      </div>
    </SectionViewer>
  );
}

function LogoCard({ name, className, children, ...props }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center gap-2 bg-background px-4 py-8 text-center transition-colors md:p-8",
        className
      )}
      {...props}
    >
      <University
        className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-light-blue"
        strokeWidth={1.5}
      />
      <span className="text-sm font-medium text-foreground">{name}</span>
      {children}
    </div>
  );
}
