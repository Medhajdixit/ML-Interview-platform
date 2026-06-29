import {
  LayoutDashboard,
  Video,
  FileSearch,
  Target,
  Map,
  BarChart3,
  Trophy,
  Settings,
  type LucideIcon,
} from "lucide-react"

export type NavItem = { href: string; label: string; icon: LucideIcon }

export const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/interview", label: "Interviews", icon: Video },
  { href: "/dashboard/resume", label: "Resume Analyzer", icon: FileSearch },
  { href: "/dashboard/skills", label: "Skill Gap Analysis", icon: Target },
  { href: "/dashboard/roadmap", label: "Learning Roadmap", icon: Map },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/achievements", label: "Achievements", icon: Trophy },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]
