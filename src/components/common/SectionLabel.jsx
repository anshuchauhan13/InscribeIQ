import { cn } from "@/lib/utils";


function SectionLabel({label, className}) {
  return (
    <label className={cn("text-xs md:text-sm xl:text-base font-bold uppercase tracking-widest text-blue manrope", className)}>{label}</label>
  )
}

export default SectionLabel