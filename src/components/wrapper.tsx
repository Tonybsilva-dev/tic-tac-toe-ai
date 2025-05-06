import { cn } from "../lib/utils"

type WrapperProps = {
  children: React.ReactNode
  className?: string
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn("w-full max-w-md bg-emerald-200 flex flex-col items-center justify-center p-8 rounded-lg", className)}>
      {children}
    </div>
  )
}

export default Wrapper