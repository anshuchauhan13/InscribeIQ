import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ChevronsRight,
  ChevronRight,
  X,
  HelpCircle,
  Award,
  GraduationCap,
  CreditCard,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";
import SectionLabel from "@/components/common/SectionLabel";
import { Link } from "react-router-dom";

const FAQ_DATA = [
  {
    category: "General",
    icon: HelpCircle,
    color: "text-violet-500",
    bg: "bg-violet-50",
    activeBg: "bg-violet-500/10",
    questions: [
      {
        q: "What is InscribeIQ and what services do you offer?",
        a: "InscribeIQ is a premier academic support platform offering end-to-end services including PhD / DBA guidance, thesis and dissertation writing, research paper support, global publication assistance, honorary doctorate facilitation, and university admissions consulting. We serve scholars, professionals, and institutions worldwide.",
      },
      {
        q: "Who can use InscribeIQ's services?",
        a: "Our services are open to students, researchers, working professionals, business leaders, and academic institutions. Whether you're pursuing a PhD, seeking publication support, or exploring an honorary doctorate, InscribeIQ has a program tailored for you.",
      },
      {
        q: "What is an Honorary Doctorate and who can receive it?",
        a: "An Honorary Doctorate is a prestigious title awarded to individuals for exceptional contributions in business, education, social work, innovation, arts, or public service. It is conferred without exams or coursework, and is open to any accomplished professional with significant real-world impact.",
      },
      {
        q: "Is InscribeIQ affiliated with recognised universities?",
        a: "Yes. InscribeIQ partners with globally recognised and accredited universities and academic bodies across 50+ countries. All honorary degrees and academic credentials facilitated through InscribeIQ are awarded by our partner institutions.",
      },
      {
        q: "How do I get started with InscribeIQ?",
        a: "Simply reach out via our Contact page or book a free consultation. Our advisory team will evaluate your profile, recommend the right service, and guide you through a seamless onboarding process.",
      },
    ],
  },
  {
    category: "Honorary Doctorate",
    icon: Award,
    color: "text-amber-500",
    bg: "bg-amber-50",
    activeBg: "bg-amber-500/10",
    questions: [
      {
        q: "Is an Honorary Doctorate a real and recognised degree?",
        a: "Yes. It is a legitimate and globally respected title awarded by affiliated institutions to honour lifetime achievements, leadership, and impact. While not a traditional academic degree, it carries immense professional and social value worldwide.",
      },
      {
        q: "Do I need a PhD or academic background to be eligible?",
        a: "Absolutely not. An Honorary Doctorate is awarded based on real-world impact, leadership, and contribution — not academic credentials or thesis submission. Professionals from any field with a record of achievement are eligible.",
      },
      {
        q: "What is the difference between an Honorary Doctorate and a PhD?",
        a: "A PhD requires years of coursework and original research. An Honorary Doctorate is awarded in recognition of extraordinary real-world achievements and contributions — no thesis or exams required.",
      },
      {
        q: "Can I use the 'Dr.' title after receiving an Honorary Doctorate?",
        a: "Yes, in most professional and social contexts you may use the 'Dr.' prefix. However, conventions vary — it is advisable to clarify the honorary nature in strictly academic settings.",
      },
      {
        q: "Is my Honorary Doctorate internationally recognised?",
        a: "Yes. Degrees are awarded through accredited partner institutions and hold recognition across professional, corporate, and public service domains worldwide.",
      },
    ],
  },
  {
    category: "Programs",
    icon: GraduationCap,
    color: "text-blue-500",
    bg: "bg-blue-50",
    activeBg: "bg-blue-500/10",
    questions: [
      {
        q: "What programs are available under InscribeIQ?",
        a: "InscribeIQ offers programs spanning honorary doctorates, PhD / DBA guidance, thesis and dissertation support, research publication, UG/PG admissions consulting, and professional certification coaching — across disciplines including Business, Education, Technology, Arts, and Social Impact.",
      },
      {
        q: "Can I choose the field of my Honorary Doctorate?",
        a: "Yes. During your application, you select a field that best aligns with your professional background, achievements, and areas of contribution.",
      },
      {
        q: "Are there different tiers or levels of the program?",
        a: "Programs are offered at various prestige levels depending on the awarding institution, your profile, and the depth of your contributions. Our advisors help match you with the right fit.",
      },
      {
        q: "Does the program include a physical convocation ceremony?",
        a: "Select programs include an in-person or virtual convocation ceremony. Physical ceremonies are conducted at partner university campuses or prestigious affiliated venues.",
      },
      {
        q: "How long does the program take to complete?",
        a: "Program timelines vary by type. Honorary doctorate facilitation typically takes 4–12 weeks. PhD / DBA guidance programs are structured across the duration of your degree. Publication and thesis support are scoped to your specific project.",
      },
    ],
  },
  {
    category: "Payment & Fees",
    icon: CreditCard,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    activeBg: "bg-emerald-500/10",
    questions: [
      {
        q: "What is the cost of the Honorary Doctorate program?",
        a: "Program fees vary based on the institution and tier selected. Detailed pricing is provided after an initial eligibility assessment at no cost.",
      },
      {
        q: "Are there any hidden charges beyond the program fee?",
        a: "No. InscribeIQ maintains full fee transparency. All charges — including documentation, processing, and ceremony fees (if applicable) — are disclosed upfront before you commit.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept all major credit/debit cards, net banking, UPI, and international bank transfers. EMI options are also available for select programs.",
      },
      {
        q: "Is the fee refundable if I am found ineligible?",
        a: "Yes. If your application is assessed and found ineligible after payment, InscribeIQ offers a full refund as per our transparency-first policy.",
      },
      {
        q: "Can I pay in instalments?",
        a: "Yes. Flexible instalment plans are available for most programs. Our advisors can structure a payment schedule that suits your financial situation without compromising your academic journey.",
      },
    ],
  },
  {
    category: "Research & Publication",
    icon: BookOpen,
    color: "text-rose-500",
    bg: "bg-rose-50",
    activeBg: "bg-rose-500/10",
    questions: [
      {
        q: "What publication support services does InscribeIQ offer?",
        a: "We offer end-to-end publication support including journal selection, manuscript formatting, peer-review preparation, plagiarism checks, and submission assistance — targeting Scopus, Web of Science, and UGC-CARE indexed journals.",
      },
      {
        q: "Can InscribeIQ help with thesis writing and editing?",
        a: "Yes. Our expert team provides comprehensive thesis and dissertation support — from topic selection and chapter structuring to editing, formatting, and final review — aligned to your university's guidelines.",
      },
      {
        q: "Do you assist with international journal submissions?",
        a: "Absolutely. We have experience submitting to journals across multiple disciplines and continents, and we guide you through targeting the right indexed publication for your research domain.",
      },
      {
        q: "How does InscribeIQ ensure originality in research papers?",
        a: "All research and writing done through InscribeIQ undergoes rigorous originality checks using industry-standard plagiarism detection tools. We ensure your submission is authentic, properly cited, and academically sound.",
      },
      {
        q: "Can InscribeIQ help with a PhD synopsis or proposal?",
        a: "Yes. Our academic advisors can help you craft a compelling PhD synopsis or research proposal — covering problem statement, objectives, literature review, methodology, and expected outcomes.",
      },
    ],
  },
];

