import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, HelpCircle, Award, GraduationCap, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";

const faqData = [
  {
    category: "Common Doubts",
    icon: HelpCircle,
    color: "text-violet-500",
    bg: "bg-violet-50",
    questions: [
      {
        q: "What is an Honorary Doctorate and who qualifies for one?",
        a: "An Honorary Doctorate is a formal academic title awarded by an affiliated institution to recognise extraordinary contributions in fields such as business, education, public service, arts, technology, or social work. It is based entirely on achievement and impact, with no exams, coursework, or thesis required.",
      },
      {
        q: "Is an Honorary Doctorate genuinely recognised?",
        a: "Yes. It is a legitimate title conferred by accredited academic institutions. While it differs from an earned research doctorate, it is widely respected in professional, academic, and social circles worldwide and carries real credibility across most industries and countries.",
      },
      {
        q: "How does the application process work at InscribeIQ?",
        a: "You begin by sharing your profile with our team. We review your background, assess your eligibility, identify the most suitable affiliated institution, and guide you through the entire documentation and nomination process from start to finish.",
      },
      {
        q: "Do I need any academic qualifications to apply?",
        a: "No academic background is required. An Honorary Doctorate is awarded purely on the strength of your professional achievements, contributions, and the difference you have made in your field or community.",
      },
    ],
  },
  {
    category: "Honorary Doctorate",
    icon: Award,
    color: "text-amber-500",
    bg: "bg-amber-50",
    questions: [
      {
        q: "What is the difference between an Honorary Doctorate and a PhD?",
        a: "A PhD is an earned research degree that requires years of academic study, original research, and thesis submission. An Honorary Doctorate is a formal title awarded by an accredited institution to individuals who have made extraordinary contributions to their field, society, or profession. No coursework, exams, or thesis is involved.",
      },
      {
        q: "Can I use the Dr. title after receiving an Honorary Doctorate?",
        a: "Yes. In most professional, corporate, and social settings, you may use the Dr. prefix following your honorary award. It is advisable to acknowledge the honorary nature of the title when introducing yourself in strictly academic or research-focused environments.",
      },
      {
        q: "Which institutions confer Honorary Doctorates through InscribeIQ?",
        a: "InscribeIQ works with a curated network of globally affiliated and accredited universities that award honorary degrees to deserving professionals across industries. Each institution is carefully vetted to ensure your credentials are genuinely recognized and respected.",
      },
      {
        q: "Is my Honorary Doctorate internationally recognised?",
        a: "Yes. All honorary degrees facilitated through InscribeIQ are awarded by accredited partner institutions whose credentials are acknowledged across professional, corporate, academic, and public service domains worldwide.",
      },
    ],
  },
  {
    category: "Programs",
    icon: GraduationCap,
    color: "text-blue-500",
    bg: "bg-blue-50",
    questions: [
      {
        q: "What programmes are available under InscribeIQ?",
        a: "InscribeIQ offers honorary doctorate programmes spanning multiple disciplines, including Business Leadership, Social Impact, Education, Arts and Culture, Technology Innovation, Humanitarian Service, and Public Service. New fields are added regularly based on applicant profiles and institutional availability.",
      },
      {
        q: "Can I choose the field of my Honorary Doctorate?",
        a: "Yes. During the application process, you select a field that best reflects your professional background, areas of contribution, and the impact you have created over your career. Our advisors help you make the right choice based on your profile.",
      },
      {
        q: "Are there different tiers or levels within the programme?",
        a: "Yes. Programmes are offered at various prestige levels depending on the awarding institution, the depth of your contributions, and your overall professional profile. Our academic advisors assess your background and match you with the tier that best represents your achievements.",
      },
      {
        q: "Does the programme include a physical convocation ceremony?",
        a: "Select programmes include both in-person and virtual convocation ceremonies. Physical ceremonies are held at partner university campuses or affiliated prestigious venues. Your advisor will confirm ceremony details based on the programme you are enrolled in.",
      },
    ],
  },
  {
    category: "Payment",
    icon: CreditCard,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    questions: [
      {
        q: "What is the cost of an Honorary Doctorate programme?",
        a: "Programme fees vary based on the institution selected and the prestige tier of the award. A detailed fee structure is shared with you after your initial eligibility assessment, which is conducted at no cost.",
      },
      {
        q: "Are there any hidden charges beyond the programme fee?",
        a: "No. InscribeIQ maintains complete fee transparency. All applicable charges, including documentation, processing, and ceremony fees, are disclosed upfront before you make any commitment or payment.",
      },
      {
        q: "What payment methods does InscribeIQ accept?",
        a: "We accept all major credit and debit cards, net banking, UPI, and international bank transfers. EMI options are also available for select programmes to make the process more accessible.",
      },
      {
        q: "Is the fee refundable if I am found ineligible?",
        a: "Yes. If your application is assessed and found ineligible after payment has been made, InscribeIQ offers a full refund in line with our transparency-first policy. You will never be charged for an outcome we cannot deliver.",
      },
    ],
  },
];

const EASE = [0.22, 0.61, 0.36, 1];

const questionsContainerVar = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const questionItemVar = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

function CategoryButton({ data, isActive, onClick }) {
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
        <Icon className={cn("h-4 w-4 transition-colors", isActive ? "text-white" : color)} />
      </span>
      <span className="flex-1 leading-tight">{category}</span>
      <span
        className={cn(
          "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold tabular-nums transition-colors",
          isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
        )}
      >
        {data.questions.length}
      </span>
      <ChevronRight
        className={cn(
          "h-3.5 w-3.5 shrink-0 transition-all",
          isActive ? "text-white translate-x-0.5" : "text-muted-foreground/40 group-hover:text-primary/60"
        )}
      />
    </button>
  );
}

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);

  const activeData = faqData.find((d) => d.category === activeCategory);
  const questions = activeData?.questions ?? [];

  return (
    <SectionViewer className="sm:py-16 py-12">
      <div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-10"
        >
          <p className="text-sm font-semibold text-[#320F8C] tracking-widest uppercase mb-2">
            FAQs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Questions We Hear Every Day, Answered Honestly
          </h2>
          <div className="w-20 h-1 bg-[#320F8C]" />
        </motion.div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Category Sidebar */}
          <aside className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-72 shrink-0 pb-1 lg:pb-0 no-scrollbar">
            {faqData.map((data) => (
              <CategoryButton
                key={data.category}
                data={data}
                isActive={activeCategory === data.category}
                onClick={() => setActiveCategory(data.category)}
              />
            ))}
          </aside>

          {/* Questions Panel */}
          <div className="flex-1 -mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={questionsContainerVar}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -8, transition: { duration: 0.2, ease: EASE } }}
              >
                {questions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={questionItemVar}
                    className="flex gap-4 py-4 sm:gap-6"
                  >
                    <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-md bg-white text-base font-bold text-[#170545] mt-0.5 shadow-[0_4px_12px_rgba(105,97,188,0.25)]">
                      {idx + 1}.
                    </span>
                    <div>
                      <h4 className="text-md sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                        {item.q}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionViewer>
  );
};

export default FAQs;
