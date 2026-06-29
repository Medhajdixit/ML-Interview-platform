export function GradientOrbs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#7c3aed] opacity-20 blur-[120px] animate-float" />
      <div className="absolute right-0 top-20 h-[24rem] w-[24rem] rounded-full bg-[#06b6d4] opacity-15 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#2563eb] opacity-15 blur-[130px] animate-float" />
      <div className="absolute -bottom-24 right-1/4 h-[20rem] w-[20rem] rounded-full bg-[#ec4899] opacity-10 blur-[120px] animate-float-slow" />
    </div>
  )
}
