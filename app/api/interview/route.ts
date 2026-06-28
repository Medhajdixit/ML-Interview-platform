import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
)

export async function POST(req: Request) {
  try {
    const { question, answer } = await req.json()

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    })

   const prompt = `
You are an expert technical interviewer.

Question:
${question}

Candidate Answer:
${answer}

Return ONLY valid JSON.

{
  "score": 0,
  "communication": 0,
  "technical": 0,
  "feedback": "",
  "nextQuestion": ""
}
`

    const result = await model.generateContent(prompt)

    return NextResponse.json({
      success: true,
      feedback: result.response.text()
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        error: "Evaluation failed"
      },
      { status: 500 }
    )
  }
}