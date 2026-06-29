"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type AIAvatarProps = {
  speaking?: boolean
  size?: number
  className?: string
}

export function AIAvatar({ speaking = false, size = 360, className }: AIAvatarProps) {
  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      {/* glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.45),transparent_65%)] blur-2xl"
        animate={{ scale: speaking ? [1, 1.12, 1] : [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: speaking ? 1.4 : 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-3 rounded-full border border-[#06b6d4]/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-6 rounded-full border border-[#ec4899]/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* breathing avatar */}
      <motion.div
        className="absolute inset-8 overflow-hidden rounded-full border border-white/10 shadow-[0_0_60px_-10px_#7c3aed]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/ai-interviewer.png"
          alt="AI interviewer avatar"
          fill
          sizes="360px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/60 via-transparent to-transparent" />
      </motion.div>

      {/* speaking waveform */}
      {speaking && (
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-end gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.span
              key={i}
              className="w-1 rounded-full bg-[#06b6d4]"
              animate={{ height: [6, 22, 6] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
