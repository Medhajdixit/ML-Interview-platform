"use client"

import { motion } from "motion/react"

export function Waveform({
  active = true,
  color = "#06b6d4",
  bars = 24,
  className,
}: {
  active?: boolean
  color?: string
  bars?: number
  className?: string
}) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className ?? ""}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full"
          style={{ background: color }}
          animate={
            active
              ? { height: [6, 8 + Math.abs(Math.sin(i)) * 28, 6] }
              : { height: 4 }
          }
          transition={{
            duration: 0.8 + (i % 5) * 0.12,
            repeat: active ? Infinity : 0,
            ease: "easeInOut",
            delay: i * 0.04,
          }}
        />
      ))}
    </div>
  )
}
