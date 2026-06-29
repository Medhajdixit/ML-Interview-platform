"use client"

import { useEffect, useRef } from "react"

type NeuralBackgroundProps = {
  className?: string
  density?: number
}

export function NeuralBackground({ className, density = 60 }: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    type Node = { x: number; y: number; vx: number; vy: number }
    let nodes: Node[] = []

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    function resize() {
      const parent = canvas.parentElement
      width = parent?.clientWidth ?? window.innerWidth
      height = parent?.clientHeight ?? window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(density, Math.floor((width * height) / 18000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      const maxDist = 150

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!prefersReduced) {
          n.x += n.vx
          n.y += n.vy
        }
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const dx = n.x - m.x
          const dy = n.y - m.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(6, 182, 212, 0.7)"
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [density])

  return <canvas ref={canvasRef} aria-hidden className={className} />
}
