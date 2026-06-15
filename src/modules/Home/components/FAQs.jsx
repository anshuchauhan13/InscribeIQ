import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionViewer from "@/components/common/SectionViewer";

const faqData = {
  "Common Doubts": [
    {
      q: "What is an Honorary Doctorate and who can receive it?",
      a: "An Honorary Doctorate is a prestigious title awarded to individuals for exceptional contributions in business, education, social work, innovation, arts, or public service. It is conferred without exams or coursework.",
    },
    {
      q: "Is an Honorary Doctorate a real and recognised degree?",
      a: "Yes. It is a legitimate and globally respected title awarded by affiliated institutions to honour lifetime achievements, leadership, and impact. While not a traditional academic degree, it carries immense professional and social value worldwide.",
    },
    {
      q: "How can I apply for an Honorary Doctorate?",
      a: "Apply through InscribeIQ. We evaluate your profile, achievements, and eligibility, then guide you through a seamless application process with our university partners.",
    },
    {
      q: "Do I need a PhD or academic background to be eligible?",
      a: "Absolutely not. An Honorary Doctorate is awarded based on real-world impact, leadership, and contribution — not academic credentials or thesis submission.",
    },
 
  ],
  "Honorary Doctorate": [
    {
      q: "What is the difference between an Honorary Doctorate and a PhD?",
      a: "A PhD requires years of coursework and original research. An Honorary Doctorate is awarded in recognition of extraordinary real-world achievements and contributions — no thesis or exams required.",
    },
    {
      q: "Can I use the 'Dr.' title after receiving an Honorary Doctorate?",
      a: "Yes, in most professional and social contexts you may use the 'Dr.' prefix. However, conventions vary — it is advisable to clarify the honorary nature in strictly academic settings.",
    },
    {
      q: "Which institutions confer Honorary Doctorates?",
      a: "Globally recognised universities and affiliated institutions partner with InscribeIQ to award honorary degrees to deserving professionals across industries.",
    },
    {
      q: "Is my Honorary Doctorate internationally recognised?",
      a: "Yes. Degrees are awarded through accredited partner institutions and hold recognition across professional, corporate, and public service domains worldwide.",
    },
  ],
  Programs: [
    {
      q: "What programs are available under InscribeIQ?",
      a: "InscribeIQ offers honorary doctorate programs across disciplines including Business Leadership, Social Impact, Education, Arts & Culture, Technology Innovation, and Public Service.",
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
  ],
  Payment: [
    {
      q: "What is the cost of the Honorary Doctorate program?",
      a: "Program fees vary based on the institution and tier selected. Detailed pricing is provided after an initial eligibility assessment at no cost.",
    },
    {
      q: "Are there any hidden charges beyond the program fee?",
      a: "No. InscribeIQ maintains full fee transparency. All charges — including documentation, processing, and ceremony fees (if applicable) — are disclosed upfront.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept all major credit/debit cards, net banking, UPI, and international bank transfers. EMI options are also available for select programs.",
    },
    {
      q: "Is the fee refundable if I am found ineligible?",
      a: "Yes. If your application is assessed and found ineligible after payment, InscribeIQ offers a full refund as per our transparency-first policy.",
    },
  ],
};

const categories = Object.keys(faqData);

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState("Common Doubts");

  const questions = faqData[activeCategory];

  return (
    <SectionViewer className="sm:py-16 py-12">
      <div className="">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-[#320F8C] tracking-widest uppercase mb-2">
            FAQs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Let's Clear Things Up
          </h2>
          <div className="w-20 h-1 bg-[#320F8C] " />
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Category Sidebar */}
          <aside className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-80 shrink-0 pb-1 lg:pb-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "flex items-center justify-between gap-2 whitespace-nowrap lg:whitespace-normal text-sm font-medium px-4 py-3 rounded-lg border transition-all duration-200 text-left w-full",
                    isActive
                      ? "bg-[#170545] text-white border-violet-900 shadow-md"
                      : "bg-white text-slate-700 border-slate-200 hover:border-[#170545] hover:text-[#170545]",
                  )}
                >
                  <span>{cat}</span>
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 shrink-0 transition-transform duration-200",
                      isActive ? "text-white" : "text-slate-400",
                    )}
                  />
                </button>
              );
            })}
          </aside>

          {/* Questions Panel */}
          <div className="flex-1  -mt-6">
            {questions.map((item, idx) => (
              <div key={idx} className="flex gap-4 py-4 sm:gap-6 ">
                {/* Number */}
                <span
                  className="
    flex items-center justify-center
    w-8 h-8 shrink-0
    rounded-md
    bg-[#F8F6FC]
    text-base font-bold text-[#170545] 
    mt-0.5
    shadow-[0_4px_12px_rgba(105,97,188,0.25)]
  "
                >
                  {idx + 1}.
                </span>
                {/* Content */}
                <div>
                  <h4 className="text-md sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.q}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionViewer>
  );
};

export default FAQs;
