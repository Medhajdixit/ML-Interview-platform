"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { performanceTrend } from "@/lib/mock-data"

export function PerformanceChart() {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold">Performance Trend</h3>
          <p className="text-xs text-muted-foreground">Overall interview score over time</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#7c3aed]" /> Score
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#06b6d4]" /> Confidence
          </span>
        </div>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={performanceTrend} margin={{ left: -20, right: 8, top: 8 }}>
            <defs>
              <linearGradient id="scoreFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="confFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeOpacity={0.4} vertical={false} />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[40, 100]} />
            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: 12,
                fontSize: 12,
                color: "#f9fafb",
              }}
            />
            <Area type="monotone" dataKey="score" stroke="#7c3aed" strokeWidth={2} fill="url(#scoreFill)" />
            <Area type="monotone" dataKey="confidence" stroke="#06b6d4" strokeWidth={2} fill="url(#confFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
