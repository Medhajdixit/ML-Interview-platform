import { AnimatedCounter } from "@/components/visuals/animated-counter"

const stats = [
  { value: 50000, suffix: "+", label: "Interviews Conducted" },
  { value: 95, suffix: "%", label: "User Satisfaction" },
  { value: 100, suffix: "+", label: "Companies Supported" },
  { value: 10000, suffix: "+", label: "Active Users" },
]

export function Stats() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card/40 p-6 backdrop-blur md:grid-cols-4 md:p-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-semibold tracking-tight md:text-4xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} className="text-gradient" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
