"use client"

import Link from "next/link"
import { Video, Target, Clock, Award, ArrowRight, Sparkles } from "lucide-react"
import { DashboardShell } from "@/components/dashboard/shell"
import { StatCard } from "@/components/dashboard/stat-card"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { ScoreRing } from "@/components/dashboard/score-ring"
import { currentUser, recentInterviews, scoreBreakdown } from "@/lib/mock-data"
import { badges } from "@/lib/badges"

export default function DashboardPage() {
  return (
    <DashboardShell title="Dashboard">
      <div className="space-y-6">
        {/* Welcome banner */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#7c3aed]/15 via-card/40 to-[#06b6d4]/10 p-6 md:p-8">
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[#7c3aed] opacity-20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-muted-foreground">Welcome back,</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">{currentUser.name}</h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                You&apos;re on a {currentUser.streak}-day streak. Ready for your next mock interview?
              </p>
            </div>
            <Link
              href="/interview"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-8px_#7c3aed] transition-all hover:opacity-90"
            >
              <Sparkles className="size-4" />
              Start Interview
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard index={0} label="Interviews Taken" value="24" delta="+6" icon={Video} accent="#7c3aed" />
          <StatCard index={1} label="Average Score" value="86" delta="+12%" icon={Award} accent="#2563eb" />
          <StatCard index={2} label="Practice Hours" value="38h" delta="+4h" icon={Clock} accent="#06b6d4" />
          <StatCard index={3} label="Skills Mastered" value="18" delta="+3" icon={Target} accent="#ec4899" />
        </div>

        {/* Chart + score */}
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-5">
            <h3 className="text-sm font-semibold">Latest Score Breakdown</h3>
            <div className="mt-4 flex justify-center">
              <ScoreRing value={86} />
            </div>
            <div className="mt-5 space-y-3">
              {scoreBreakdown.map((s) => (
                <div key={s.label}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{s.label}</span>
                    <span className="font-medium">{s.value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-background">
                    <div className="h-full rounded-full" style={{ width: `${s.value}%`, background: s.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent interviews */}
        <div className="rounded-2xl border border-border bg-card/50 p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Recent Interviews</h3>
            <Link href="/interview" className="text-xs font-medium text-[#06b6d4] hover:underline">
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs text-muted-foreground">
                  <th className="pb-3 font-medium">Role</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Duration</th>
                  <th className="pb-3 text-right font-medium">Score</th>
                </tr>
              </thead>
              <tbody>
                {recentInterviews.map((i) => (
                  <tr key={i.id} className="border-b border-border/50 last:border-0">
                    <td className="py-3">
                      <p className="font-medium">{i.role}</p>
                      <p className="text-xs text-muted-foreground">{i.company}</p>
                    </td>
                    <td className="py-3">
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                        {i.type}
                      </span>
                    </td>
                    <td className="py-3 text-muted-foreground">{i.date}</td>
                    <td className="py-3 text-muted-foreground">{i.duration}</td>
                    <td className="py-3 text-right">
                      <span
                        className="font-semibold"
                        style={{ color: i.score >= 85 ? "#10b981" : i.score >= 75 ? "#f59e0b" : "#ef4444" }}
                      >
                        {i.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card/50 p-5">
  <div className="flex items-center justify-between">
    <h3 className="text-sm font-semibold">
      Recent Badges
    </h3>
  </div>

  <div className="mt-4 flex gap-4">
    {badges.slice(0, 3).map((badge) => (
      <div
        key={badge.id}
        className="flex flex-col items-center"
      >
        <div className="text-4xl">
          {badge.icon}
        </div>

        <span className="mt-2 text-xs">
          {badge.name}
        </span>
      </div>
    ))}
  </div>
</div>
    </DashboardShell>
  )
}
