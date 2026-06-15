import { Eye, Tag, Globe, Headphones, BrainCircuit, Zap, ArrowRight } from "lucide-react";
import { Warp } from "@paper-design/shaders-react";
import SectionLabel from "@/components/common/SectionLabel";
import SectionViewer from "@/components/common/SectionViewer";

const FEATURES = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Full visibility into every step of your project — no hidden fees, no surprises. You always know exactly where things stand.",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    description:
      "Premium academic support at market-leading rates, with flexible packages designed to fit every budget and requirement.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Connected to universities, indexed journals, and academic bodies across 50+ countries to give your work the widest possible reach.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "A personal point of contact from start to finish — always available to answer questions and keep your project on track.",
  },
  {
    icon: BrainCircuit,
    title: "SME Expert Team",
    description:
      "Our subject-matter experts bring years of domain-specific academic and research experience to every engagement.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description:
      "Prompt communication guaranteed — we respond within hours, not days, because your deadlines matter as much to us as they do to you.",
  },
];

// On-brand shader presets (purple / blue family) cycled across the cards.
const SHADER_CONFIGS = [
  {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks",
        shapeScale: 0.08,
        colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "dots",
        shapeScale: 0.12,
        colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks",
        shapeScale: 0.1,
        colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "dots",
        shapeScale: 0.09,
        colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks",
        shapeScale: 0.11,
        colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "dots",
        shapeScale: 0.13,
        colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
      },
];

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  const shader = SHADER_CONFIGS[index % SHADER_CONFIGS.length];

  return (
    <div className="group relative cursor-pointer">
      {/* Animated shader background */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={shader.proportion}
          softness={shader.softness}
          distortion={shader.distortion}
          swirl={shader.swirl}
          swirlIterations={shader.swirlIterations}
          shape={shader.shape}
          shapeScale={shader.shapeScale}
          scale={1}
          rotation={0}
          speed={0.8}
          colors={shader.colors}
        />
      </div>

      {/* Glass content overlay */}
      <div className="relative z-10 flex h-full flex-col rounded-3xl border border-white/15 bg-black/70 p-8 transition-colors duration-300 group-hover:bg-black/60">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
          {title}
        </h3>

        <p className="flex-grow text-sm leading-relaxed text-gray-100/90">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhyInscribe = ({
  subtitle = "Why Inscribe IQ",
  title = "The Difference That Drives Results",
  description = "We don't just deliver services — we deliver confidence. Every engagement is built on honesty, expertise, and a genuine commitment to your academic success.",
  items = FEATURES,
}) => {
  return (
    <SectionViewer className="py-16 md:py-24">
      <div className="flex flex-col gap-12">
        {/* Header — matches CoreServices / site pattern */}
        <div className="flex flex-col gap-3 items-start">
          <SectionLabel label={subtitle} />
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-primary leading-tight">
              {title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Grid of shader cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((feature, index) => (
            <FeatureCard key={feature.title} index={index} {...feature} />
          ))}
        </div>
      </div>
    </SectionViewer>
  );
};

export default WhyInscribe;
