import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { servicesDomains } from "./NavbarData";

// ─── Course Card (grid layout) ───────────────────────────────────────────────

function CourseCard({ item, onNavigate }) {
  return (
    <button
      onClick={() => onNavigate(item.href)}
      className="group flex items-center gap-3 rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-left transition-all hover:bg-background hover:border-[#6B52F9]/30 hover:shadow-sm w-full"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-background text-[#6B52F9] transition-colors group-hover:bg-[#6B52F9]/8 group-hover:border-[#6B52F9]/20">
        {item.icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium text-foreground leading-tight truncate">
          {item.name}
        </span>
        {item.tag && (
          <span className="block text-[11px] text-muted-foreground leading-tight mt-0.5 truncate">
            {item.tag}
          </span>
        )}
      </span>
      <ArrowRight className="ml-auto h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-50 transition-all group-hover:translate-x-0.5 shrink-0" />
    </button>
  );
}

// ─── Course List Item (list layout) ──────────────────────────────────────────

function CourseListItem({ item, onNavigate }) {
  return (
    <button
      onClick={() => onNavigate(item.href)}
      className="group flex items-center gap-3 rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-left transition-all hover:bg-background hover:border-[#6B52F9]/30 hover:shadow-sm w-full"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-background text-[#6B52F9] group-hover:bg-[#6B52F9]/8 group-hover:border-[#6B52F9]/20 transition-colors">
        {item.icon}
      </span>
      <span className="flex-1 text-sm font-medium text-foreground">{item.name}</span>
      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all shrink-0" />
    </button>
  );
}

// ─── Domain Sidebar Button ────────────────────────────────────────────────────

function DomainButton({ domain, isActive, onHover, onClick }) {
  return (
    <button
      onMouseEnter={onHover}
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-2.5 px-4 py-2.5 text-sm text-left transition-all w-full rounded-none",
        isActive
          ? "bg-background text-foreground font-medium"
          : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
      )}
    >
      {isActive && (
        <span className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-sm bg-gradient-to-b from-[#6B52F9] to-[#8B79F2]" />
      )}
      <span
        className={cn(
          "transition-colors",
          isActive ? "text-[#6B52F9]" : "text-muted-foreground group-hover:text-[#6B52F9]"
        )}
      >
        {domain.icon}
      </span>
      <span className="leading-snug">{domain.label}</span>
    </button>
  );
}

// ─── Right Content Panel ──────────────────────────────────────────────────────

function DomainPanel({ domain, onNavigate }) {
  return (
    <div className="flex-1 overflow-y-auto p-5">
      {/* Header */}
      <div className="mb-4 pb-3 border-b border-border">
        <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-1">
          {domain.sectionLabel}
        </p>
        <h3 className="text-base font-semibold text-foreground leading-tight">
          {domain.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">{domain.subtitle}</p>
      </div>

      {/* Items */}
      {domain.type === "grid" ? (
        <div className="grid grid-cols-2 gap-2">
          {domain.items.map((item, i) => (
            <CourseCard key={i} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {domain.items.map((item, i) => (
            <CourseListItem key={i} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main ServicesPanel ───────────────────────────────────────────────────────

export function ServicesPanel() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = (href) => {
    navigate(href);
  };

  return (
    <div className="flex w-[680px] h-[390px] overflow-hidden">
      {/* Sidebar */}
      <div className="w-[205px] shrink-0 border-r border-border bg-muted/40 flex flex-col py-2 overflow-y-auto">
        <p className="px-4 pt-2 pb-2 text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
          Domains
        </p>
        {servicesDomains.map((d, i) => (
          <DomainButton
            key={i}
            domain={d}
            isActive={active === i}
            onHover={() => setActive(i)}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      {/* Right panel with transition */}
      <DomainPanel
        domain={servicesDomains[active]}
        onNavigate={handleNavigate}
      />
    </div>
  );
}