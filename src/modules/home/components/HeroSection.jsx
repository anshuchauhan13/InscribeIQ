import SectionViewer from '@/components/common/SectionViewer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const AVATARS = [
  { initials: "RS", bg: "bg-blue" },
  { initials: "AP", bg: "bg-light-blue" },
  { initials: "KM", bg: "bg-primary" },
  { initials: "NJ", bg: "bg-muted-foreground" },
];

function HeroSection() {
  return (
    <div >
      <SectionViewer className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 pt-14 pb-6 md:pt-24 md:pb-10">

        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-light-blue/30 bg-light-blue/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-light-blue animate-pulse" />
            <span className="text-sm font-medium text-light-blue">
              Trusted by 10,000+ Scholars &amp; Researchers
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-primary">
            Empowering{" "}
            <span className="text-light-blue">Researchers.</span>
            {" "}Supporting{" "}
            <span className="text-light-blue">Universities.</span>
            {" "}Transforming{" "}
            <span className="relative inline-block whitespace-nowrap">
              Academic Success.
              <span className="absolute left-0 -bottom-1 h-[5px] w-full rounded-full bg-secondary" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            End-to-end academic support — from PhD guidance and thesis writing
            to global publication and honorary doctorate facilitation. Built for
            scholars. Designed for excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-b from-[#6B52F9] to-[#8B79F2] text-white hover:opacity-90 px-7 shadow-md"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 text-primary hover:bg-primary/5 px-7"
            >
              Explore Services
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-1">
            <div className="flex -space-x-3">
              {AVATARS.map(({ initials, bg }) => (
                <div
                  key={initials}
                  className={`h-9 w-9 rounded-full border-2 border-white ${bg} flex items-center justify-center text-white text-[11px] font-bold shrink-0`}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1.5 text-sm font-semibold text-foreground">4.9</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">500+ Happy Scholars</p>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2">
          <img
            src="/home/HeroImage.png"
            alt="hero"
            className="w-full h-auto object-contain"
          />
        </div>

      </SectionViewer>
    </div>
  );
}

export default HeroSection;
