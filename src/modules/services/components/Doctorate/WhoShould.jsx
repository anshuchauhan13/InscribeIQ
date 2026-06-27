import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";

function ItemRow({ item, index }) {
  const numberColor =
    index === 0
      ? "text-slate-200"
      : index === 1
        ? "text-slate-300"
        : index === 2
          ? "text-[#6B80A8]"
          : index === 3
            ? "text-[#4F6598]"
            : index === 4
              ? "text-[#2A3F6F]"
              : "text-[#062C73]";

  const dividerColor =
    index === 0
      ? "bg-slate-200"
      : index === 1
        ? "bg-slate-300"
        : index === 2
          ? "bg-[#6B80A8]"
          : index === 3
            ? "bg-[#4F6598]"
            : index === 4
              ? "bg-[#2A3F6F]"
              : "bg-[#062C73]";

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {/* Number */}
      <span
        className={cn(
          "w-10 sm:w-14 shrink-0 text-right text-4xl sm:text-5xl font-bold leading-none select-none",
          numberColor,
        )}
      >
        {String(item.id).padStart(2, "0")}
      </span>

      {/* Vertical divider */}
      <div
        className={cn(
          "h-10 sm:h-12 w-[3px] shrink-0 rounded-full",
          dividerColor,
        )}
      />

      {/* Label */}
      <p className="text-sm sm:text-base lg:text-[17px] leading-snug text-slate-700">
        {item.label}
      </p>
    </div>
  );
}

export default function WhoShould({
  tagline="who should join",
  heading,
  items = [],
  images = [],
  className = "",
}) {
  const circleImages = images.filter((img) => img.shape === "circle");
  const bottomImage = images.find((img) => img.shape === "rounded");

  return (
    <SectionViewer className={cn("py-16", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-10 lg:gap-12 items-start">
        {/* ── Left: heading + list ── */}
        <div>
            <SectionLabel label={tagline} />
          <h2 className="mb-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            {heading}
          </h2>
          <div className="mb-7 h-[3px] w-25 bg-light-blue rounded-full " />

          <div className="space-y-4 sm:space-y-5">
            {items.map((item, index) => (
              <ItemRow key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* ── Right: images ── */}
        <div className="hidden lg:flex flex-col gap-4 lg:gap-5 mt-20">
          {/* Circle portraits */}
          {circleImages.length > 0 && (
            <div className="flex justify-center items-end gap-3">
              {circleImages.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "overflow-hidden flex-shrink-0",
                    index === 0 ? "rounded-t-full" : "rounded-full",
                  )}
                >
                  <img
                    src={image.src || "/service/hero2.png"}
                    alt={image.alt || ""}
                    className="h-32 w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44 object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Landscape image */}
          {bottomImage && (
            <div className="overflow-hidden rounded-2xl w-full">
              <img
                src={bottomImage.src || "/service/hero1.png"}
                alt={bottomImage.alt || ""}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </SectionViewer>
  );
}
