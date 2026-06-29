"use client"

import { motion } from "motion/react"
import {
  FileSearch,
  Bot,
  Mic,
  Video,
  Target,
  Map,
  BarChart3,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Bot,
    title: "AI Recruiter",
    desc: "A human-like AI interviewer avatar that adapts questions to your role, resume, and answers in real time.",
    className: "md:col-span-2 md:row-span-2",
    accent: "#7c3aed",
    featured: true,
  },
  {
    icon: FileSearch,
    title: "AI Resume Analyzer",
    desc: "Upload your resume and automatically extract skills, projects, and experience.",
    accent: "#2563eb",
  },
  {
    icon: Mic,
    title: "Voice Interviews",
    desc: "Real-time conversational interviews with natural turn-taking.",
    accent: "#06b6d4",
  },
  {
    icon: Video,
    title: "Video Interviews",
    desc: "Body language, eye contact, and confidence tracking.",
    accent: "#ec4899",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    desc: "Detect missing skills against any job description.",
    accent: "#10b981",
  },
  {
    icon: Map,
    title: "Learning Roadmap",
    desc: "Personalized preparation plans with milestones.",
    accent: "#f59e0b",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Track performance, confidence, and progress over time.",
    accent: "#2563eb",
  },
  {
    icon: ShieldCheck,
    title: "ATS Resume Scoring",
    desc: "Optimize your resume to beat applicant tracking systems.",
    accent: "#06b6d4",
  },
]

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-[#06b6d4]">Everything you need</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          An entire interview prep team, powered by AI
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          From resume to offer letter — InterviewAI guides you through every step with
          enterprise-grade intelligence.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-6 backdrop-blur transition-colors hover:border-foreground/20",
              f.className,
            )}
          >
            <div
              className="absolute -right-10 -top-10 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
              style={{ background: f.accent }}
            />
            <div
              className="grid size-11 place-items-center rounded-xl border border-border"
              style={{ background: `${f.accent}1a`, color: f.accent }}
            >
              <f.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>

            {f.featured && (
              <div className="mt-6 hidden rounded-2xl border border-border bg-background/60 p-4 md:block">
                <div className="flex items-center gap-3">
                  <span className="flex items-end gap-0.5">
                    {[10, 18, 8, 22, 14].map((h, idx) => (
                      <span
                        key={idx}
                        className="w-1 rounded-full bg-[#06b6d4]"
                        style={{ height: h }}
                      />
                    ))}
                  </span>
                  <p className="text-xs text-muted-foreground">Listening…</p>
                  <span className="ml-auto rounded-full bg-[#10b981]/15 px-2 py-0.5 text-xs font-medium text-[#10b981]">
                    Live
                  </span>
                </div>
                <p className="mt-3 text-sm">
                  &ldquo;Walk me through a time you led a project under a tight deadline.&rdquo;
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
