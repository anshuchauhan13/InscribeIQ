import { cn } from '@/lib/utils';

function Heading({title, className}) {
  return (
    <h6 className={cn(className, "text-2xl")}>{title}</h6>
  )
}

export default Heading