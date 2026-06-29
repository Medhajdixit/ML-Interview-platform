"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/brand/logo"
import { navItems } from "@/components/dashboard/sidebar-nav"
import { currentUser } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <div className="flex h-16 items-center px-5">
        <Link href="/" aria-label="InterviewAI home">
          <Logo />
        </Link>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-primary/15 text-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
              )}
            >
              <item.icon
                className={cn("size-[18px]", active ? "text-[#7c3aed]" : "text-muted-foreground group-hover:text-foreground")}
              />
              {item.label}
              {active && <span className="ml-auto size-1.5 rounded-full bg-[#06b6d4]" />}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <div className="rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 to-[#06b6d4]/10 p-4">
          <p className="text-xs font-medium text-foreground">Level {currentUser.level}</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-background/60">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]"
              style={{ width: `${(currentUser.xp / currentUser.xpToNext) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {currentUser.xp.toLocaleString()} / {currentUser.xpToNext.toLocaleString()} XP
          </p>
        </div>
      </div>
    </aside>
  )
}
