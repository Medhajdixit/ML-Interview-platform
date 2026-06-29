"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Upload,
  FileText,
  Sparkles,
  CheckCircle2,
  Briefcase,
  FolderGit2,
  Loader2,
} from "lucide-react"
import { ScoreRing } from "@/components/dashboard/score-ring"
import { resumeAnalysis } from "@/lib/mock-data"

type Phase = "idle" | "analyzing" | "done"

export function ResumeAnalyzer() {
  const [phase, setPhase] = useState<Phase>("idle")
  const [dragging, setDragging] = useState(false)
  const [fileName, setFileName] = useState("")

  function startAnalysis(name: string) {
    setFileName(name || "resume.pdf")
    setPhase("analyzing")
    setTimeout(() => setPhase("done"), 2600)
  }

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {phase === "idle" && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            onDragOver={(e) => {
              e.preventDefault()
              setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragging(false)
              startAnalysis(e.dataTransfer.files?.[0]?.name ?? "")
            }}
            className={`glass flex flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-20 text-center transition-colors ${
              dragging ? "border-primary bg-primary/5" : "border-border"
            }`}
          >
            <div className="mb-5 grid size-16 place-items-center rounded-2xl bg-primary/15 text-primary">
              <Upload className="size-7" />
            </div>
            <h3 className="text-lg font-semibold">Drag and drop your resume</h3>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              Upload a PDF or DOCX file and our AI will extract your skills, experience, and ATS score instantly.
            </p>
            <label className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
              <FileText className="size-4" />
              Browse files
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => startAnalysis(e.target.files?.[0]?.name ?? "")}
              />
            </label>
          </motion.div>
        )}

        {phase === "analyzing" && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass flex flex-col items-center justify-center rounded-2xl px-6 py-20 text-center"
          >
            <div className="relative mb-6 grid size-16 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
              <Loader2 className="size-8 animate-spin text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Analyzing {fileName}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Extracting skills, scoring ATS compatibility, and identifying strengths...
            </p>
          </motion.div>
        )}

        {phase === "done" && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="glass flex flex-col items-center justify-center rounded-2xl p-6">
                <p className="mb-3 text-sm font-medium text-muted-foreground">ATS Score</p>
                <ScoreRing value={resumeAnalysis.atsScore} />
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Strong match. Optimized for applicant tracking systems.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 lg:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  <h3 className="font-semibold">Extracted Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeAnalysis.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {resumeAnalysis.highlights.map((h) => (
                    <div key={h.label} className="rounded-xl border border-border bg-card/60 p-4">
                      <p className="text-2xl font-bold text-foreground">{h.value}</p>
                      <p className="text-xs text-muted-foreground">{h.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="glass rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Briefcase className="size-4 text-accent-cyan" />
                  <h3 className="font-semibold">Experience</h3>
                </div>
                <div className="space-y-4">
                  {resumeAnalysis.experience.map((e) => (
                    <div key={e.company} className="border-l-2 border-primary/40 pl-4">
                      <p className="font-medium">{e.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {e.company} · {e.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-2">
                  <FolderGit2 className="size-4 text-accent-pink" />
                  <h3 className="font-semibold">Projects</h3>
                </div>
                <div className="space-y-4">
                  {resumeAnalysis.projects.map((p) => (
                    <div key={p.name} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-sm text-muted-foreground">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setPhase("idle")}
              className="text-sm font-medium text-primary hover:underline"
            >
              Analyze another resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
