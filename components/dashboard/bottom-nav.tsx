"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Video, BarChart3, Trophy, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const items = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/interview", label: "Interview", icon: Video },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/achievements", label: "Badges", icon: Trophy },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export function BottomNav() {
  const pathname = usePathname()
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur lg:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {items.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-[11px] font-medium transition-colors",
                active ? "text-[#7c3aed]" : "text-muted-foreground",
              )}
            >
              <item.icon className="size-5" />
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
