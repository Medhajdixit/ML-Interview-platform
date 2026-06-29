"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started with the essentials.",
    features: ["3 mock interviews / month", "Basic resume analysis", "Standard question bank", "Community support"],
    cta: "Start for free",
    href: "/register",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ month",
    desc: "For serious job seekers.",
    features: [
      "Unlimited mock interviews",
      "Voice & video interviews",
      "Detailed AI feedback",
      "Analytics dashboard",
      "Skill gap analysis",
      "ATS resume scoring",
    ],
    cta: "Start Pro trial",
    href: "/register",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams and institutions.",
    features: [
      "Everything in Pro",
      "Recruiter dashboard",
      "Team management",
      "Advanced reporting",
      "SSO & SAML",
      "Dedicated support",
    ],
    cta: "Contact sales",
    href: "/register",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-[#2563eb]">Pricing</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Simple pricing that scales with you
        </h2>
        <p className="mt-4 text-muted-foreground">Start free. Upgrade when you&apos;re ready to go all in.</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={cn(
              "relative flex flex-col rounded-3xl border p-6 backdrop-blur md:p-8",
              p.featured
                ? "border-[#7c3aed]/50 bg-card/60 shadow-[0_0_60px_-20px_#7c3aed]"
                : "border-border bg-card/40",
            )}
          >
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
              {p.period && <span className="text-sm text-muted-foreground">{p.period}</span>}
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#10b981]" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href={p.href}
              className={cn(
                "mt-8 inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition-all",
                p.featured
                  ? "bg-primary text-primary-foreground shadow-[0_0_30px_-8px_#7c3aed] hover:opacity-90"
                  : "border border-border bg-background/60 text-foreground hover:bg-muted",
              )}
            >
              {p.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
