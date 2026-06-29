// Centralized mock data for the InterviewAI demo experience.

export const currentUser = {
  name: "Alex Morgan",
  email: "alex.morgan@example.com",
  role: "Frontend Engineer",
  initials: "AM",
  level: 7,
  xp: 3240,
  xpToNext: 4000,
  streak: 12,
}

export const performanceTrend = [
  { month: "Jan", score: 58, confidence: 52, communication: 60 },
  { month: "Feb", score: 64, confidence: 60, communication: 66 },
  { month: "Mar", score: 69, confidence: 65, communication: 70 },
  { month: "Apr", score: 73, confidence: 71, communication: 74 },
  { month: "May", score: 80, confidence: 78, communication: 81 },
  { month: "Jun", score: 86, confidence: 85, communication: 88 },
]

export const skillRadar = [
  { skill: "Technical", you: 82, target: 90 },
  { skill: "Communication", you: 88, target: 85 },
  { skill: "Confidence", you: 85, target: 88 },
  { skill: "Problem Solving", you: 78, target: 90 },
  { skill: "Body Language", you: 74, target: 80 },
  { skill: "Clarity", you: 80, target: 85 },
]

export const recentInterviews = [
  {
    id: "int-1024",
    role: "Senior Frontend Engineer",
    company: "Vertex Labs",
    type: "Video",
    date: "Jun 18, 2026",
    score: 88,
    duration: "32 min",
    status: "Completed",
  },
  {
    id: "int-1023",
    role: "React Developer",
    company: "Northwind",
    type: "Voice",
    date: "Jun 15, 2026",
    score: 81,
    duration: "26 min",
    status: "Completed",
  },
  {
    id: "int-1022",
    role: "Full Stack Engineer",
    company: "Quanta",
    type: "Video",
    date: "Jun 12, 2026",
    score: 76,
    duration: "29 min",
    status: "Completed",
  },
  {
    id: "int-1021",
    role: "Frontend Engineer",
    company: "Lumen AI",
    type: "Voice",
    date: "Jun 8, 2026",
    score: 72,
    duration: "24 min",
    status: "Completed",
  },
]

export const scoreBreakdown = [
  { label: "Technical Skills", value: 82, color: "#7c3aed" },
  { label: "Communication", value: 88, color: "#2563eb" },
  { label: "Confidence", value: 85, color: "#06b6d4" },
  { label: "Problem Solving", value: 78, color: "#ec4899" },
  { label: "Body Language", value: 74, color: "#10b981" },
]

export const videoMetrics = [
  { label: "Eye Contact", value: 86 },
  { label: "Confidence", value: 82 },
  { label: "Attention Level", value: 90 },
  { label: "Engagement", value: 78 },
  { label: "Facial Expression", value: 84 },
]

export const extractedSkills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Tailwind CSS",
  "Jest",
  "REST APIs",
  "Redux",
  "CI/CD",
]

export const resumeAnalysis = {
  atsScore: 87,
  skills: extractedSkills,
  highlights: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects", value: "12" },
    { label: "Keywords Matched", value: "34" },
  ],
  experience: [
    { role: "Senior Frontend Engineer", company: "Vertex Labs", period: "2023 – Present" },
    { role: "Frontend Engineer", company: "Northwind", period: "2021 – 2023" },
    { role: "Junior Developer", company: "Lumen AI", period: "2019 – 2021" },
  ],
  projects: [
    { name: "Design System Platform", description: "Built a 60+ component library used across 8 teams." },
    { name: "Realtime Analytics Dashboard", description: "Streaming data viz handling 10k events/sec." },
    { name: "AI Resume Parser", description: "NLP pipeline extracting structured candidate data." },
  ],
}

export const missingSkills = [
  { skill: "System Design", priority: "High" },
  { skill: "Kubernetes", priority: "Medium" },
  { skill: "Go", priority: "Low" },
]

export const strengthSkills = ["React", "TypeScript", "UI Engineering", "Communication"]

export const roadmap = [
  {
    month: "Month 1",
    title: "Strengthen Fundamentals",
    skills: ["System Design Basics", "Data Structures", "Behavioral Stories"],
    time: "8–10 hrs / week",
    priority: "High",
    resources: ["Grokking System Design", "NeetCode 150"],
  },
  {
    month: "Month 2",
    title: "Specialize & Build",
    skills: ["Scalability Patterns", "Kubernetes", "Mock Interviews"],
    time: "10–12 hrs / week",
    priority: "Medium",
    resources: ["Kubernetes Up & Running", "InterviewAI Mock Series"],
  },
  {
    month: "Month 3",
    title: "Interview Mastery",
    skills: ["Advanced System Design", "Negotiation", "Company Research"],
    time: "6–8 hrs / week",
    priority: "High",
    resources: ["Designing Data-Intensive Apps", "InterviewAI Pro Track"],
  },
]

export const achievements = [
  { name: "First Interview", desc: "Completed your first mock interview", unlocked: true, icon: "trophy" },
  { name: "Communication Expert", desc: "Scored 85+ on communication", unlocked: true, icon: "mic" },
  { name: "Technical Master", desc: "Scored 90+ on technical skills", unlocked: false, icon: "code" },
  { name: "90+ Score Club", desc: "Reach an overall score of 90", unlocked: false, icon: "star" },
  { name: "Streak Keeper", desc: "Practice 7 days in a row", unlocked: true, icon: "flame" },
  { name: "Roadmap Finisher", desc: "Complete a learning roadmap", unlocked: false, icon: "map" },
]

export const leaderboard = [
  { rank: 1, name: "Jordan Lee", xp: 8420, you: false },
  { rank: 2, name: "Priya Sharma", xp: 7180, you: false },
  { rank: 3, name: "Alex Morgan", xp: 3240, you: true },
  { rank: 4, name: "Marcus Chen", xp: 2980, you: false },
  { rank: 5, name: "Sofia Reyes", xp: 2510, you: false },
]

export const interviewQuestions = [
  "Tell me about yourself and your background.",
  "Walk me through a challenging project you led under a tight deadline.",
  "How do you approach optimizing the performance of a React application?",
  "Describe a time you disagreed with a teammate. How did you resolve it?",
  "Where do you see your career heading in the next three years?",
]
