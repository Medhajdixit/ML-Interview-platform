"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { GradientOrbs } from "@/components/visuals/gradient-orbs"

export function CTA() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] border border-border bg-card/50 px-6 py-16 text-center backdrop-blur md:px-12 md:py-20"
      >
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <GradientOrbs />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Your dream job is one interview away
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Join thousands of candidates practicing smarter with AI. Start your first mock interview
            in under a minute.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/interview"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_#7c3aed] transition-all hover:shadow-[0_0_50px_-6px_#7c3aed]"
            >
              Start Mock Interview
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex h-12 items-center rounded-xl border border-border bg-background/60 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Explore Dashboard
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
