import { cn } from "@/lib/utils"

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[#7c3aed] via-[#2563eb] to-[#06b6d4] shadow-[0_0_20px_-4px_#7c3aed]">
        <svg viewBox="0 0 24 24" className="size-4 text-white" fill="none" aria-hidden>
          <path
            d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="3.2" fill="currentColor" />
        </svg>
      </span>
      {showText && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          Interview<span className="text-gradient">AI</span>
        </span>
      )}
    </span>
  )
}
