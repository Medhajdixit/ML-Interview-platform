import { DashboardShell } from "@/components/dashboard/shell"
import { PageHeader } from "@/components/dashboard/page-header"
import { ResumeAnalyzer } from "@/components/resume/resume-analyzer"

export default function ResumePage() {
  return (
    <DashboardShell>
      <PageHeader
        title="Resume Analyzer"
        description="Upload your resume to extract skills, analyze experience, and get an ATS score."
      />
      <ResumeAnalyzer />
    </DashboardShell>
  )
}
