/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight, LayoutGrid, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
import { navbarMenu } from "@/components/Navbar/navbarMenu.data";

// Reuse the exact same dataset that powers the navbar's extended menu.
const services = navbarMenu.find((item) => item.key === "services")?.menu;
const domains = services?.domains ?? [];

const countServices = (domain) =>
  domain.groups.reduce((n, g) => n + g.items.length, 0);

function ServicePageLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
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

  const selectDomain = (id) => {
    setActiveId(id);
    setSearchParams({ domain: id }, { replace: true });
  };

  const active = domains.find((d) => d.id === activeId) ?? domains[0];

  if (!active) return null;

  const ActiveIcon = active.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-light-blue/[0.06] via-muted to-white">
      {/* Soft decorative backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-light-blue/10 blur-3xl" />
        <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <SectionViewer className="inter py-12 md:py-16">
        {/* Page header */}
        <div className="mb-10 max-w-2xl">
          <SectionLabel label="Our Services" />
          <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-primary">
            Explore everything we offer
          </h1>
          <div className="mt-4 mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-light-blue to-blue" />
          <p className="text-muted-foreground leading-relaxed">
            From doctoral programs to academic writing and publication support —
            browse all of our services by domain.
          </p>
        </div>

        {/* Domains (left) + active domain panel (right) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left: domain selector */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 flex items-center gap-2 px-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <LayoutGrid className="h-4 w-4" /> {services.label}
              </p>

              <div className="flex flex-col gap-2.5">
                {domains.map((domain) => {
                  const Icon = domain.icon;
                  const isActive = domain.id === active.id;
                  const count = countServices(domain);
                  return (
                    <button
                      key={domain.id}
                      type="button"
                      onClick={() => selectDomain(domain.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "group flex w-full items-center gap-3 rounded-2xl border p-3.5 text-left transition-all duration-300",
                        isActive
                          ? "border-transparent bg-gradient-to-br from-primary to-blue text-white shadow-[0_18px_36px_-20px_rgba(50,15,140,0.6)]"
                          : "border-primary/10 bg-white text-foreground hover:-translate-y-0.5 hover:border-light-blue/40 hover:shadow-[0_16px_30px_-22px_rgba(50,15,140,0.35)]"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-light-blue/10 text-light-blue"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block truncate font-semibold leading-tight">
                          {domain.label}
                        </span>
                        <span
                          className={cn(
                            "text-xs",
                            isActive ? "text-white/70" : "text-muted-foreground"
                          )}
                        >
                          {count} {count === 1 ? "service" : "services"}
                        </span>
                      </span>
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform duration-300",
                          isActive
                            ? "translate-x-0.5 text-white"
                            : "text-muted-foreground group-hover:translate-x-0.5"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right: active domain content */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_2px_30px_-16px_rgba(23,5,69,0.16)] md:p-8">
              {/* Panel heading */}
              <div className="mb-7 flex items-center gap-4 border-b border-primary/5 pb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-light-blue/15 to-secondary/25 text-blue">
                  <ActiveIcon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold leading-tight text-primary">
                    {active.heading}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Choose a service to explore in detail
                  </p>
                </div>
              </div>

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
                          className="group/item flex items-center gap-3 rounded-2xl border border-primary/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-light-blue/40 hover:shadow-[0_18px_34px_-22px_rgba(50,15,140,0.4)]"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-light-blue/10 text-blue transition-all duration-300 group-hover/item:bg-gradient-to-br group-hover/item:from-primary group-hover/item:to-blue group-hover/item:text-white">
                            <ItemIcon className="h-5 w-5" />
                          </span>
                          <span className="flex-1 font-semibold text-foreground transition-colors group-hover/item:text-primary">
                            {item.label}
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:text-light-blue group-hover/item:opacity-100" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionViewer>
    </section>
  );
}

export default ServicePageLayout;
