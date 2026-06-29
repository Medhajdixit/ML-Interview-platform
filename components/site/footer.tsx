import Link from "next/link"
import { Logo } from "@/components/brand/logo"

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Interview Room", "Analytics", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Guides", "Help Center", "API", "Community"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI-powered platform that helps you master interviews and land your dream job
              faster.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} InterviewAI. All rights reserved.</p>
          <p>Built for candidates who refuse to wing it.</p>
        </div>
      </div>
    </footer>
  )
}
