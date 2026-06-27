import React from "react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";

const Gallery = ({
  heading = "Life as an Honorary Doctorate Recipient",
  caption = "Every image reflects a journey of leadership, innovation, and impact — celebrating those who have shaped industries and left a lasting legacy.",
  images = [],
  className,
}) => {
  const s = Array.from({ length: 6 }, (_, i) => images[i] || null);

  return (
    <SectionViewer className={cn("py-8 lg:py-16", className)}>
      <div
        className="grid gap-2 sm:gap-3 lg:gap-4 w-full"
        style={{
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gridTemplateRows: "clamp(40px, 8vw, 70px) clamp(40px, 8vw, 70px) clamp(120px, 20vw, 190px) clamp(150px, 25vw, 230px)",
        }}
      >
        {/* ── Col 1-2, Rows 1-2 : Heading ── */}
        <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }} className="flex items-center">
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-foreground leading-tight">
            {heading}
          </h2>
        </div>

        {/* ── Col 3, Rows 1-3 : img-C ── */}
        <ZoomCell image={s[2]} style={{ gridColumn: "3", gridRow: "1 / 4" }} />

        {/* ── Col 4, Rows 2-3 : img-D — 1/4 visible ── */}
        <div style={{ gridColumn: "4", gridRow: "2 / 4", overflow: "hidden" }}>
          <div style={{ width: "400%", height: "100%" }}>
            <ZoomCell image={s[3]} style={{ width: "25%", height: "100%", float: "left" }} />
          </div>
        </div>

        {/* ── Col 1, Rows 3-4 : img-A ── */}
        <div style={{ gridColumn: "1", gridRow: "3 / 5" }} className="flex flex-col">
          <ZoomCell image={s[0]} className="w-full" style={{ height: "85%" }} />
        </div>

        {/* ── Col 2, Rows 2-3 : img-B ── */}
        <ZoomCell image={s[1]} style={{ gridColumn: "2", gridRow: "2 / 4" }} />

        {/* ── Col 2, Row 4 : img-E ── */}
        <ZoomCell image={s[4]} style={{ gridColumn: "2", gridRow: "4" }} />

        {/* ── Col 3, Row 4 : img-F ── */}
        <div style={{ gridColumn: "3", gridRow: "4" }} className="flex flex-col">
          <ZoomCell image={s[5]} className="w-full" style={{ height: "75%" }} />
        </div>

        {/* ── Col 4, Row 4 : caption — 1/4 visible ── */}
        <div style={{ gridColumn: "4", gridRow: "4", overflow: "hidden" }}>
          <div style={{ width: "400%", paddingLeft: "8px" }}>
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ width: "25%" }}>
              {caption}
            </p>
          </div>
        </div>
      </div>
    </SectionViewer>
  );
};

/* ── ZoomCell — overflow hidden + CSS zoom on hover ── */
const ZoomCell = ({ image, style, className }) => (
  <div
    className={cn("overflow-hidden group", className)}
    style={style}
  >
    {image?.src ? (
      <img
        src={image.src}
        alt={image.alt || ""}
        className="w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-110"
      />
    ) : (
      <div className="w-full h-full bg-muted flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
        <span className="text-xs text-muted-foreground select-none">img</span>
      </div>
    )}
  </div>
);

export default Gallery;