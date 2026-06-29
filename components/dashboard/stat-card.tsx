"use client"

import { motion } from "motion/react"
import { TrendingUp, TrendingDown, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type StatCardProps = {
  label: string
  value: string
  delta?: string
  trend?: "up" | "down"
  icon: LucideIcon
  accent?: string
  index?: number
}

export function StatCard({ label, value, delta, trend = "up", icon: Icon, accent = "#7c3aed", index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5"
    >
      <div
        className="absolute -right-8 -top-8 size-24 rounded-full opacity-20 blur-2xl"
        style={{ background: accent }}
      />
      <div className="flex items-center justify-between">
        <span
          className="grid size-10 place-items-center rounded-xl"
          style={{ background: `${accent}1a`, color: accent }}
        >
          <Icon className="size-5" />
        </span>
        {delta && (
          <span
            className={cn(
              "flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
              trend === "up" ? "bg-[#10b981]/15 text-[#10b981]" : "bg-[#ef4444]/15 text-[#ef4444]",
            )}
          >
            {trend === "up" ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
            {delta}
          </span>
        )}
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}
