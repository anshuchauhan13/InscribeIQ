import { cn } from "@/lib/utils";


function SectionLabel({label, className}) {
  return (
    <label className={cn("text-xs sm:text-sm md:text-[15px] xl:text-[23px] font-bold uppercase tracking-widest text-blue manrope", className)}>{label}</label>
  )
}

export default SectionLabel