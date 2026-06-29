"use client"

import { motion } from "motion/react"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "InterviewAI completely changed how I prepare. The AI feedback on my communication was scarily accurate — I landed a job at a FAANG company within a month.",
    name: "Priya Sharma",
    role: "Software Engineer · Meta",
    accent: "#7c3aed",
  },
  {
    quote:
      "The skill gap analysis showed me exactly what I was missing. The roadmap feature felt like having a personal career coach.",
    name: "Marcus Chen",
    role: "Product Manager · Stripe",
    accent: "#2563eb",
  },
  {
    quote:
      "Video interviews with confidence tracking helped me fix my body language. I felt unstoppable in my real interviews.",
    name: "Sofia Reyes",
    role: "Data Scientist · Netflix",
    accent: "#06b6d4",
  },
  {
    quote:
      "As a career switcher, the personalized questions were a lifesaver. The ATS scoring got my resume past the filters every time.",
    name: "James Okafor",
    role: "UX Designer · Airbnb",
    accent: "#ec4899",
  },
  {
    quote:
      "We rolled InterviewAI out to our entire bootcamp. Placement rates jumped 30% in a single cohort.",
    name: "Dr. Lena Vogt",
    role: "Director · TechBridge Academy",
    accent: "#10b981",
  },
]

export function Testimonials() {
  const row = [...testimonials, ...testimonials]
  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="text-sm font-medium text-[#ec4899]">Loved by candidates</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Thousands have landed their dream roles
        </h2>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max gap-4 animate-[gradient_40s_linear_infinite] hover:[animation-play-state:paused]">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {row.map((t, i) => (
              <figure
                key={i}
                className="flex w-[340px] shrink-0 flex-col rounded-3xl border border-border bg-card/40 p-6 backdrop-blur"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className="grid size-10 place-items-center rounded-full text-sm font-semibold text-white"
                    style={{ background: t.accent }}
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
