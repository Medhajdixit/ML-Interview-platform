"use client"

import { motion } from "motion/react"
import { Upload, MessageSquare, LineChart } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload your resume",
    desc: "We extract your skills and tailor a personalized question set to your target role.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Take a mock interview",
    desc: "Talk to a realistic AI interviewer through voice or video, just like the real thing.",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Get detailed feedback",
    desc: "Receive scores on communication, confidence, and skills — plus a learning roadmap.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-[#7c3aed]">How it works</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          From resume to ready in three steps
        </h2>
      </div>

      <div className="relative mt-14 grid gap-6 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-3xl border border-border bg-card/40 p-6 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl border border-border bg-background text-foreground">
                <s.icon className="size-5" />
              </div>
              <span className="text-3xl font-semibold text-foreground/10">{s.step}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
