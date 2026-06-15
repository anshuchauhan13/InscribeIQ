import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Blocks, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import SectionViewer from "../common/SectionViewer";

/**
 * Shared dropdown panel for every navbar mega menu. It slides out from *under*
 * the navbar (the nav row sits above it via z-index in NavbarMenu).
 *
 * Props:
 *   open    -> whether the panel is visible
 *   menu    -> a { label, domains } dataset (see navbarMenu in NavbarMenu.jsx)
 *   onClose -> called on backdrop click / Escape / link click
 */
function ExtendedMenu({ open, menu, onClose }) {
  // Retain the last dataset so the close animation still has content to render.
  const [displayed, setDisplayed] = useState(menu);
  if (menu && menu !== displayed) setDisplayed(menu);
  const data = menu ?? displayed;
  const domains = data?.domains ?? [];

  // Reset to the first domain whenever the panel opens or the dataset changes.
  const [activeId, setActiveId] = useState(domains[0]?.id);
  const [prev, setPrev] = useState({ open, data });
  if (prev.open !== open || prev.data !== data) {
    setPrev({ open, data });
    if (open && domains[0]) setActiveId(domains[0].id);
  }

  const active = domains.find((d) => d.id === activeId) ?? domains[0];

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!active) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop — sits BELOW the panel and the nav row, so it dims the
              page without tinting the navbar. */}
          <motion.div
            className="fixed inset-0 z-30 bg-primary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Panel — anchored just under the navbar, revealed top-to-bottom. */}
          <motion.div
            className="absolute inset-x-0 top-full z-40 overflow-hidden bg-background shadow-xl"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionViewer className="inter">
              <div className="grid grid-cols-1 gap-6 py-10 lg:pb-12 lg:grid-cols-12">
                {/* Left: domains */}
                <div className="lg:col-span-4 lg:border-r lg:border-border lg:pr-6">
                  <p className="mb-4 flex items-center gap-2 px-3 text-xs font-bold uppercase tracking-widest text-primary">
                    <Blocks strokeWidth={2.5} className="h-4 w-4" /> {data.label}
                  </p>

                  <ul className="space-y-1">
                    {domains.map((domain) => {
                      const Icon = domain.icon;
                      const isActive = domain.id === active.id;
                      return (
                        <li key={domain.id}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveId(domain.id)}
                            onFocus={() => setActiveId(domain.id)}
                            onClick={() => setActiveId(domain.id)}
                            aria-current={isActive ? "true" : undefined}
                            className={cn(
                              "flex w-full items-center justify-between rounded-lg text-sm px-3 py-3 text-left transition-colors",
                              isActive
                                ? "bg-muted text-blue"
                                : "text-foreground hover:bg-muted hover:text-blue"
                            )}
                          >
                            <span className="flex items-center gap-3 font-medium">
                              <Icon
                                className={cn(
                                  "h-3.5 w-3.5 shrink-0",
                                  isActive && "text-blue"
                                )}
                              />
                              {domain.label}
                            </span>
                            <ChevronRight
                              className={cn(
                                "h-4 w-4 shrink-0 transition-transform",
                                isActive ? "translate-x-0.5 text-blue" : "text-muted-foreground"
                              )}
                            />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Right: content for the active domain */}
                <div className="lg:col-span-8 lg:pl-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <h3 className="text-2xl font-bold text-primary">{active.heading}</h3>
                        <Link
                          to={`${active.href}?domain=${active.id}`}
                          onClick={onClose}
                          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue transition-opacity hover:opacity-70"
                        >
                          View all
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>

                      {active.groups.map((group) => (
                        <div key={group.label} className="mb-6 last:mb-0">
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
                                  to={`/services?domain=${active.id}`}
                                  onClick={onClose}
                                  className="group/item flex items-center gap-3 rounded-xl border border-border hover:border-border/30 p-3 transition-colors hover:bg-muted"
                                >
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted text-foreground transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                                    <ItemIcon className="h-4 w-4" />
                                  </span>
                                  <span className="font-medium text-foreground">{item.label}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </SectionViewer>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ExtendedMenu;