function AccordionItem({ item, index, isOpen, onToggle, setRef }) {
  return (
    <div
      ref={setRef}
      className={cn(
        "rounded-xl border overflow-hidden transition-colors duration-200",
        isOpen
          ? "border-primary/15 bg-primary/2 shadow-sm shadow-blue/10"
          : "border-border bg-white hover:border-blue/20"
      )}
    >
      <button
        className="flex w-full items-start justify-between gap-4 px-5 xl:px-7 py-4 xl:py-5 text-left"
        onClick={onToggle}
      >
        <div className="flex items-center gap-3.5">
          <span
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold mt-0.5 transition-colors",
              isOpen
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground"
            )}
          >
            {index + 1}
          </span>
          <span
            className={cn(
              "text-sm md:text-base xl:text-lg font-semibold leading-snug transition-colors",
              isOpen ? "text-primary" : "text-foreground"
            )}
          >
            {item.q}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="mt-0.5 shrink-0"
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-colors",
              isOpen ? "text-blue" : "text-muted-foreground"
            )}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pr-5 xl:pr-7 pb-5 xl:pb-6 text-sm md:text-base leading-relaxed text-muted-foreground pl-[3.375rem] xl:pl-[4.25rem]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryButton({ data, isActive, onClick, showCount = true }) {
  const { category, icon: Icon, color, bg } = data;
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all duration-200",
        isActive
          ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
          : "border-border bg-white text-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
          isActive ? "bg-white/20" : bg
        )}
      >
        <Icon
          className={cn(
            "h-4 w-4 transition-colors",
            isActive ? "text-white" : color
          )}
        />
      </span>
      <span className="flex-1 leading-tight">{category}</span>
      {showCount && (
        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold tabular-nums transition-colors",
            isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
          )}
        >
          {data.questions.length}
        </span>
      )}
      <ChevronRight
        className={cn(
          "h-3.5 w-3.5 shrink-0 transition-all",
          isActive
            ? "text-white translate-x-0.5"
            : "text-muted-foreground/40 group-hover:text-primary/60"
        )}
      />
    </button>
  );
}

const scrollToEl = (el, offset = 96) => {
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
};

