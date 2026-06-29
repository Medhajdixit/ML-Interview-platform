"use client"

import Link from "next/link"
import { Search, Bell, Flame } from "lucide-react"
import { currentUser } from "@/lib/mock-data"

export function Topbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur md:px-6">
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-lg font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="relative hidden md:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search…"
          className="h-9 w-56 rounded-xl border border-border bg-card/60 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-[#7c3aed]"
        />
      </div>

      <div className="flex items-center gap-1.5 rounded-xl border border-border bg-card/60 px-2.5 py-1.5 text-sm">
        <Flame className="size-4 text-[#f59e0b]" />
        <span className="font-medium">{currentUser.streak}</span>
        <span className="hidden text-muted-foreground sm:inline">day streak</span>
      </div>

      <button
        className="relative grid size-9 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Notifications"
      >
        <Bell className="size-[18px]" />
        <span className="absolute right-2 top-2 size-2 rounded-full bg-[#ec4899]" />
      </button>

      <Link
        href="/dashboard"
        onClick={() => window.speechSynthesis.cancel()}
      >
        <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-xs font-semibold text-white">
          {currentUser.initials}
        </span>
        <span className="hidden text-sm font-medium sm:inline">{currentUser.name}</span>
      </Link>
    </header>
  )
}
