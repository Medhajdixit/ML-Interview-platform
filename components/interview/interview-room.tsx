"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Captions,
  ChevronRight,
  User,
} from "lucide-react"
import { AIAvatar } from "@/components/visuals/ai-avatar"
import { Waveform } from "@/components/visuals/waveform"
import { Logo } from "@/components/brand/logo"
import { interviewQuestions } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { div } from "motion/react-m"

type Phase = "speaking" | "listening" | "processing"

const phaseLabel: Record<Phase, string> = {
  speaking: "AI Interviewer is responding…",
  listening: "Listening…",
  processing: "Analyzing your answer…",
}

const transcriptSeed = [
  { who: "ai", text: "Hi Alex, welcome. Let's begin — tell me about yourself and your background." },
  { who: "user", text: "Sure! I'm a frontend engineer with five years of experience building React apps…" },
]

export function InterviewRoom() {
  const [phase, setPhase] = useState<Phase>("speaking")
  const [qIndex, setQIndex] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)
  const [showCaptions, setShowCaptions] = useState(true)
  const [confidence, setConfidence] = useState(88)
  const [transcript, setTranscript] = useState(transcriptSeed)
  const transcriptRef = useRef<HTMLDivElement>(null)
  const [isListening, setIsListening] = useState(false)

  const [currentQuestion, setCurrentQuestion] = useState("")
  const [role, setRole] = useState("Frontend Developer")
 

  // timer
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  // cycle phases
  useEffect(() => {
    const sequence: Record<Phase, { next: Phase; ms: number }> = {
      speaking: { next: "listening", ms: 3500 },
      listening: { next: "processing", ms: 5000 },
      processing: { next: "speaking", ms: 2500 },
    }
    const { next, ms } = sequence[phase]
     
}


  , [phase])

  // fluctuate confidence while listening
  useEffect(() => {
    if (phase !== "listening") return
    const t = setInterval(() => setConfidence((c) => Math.min(98, Math.max(70, c + (Math.random() * 8 - 4)))), 900)
    return () => clearInterval(t)
  }, [phase])

  useEffect(() => {
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" })
  }, [transcript])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  useEffect(() => {
  if (phase !== "speaking") return

  const question = interviewQuestions[qIndex]

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(question)

  utterance.rate = 1
  utterance.pitch = 1
  utterance.volume = 1

  const voices = window.speechSynthesis.getVoices()

  const englishVoice =
    voices.find((v) => v.lang.includes("en-IN")) ||
    voices.find((v) => v.lang.includes("en-US")) ||
    voices[0]

  if (englishVoice) {
    utterance.voice = englishVoice
  }

  window.speechSynthesis.speak(utterance)
}, [qIndex, phase])

  const [userAnswer, setUserAnswer] = useState("")
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition

  if (!SpeechRecognition) return

  const recognition = new SpeechRecognition()

  recognition.lang = "en-IN"
  recognition.continuous = true
  recognition.interimResults = false
  recognition.maxAlternatives = 1

  recognition.continuous = true
  recognition.interimResults = true

  recognition.onresult = (event) => {
  let finalTranscript = ""

      for (let i = 0; i < event.results.length; i++) {
    finalTranscript += event.results[i][0].transcript + " "
      }

      setUserAnswer(finalTranscript)
      }


  recognitionRef.current = recognition
}, [])

  useEffect(() => {
  const recognition = recognitionRef.current

  if (!recognition) return

  if (phase === "listening") {
    try {
      recognition.start()
    } catch (e) {
      console.log("Already listening")
    }
  } else {
    recognition.stop()
  }
}, [phase])

useEffect(() => {
  if (!recognitionRef.current) return

  recognitionRef.current.onstart = () => {
  console.log("Mic Active")
}
  recognitionRef.current.onerror = (event) => {
  console.log("Speech Error:", event.error)
}

  if (phase === "listening") {
    try {
      recognitionRef.current.start()
    } catch (err) {
      console.log("Recognition already running")
    }
  } else {
    recognitionRef.current.stop()
  }
}, [phase])

