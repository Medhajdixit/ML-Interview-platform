"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Play, Sparkles, ArrowRight } from "lucide-react"
import { NeuralBackground } from "@/components/visuals/neural-background"
import { GradientOrbs } from "@/components/visuals/gradient-orbs"
import { AIAvatar } from "@/components/visuals/ai-avatar"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <NeuralBackground className="absolute inset-0 opacity-60" />
      <GradientOrbs />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Sparkles className="size-3.5 text-[#06b6d4]" />
            AI-powered interview preparation
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Master Interviews <br className="hidden sm:block" />
            with <span className="text-gradient">AI</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Practice realistic interviews, improve communication, identify skill gaps, and land
            your dream job faster — with a human-like AI interviewer that gives instant, detailed
            feedback.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center"
          >
            <Link
              href="/interview"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_#7c3aed] transition-all hover:shadow-[0_0_50px_-6px_#7c3aed]"
            >
              Start Mock Interview
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button className="group inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card/40 px-6 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card">
              <span className="grid size-6 place-items-center rounded-full bg-foreground/10">
                <Play className="size-3 fill-current" />
              </span>
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
          >
            <div className="flex -space-x-2">
              {["#7c3aed", "#2563eb", "#06b6d4", "#ec4899"].map((c) => (
                <span
                  key={c}
                  className="size-7 rounded-full border-2 border-background"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">10,000+</span> candidates
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          <AIAvatar speaking size={380} className="max-w-full" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-6 left-0 rounded-2xl glass px-4 py-3 text-left shadow-xl"
          >
            <p className="text-xs text-muted-foreground">AI Interviewer</p>
            <p className="text-sm font-medium">Tell me about a challenge you solved…</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute right-0 top-10 rounded-2xl glass px-4 py-3 text-left shadow-xl"
          >
            <p className="text-xs text-muted-foreground">Confidence</p>
            <p className="text-sm font-semibold text-[#10b981]">92% · Strong</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
