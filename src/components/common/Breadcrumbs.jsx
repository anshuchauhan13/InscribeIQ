import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Accessible breadcrumb trail. Each item is { label, to? }; items with a `to`
// render as router links, the rest as plain text. The final item is treated as
// the current page (bold, aria-current). Service pages root the trail at
// "Services" rather than "Home".
export default function Breadcrumbs({ items = [], className }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("text-xs md:text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="inline-flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50"
                  aria-hidden
                />
              )}
              {isLast || !item.to ? (
                <span
                  className={cn(isLast && "font-semibold text-primary")}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="transition-colors hover:text-light-blue"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