export default function FaqsSection() {
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category);
  const [openIndex, setOpenIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const panelRef = useRef(null);
  const itemRefs = useRef([]);

  const activeData = FAQ_DATA.find((d) => d.category === activeCategory);

  const handleCategoryChange = (cat) => {
    itemRefs.current = [];
    setActiveCategory(cat);
    setOpenIndex(0);
    setSidebarOpen(false);
    setTimeout(() => scrollToEl(panelRef.current), 60);
  };

  const toggleItem = (idx) => {
    const next = openIndex === idx ? null : idx;
    setOpenIndex(next);
    if (next !== null) {
      setTimeout(() => scrollToEl(itemRefs.current[next]), 60);
    }
  };

  return (
    <div className="pb-24 md:pb-32">
      <SectionViewer className="inter">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-3"
        >
          <SectionLabel label="Browse by Topic" />
          <div className="flex flex-col gap-2 lg:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl xl:text-5xl leading-tight">
              Everything You Need to Know
            </h2>
            <p className="mt-2 lg:mt-0 text-sm text-muted-foreground leading-relaxed md:text-right md:max-w-xs">
              Can't find an answer?{" "}
              <a href="/contact_us" className="font-semibold text-blue underline underline-offset-2 hover:text-primary transition-colors">
                Talk to our team
              </a>
            </p>
          </div>
          {/* Decorative rule */}
          <div className="mt-1 h-px bg-gradient-to-r from-blue/30 via-light-blue/20 to-transparent" />
        </motion.div>

        {/* Body */}
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">

          {/* ── Mobile trigger ── */}
          <div className="lg:hidden">
            {/* >> Tab on the left edge */}
            <motion.button
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
              onClick={() => setSidebarOpen(true)}
              className="fixed left-0 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center gap-1 rounded-r-xl bg-primary px-1.5 py-4 shadow-lg shadow-primary/30"
            >
              <ChevronsRight className="h-4 w-4 text-white" />
              <span className="[writing-mode:vertical-rl] rotate-180 text-[9px] font-bold uppercase tracking-wider text-white/70">
                Topics
              </span>
            </motion.button>

            {/* Active category pill */}
            <div className="flex items-center gap-2">
              {activeData && (
                <>
                  <span className="text-base font-bold text-primary">{activeCategory}</span>
                  <span className="text-sm text-muted-foreground">
                    · {activeData.questions.length} questions
                  </span>
                </>
              )}
              <button
                onClick={() => setSidebarOpen(true)}
                className="ml-auto inline-flex items-center gap-1 rounded-lg border border-blue/30 bg-blue/5 px-3 py-1 text-xs font-semibold text-blue hover:bg-blue/10 transition-colors"
              >
                Change <ChevronsRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* ── Mobile Drawer ── */}
          <AnimatePresence>
            {sidebarOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                />

                {/* Drawer panel */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 320, damping: 32 }}
                  className="fixed left-0 top-[4.5rem] bottom-0 z-50 flex w-78 flex-col bg-white shadow-2xl lg:hidden h-[calc(100svh-4.5rem)]"
                >
                  {/* Drawer header */}
                  <div className="flex items-center justify-between border-b px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                        <ChevronsRight className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-primary">Browse Topics</span>
                    </div>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted transition-colors"
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Drawer category list */}
                  <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                    {FAQ_DATA.map((data) => (
                      <CategoryButton
                        key={data.category}
                        data={data}
                        isActive={activeCategory === data.category}
                        onClick={() => handleCategoryChange(data.category)}
                      />
                    ))}
                  </div>

                  {/* Drawer footer */}
                  <div className="border-t p-4">
                    <p className="text-xs text-muted-foreground text-center">
                      Can't find what you're looking for?{" "}
                      <a href="/contact_us" className="font-semibold text-blue underline-offset-2 underline">
                        Contact us
                      </a>
                    </p>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* ── Desktop Sidebar ── */}
          <motion.aside
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="hidden lg:flex flex-col gap-2.5 w-68 xl:w-80 shrink-0 sticky top-24"
          >
            {/* Sidebar label */}
            <p className="mb-1 px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Categories
            </p>
            {FAQ_DATA.map((data) => (
              <CategoryButton
                key={data.category}
                data={data}
                isActive={activeCategory === data.category}
                onClick={() => handleCategoryChange(data.category)}
              />
            ))}

            {/* Help card */}
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
              <p className="text-xs lg:text-sm font-semibold text-primary">Still have questions?</p>
              <p className="mt-1 text-[11px] lg:text-xs text-muted-foreground">
                Our advisory team is ready to help.
              </p>
              <Link
                to="/contact_us"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary pl-4.5 pr-3 py-2 text-[11px] lg:text-xs font-semibold text-white hover:bg-foreground transition-colors"
              >
                Contact Us <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.aside>

          {/* ── FAQ Accordion Panel ── */}
          <div ref={panelRef} className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="flex flex-col gap-3"
              >
                {/* Category heading row (desktop) */}
                <div className="hidden lg:flex items-center gap-3 mb-2">
                  {activeData && ( 
                      <div className="w-full flex flex-row items-center justify-between">
                        <h3 className="text-base lg:text-lg font-bold text-primary leading-none">{activeCategory}</h3>
                        <p className="mt-0.5 text-xs lg:text-sm text-muted-foreground">
                          {activeData.questions.length} questions
                        </p>
                      </div>
                  )}
                </div>

                {activeData?.questions.map((item, idx) => (
                  <AccordionItem
                    key={`${activeCategory}-${idx}`}
                    item={item}
                    index={idx}
                    isOpen={openIndex === idx}
                    onToggle={() => toggleItem(idx)}
                    setRef={(el) => { itemRefs.current[idx] = el; }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </SectionViewer>
    </div>
  );
}
