"use client"

import { motion } from "motion/react"

export function PageHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-1"
    >
      <h1 className="text-pretty text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
      <p className="text-pretty text-sm text-muted-foreground">{description}</p>
    </motion.div>
  )
}
