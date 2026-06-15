/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import { navbarMenu } from "@/components/Navbar/navbarMenu.data";

// Reuse the exact same dataset that powers the navbar's extended menu.
const services = navbarMenu.find((item) => item.key === "services")?.menu;
const domains = services?.domains ?? [];

function ServicePageLayout() {
  const [searchParams] = useSearchParams();
  const [activeId, setActiveId] = useState(() => {
    const param = searchParams.get("domain");
    return param && domains.find((d) => d.id === param) ? param : domains[0]?.id;
  });

  useEffect(() => {
    const param = searchParams.get("domain");
    if (param && domains.find((d) => d.id === param)) {
      setActiveId(param);
    }
  }, [searchParams]);

  const active = domains.find((d) => d.id === activeId) ?? domains[0];

  if (!active) return null;

  return (
    <SectionViewer className="inter py-12 md:py-16">
      {/* Page header */}
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue manrope">
          Our Services
        </p>
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          Explore everything we offer
        </h1>
        <p className="mt-3 text-muted-foreground">
          From doctoral programs to academic writing and publication support —
          browse all of our services by domain.
        </p>
      </div>

      {/* Same structure as the navbar extended menu: domains + panel */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left: domains */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 flex items-center gap-2 px-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <LayoutGrid className="h-4 w-4" /> {services.label}
            </p>

            <ul className="space-y-1">
              {domains.map((domain) => {
                const Icon = domain.icon;
                const isActive = domain.id === active.id;
                return (
                  <li key={domain.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(domain.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors",
                        isActive
                          ? "bg-muted text-blue"
                          : "text-foreground hover:bg-muted hover:text-blue"
                      )}
                    >
                      <span className="flex items-center gap-3 font-medium">
                        <Icon className={cn("h-5 w-5 shrink-0", isActive && "text-blue")} />
                        {domain.label}
                      </span>
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 shrink-0",
                          isActive ? "text-blue" : "text-muted-foreground"
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Right: active domain content */}
        <div className="lg:col-span-8">
          <h2 className="mb-6 text-2xl font-bold text-blue">{active.heading}</h2>

          {active.groups.map((group) => (
            <div key={group.label} className="mb-8 last:mb-0">
              {group.label && (
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {group.label}
                </p>
              )}

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {group.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="group/item flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-blue hover:bg-muted"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-blue transition-colors group-hover/item:bg-blue group-hover/item:text-white">
                        <ItemIcon className="h-5 w-5" />
                      </span>
                      <span className="font-medium text-foreground">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionViewer>
  );
}

export default ServicePageLayout;