const [score, setScore] = useState(0)
const [feedback, setFeedback] = useState("")






  return (
    <div className="flex min-h-dvh flex-col bg-background">
      {/* top bar */}
      <header className="flex items-center justify-between border-b border-border px-4 py-3 md:px-6">
        <Link href="/dashboard" aria-label="Back to dashboard">
          <Logo />
        </Link>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm">
            <span className="size-2 animate-pulse rounded-full bg-[#ef4444]" />
            <span className="font-medium tabular-nums">
              {mm}:{ss}
            </span>
          </span>
          <span className="hidden rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground sm:inline">
            Senior Frontend Engineer
          </span>
        </div>
      </header>

      <div className="rounded-xl border border-border p-4 mt-4">
      <h3 className="font-semibold">AI Evaluation</h3>

       <p className="mt-2">Score: {score}/100</p>

      <p className="mt-2 text-sm text-muted-foreground">
      {feedback}
      </p>
        </div>

      <div className="rounded-xl border border-border p-4">
        <h3 className="font-semibold">Your Answer</h3>
        <p className="mt-2 text-sm">
          {userAnswer || "Start speaking..."}
        </p>
      </div>

      <div className="grid flex-1 gap-4 p-4 md:p-6 lg:grid-cols-[1fr_1fr]">
        {/* Candidate webcam */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40">
          <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-background/70 px-3 py-1.5 text-xs backdrop-blur">
            <User className="size-3.5" />
            You
          </div>
          {camOn ? (
            <div className="flex h-full min-h-[280px] items-center justify-center bg-gradient-to-br from-[#1f2937] to-[#0b1120]">
              <div className="text-center">
                <div className="mx-auto grid size-24 place-items-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-3xl font-semibold text-white">
                  AM
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Camera preview</p>
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-[280px] items-center justify-center">
              <div className="text-center text-muted-foreground">
                <VideoOff className="mx-auto size-8" />
                <p className="mt-2 text-sm">Camera is off</p>
              </div>
            </div>
          )}
          {/* confidence indicator */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-3 rounded-2xl bg-background/70 px-4 py-2.5 backdrop-blur">
            <span className="text-xs text-muted-foreground">Confidence</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#f59e0b] via-[#06b6d4] to-[#10b981]"
                animate={{ width: `${confidence}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <span className="text-xs font-semibold text-[#10b981]">{Math.round(confidence)}%</span>
          </div>
        </div>

        {/* AI interviewer */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#111827] to-[#0b1120] p-6">
          <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-background/70 px-3 py-1.5 text-xs backdrop-blur">
            <span className="size-2 rounded-full bg-[#06b6d4]" />
            AI Interviewer
          </div>
          <AIAvatar speaking={phase === "speaking"} size={240} />
          <div className="mt-6 flex flex-col items-center gap-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={phase}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium",
                  phase === "speaking" && "bg-[#7c3aed]/15 text-[#a78bfa]",
                  phase === "listening" && "bg-[#06b6d4]/15 text-[#22d3ee]",
                  phase === "processing" && "bg-[#f59e0b]/15 text-[#fbbf24]",
                )}
              >
                {phaseLabel[phase]}
              </motion.span>
            </AnimatePresence>
            <Waveform
              active={phase !== "processing"}
              color={phase === "speaking" ? "#a78bfa" : "#22d3ee"}
              className="h-8"
            />
          </div>
        </div>
      </div>

      {/* Current question */}
      <div className="px-4 md:px-6">
        <div className="rounded-2xl border border-border bg-card/50 p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-[#06b6d4]">
              Question {qIndex + 1} of {interviewQuestions.length}
            </p>
            <span className="text-xs text-muted-foreground">Behavioral · Mid round</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={qIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 text-pretty text-lg font-medium md:text-xl"
            >
              {interviewQuestions[qIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Live transcript */}
      {showCaptions && (
        <div className="px-4 pt-4 md:px-6">
          <div className="rounded-2xl border border-border bg-card/30 p-4">
            <p className="mb-2 text-xs font-medium text-muted-foreground">Live Transcript</p>
            <div ref={transcriptRef} className="max-h-28 space-y-2 overflow-y-auto pr-2 text-sm">
              {transcript.map((t, i) => (
                <p key={i} className={t.who === "ai" ? "text-muted-foreground" : "text-foreground"}>
                  <span className="font-medium">{t.who === "ai" ? "AI: " : "You: "}</span>
                  {t.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="sticky bottom-0 mt-4 border-t border-border bg-background/80 px-4 py-4 backdrop-blur md:px-6">
        <div className="mx-auto flex max-w-2xl items-center justify-center gap-3">
          <ControlButton
            active={micOn}
            onClick={() => setMicOn((v) => !v)}
            onIcon={<Mic className="size-5" />}
            offIcon={<MicOff className="size-5" />}
            label="Mic"
          />
          <ControlButton
            active={camOn}
            onClick={() => setCamOn((v) => !v)}
            onIcon={<Video className="size-5" />}
            offIcon={<VideoOff className="size-5" />}
            label="Camera"
          />
          <ControlButton
            active={showCaptions}
            onClick={() => setShowCaptions((v) => !v)}
            onIcon={<Captions className="size-5" />}
            offIcon={<Captions className="size-5" />}
            label="Captions"
          />
          <button
            onClick={() => {
            analyzeAnswer(userAnswer)

              if (qIndex < interviewQuestions.length - 1) {
              setQIndex((prev) => prev + 1)
            } 

          setUserAnswer("")
          }}
          className="hidden h-12 items-center gap-2 rounded-2xl border border-border bg-card/60 px-5 text-sm font-medium transition-colors hover:bg-card sm:flex"
        >
          Next
         <ChevronRight className="size-4" />
        </button>

            Next
            <ChevronRight className="size-4" />
          </button>
          
          <Link
            href="/dashboard"
            className="flex h-12 items-center gap-2 rounded-2xl bg-[#ef4444] px-5 text-sm font-semibold text-white shadow-[0_0_30px_-8px_#ef4444] transition-opacity hover:opacity-90"
          >
            <PhoneOff className="size-5" />
            End
          </Link>
        </div>
      </div>
    </div>
  )
}

function ControlButton({
  active,
  onClick,
  onIcon,
  offIcon,
  label,
}: {
  active: boolean
  onClick: () => void
  onIcon: React.ReactNode
  offIcon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        "grid size-12 place-items-center rounded-2xl border transition-colors",
        active
          ? "border-border bg-card/60 text-foreground hover:bg-card"
          : "border-[#ef4444]/40 bg-[#ef4444]/15 text-[#ef4444]",
      )}
    >
      {active ? onIcon : offIcon}
    </button>
  )
}
