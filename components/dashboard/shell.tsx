import type { ReactNode } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Topbar } from "@/components/dashboard/topbar"
import { BottomNav } from "@/components/dashboard/bottom-nav"

export function DashboardShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex min-h-dvh bg-background">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={title} />
        <main className="flex-1 px-4 py-6 pb-24 md:px-6 lg:pb-8">{children}</main>
      </div>
      <BottomNav />
    </div>
  )
}
