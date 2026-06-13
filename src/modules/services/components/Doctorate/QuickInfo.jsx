import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";

const QuickInfo = ({ items = [], className }) => {
  const scrollerRef = useRef(null);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  // Triple the items for seamless loop
  const repeatedItems = [...items, ...items, ...items];

  useEffect(() => {
    if (scrollerRef.current) {
      const width = scrollerRef.current.scrollWidth / 3;
      setSingleSetWidth(width);
    }
  }, [items]);

  useEffect(() => {
    if (singleSetWidth > 0) {
      const speed = 40; // px per second — kam karo slow, zyada karo fast
      const duration = singleSetWidth / speed;

      const animation = gsap.to(scrollerRef.current, {
        x: -singleSetWidth,
        ease: "none",
        duration: duration,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % singleSetWidth),
        },
      });

      return () => animation.kill();
    }
  }, [singleSetWidth]);

  return (
    <section className={cn("bg-light-blue/10 py-2 overflow-hidden w-full", className)}>
      <div ref={scrollerRef} className="flex items-center">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center min-w-max">

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-4 text-center px-20">
              <h3 className="text-lg font-bold text-[#24145B] leading-none">
                {item.value}
              </h3>
              <p className="mt-1 text-xs md:text-sm font-semibold text-[#24145B] leading-tight">
                {item.label}
              </p>
            </div>

            {/* Divider */}
            <div
              className="h-10 bg-gradient-to-t from-transparent via-[#24145B]/30 to-transparent rounded"
              style={{ width: "1px" }}
            />

          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickInfo;