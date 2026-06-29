"use client"

import { useEffect, useRef, useState } from "react"

export function InterviewRoomV2() {
  const recognitionRef = useRef<any>(null)

  const [role, setRole] = useState("Frontend Developer")
  const [question, setQuestion] = useState(
    "Tell me about yourself."
  )

  const [answer, setAnswer] = useState("")
  const [feedback, setFeedback] = useState("")
  const [score, setScore] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [started, setStarted] = useState(false)

  {score && (
  <div className="rounded-xl border p-4">
    <h3 className="font-semibold">
      Interview Score
    </h3>

    <p className="text-3xl font-bold">
      {score}/100
    </p>
  </div>
)}

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition

    if (!SpeechRecognition) return

    const recognition = new SpeechRecognition()

    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = "en-US"

    let silenceTimer: NodeJS.Timeout
    recognition.onresult = (event: any) => {
  let transcript = ""

  for (let i = 0; i < event.results.length; i++) {
    transcript += event.results[i][0].transcript + " "
  }

  setAnswer(transcript)

  clearTimeout(silenceTimer)

  silenceTimer = setTimeout(() => {
    recognition.stop()
    submitAnswer()
  }, 3000)
}
    recognitionRef.current = recognition
  }, [])

const speakQuestion = (text: string) => {
  speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)

  utterance.onend = () => {
    try {
      recognitionRef.current?.start()
    } catch {}
  }

  speechSynthesis.speak(utterance)
}
  const startInterview = () => {
  setStarted(true)

  const firstQuestion =
    `Welcome to the ${role} interview. Tell me about yourself.`

  setQuestion(firstQuestion)

  speakQuestion(firstQuestion)
}

  useEffect(() => {
    speakQuestion(question)
  }, [])

  const startListening = () => {
    try {
      recognitionRef.current?.start()
    } catch (err) {
      console.log(err)
    }
  }

  const stopListening = () => {
    try {
      recognitionRef.current?.stop()
    } catch (err) {
      console.log(err)
    }
  }

  const submitAnswer = async () => {
    setLoading(true)

    try {
      const response = await fetch("/api/interview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          answer,
        }),
      })

      const data = await response.json()

      const cleaned = data.feedback
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim()

const parsed = JSON.parse(cleaned)

setScore(parsed.score)

setFeedback(parsed.feedback)

setQuestion(parsed.nextQuestion)

speakQuestion(parsed.nextQuestion)

      setAnswer("")
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  return (
    <div className="mx-auto max-w-4xl p-8 space-y-6">
      <h1 className="text-3xl font-bold">
        AI Interview Room
      </h1>
    {/* Role Selection */}
    <div className="rounded-xl border p-6">
      <h2 className="font-semibold mb-3">
        Select Role
      </h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border rounded-lg p-3"
      >
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Full Stack Developer</option>
        <option>AI Engineer</option>
        <option>Data Scientist</option>
        <option>DevOps Engineer</option>
      </select>

      <button
        onClick={startInterview}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
      >
        Start Interview
      </button>
    </div>

      <div className="rounded-xl border p-6">
        <h2 className="font-semibold mb-2">
          Current Question
        </h2>

        <p>{question}</p>
      </div>

      <div className="rounded-xl border p-6">
        <h2 className="font-semibold mb-2">
          Your Answer
        </h2>
    <div className="rounded-xl border p-6">
  <h2 className="font-semibold mb-2">
    Your Answer
  </h2>

  <div className="flex items-center gap-2 mb-4">
    <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />

    <span className="text-sm">
      Listening...
    </span>
  </div>

  <textarea
    value={answer}
    onChange={(e) => setAnswer(e.target.value)}
    className="w-full min-h-[180px] border rounded-lg p-4"
  />
</div>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full min-h-[180px] border rounded-lg p-4"
        />
      </div>

      

      {feedback && (
        <div className="rounded-xl border p-6">
          <h2 className="font-semibold mb-2">
            AI Feedback
          </h2>

          <pre className="whitespace-pre-wrap">
            {feedback}
          </pre>
        </div>
      )}
    </div>
  )
}