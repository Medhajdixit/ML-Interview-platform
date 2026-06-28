import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/landing/hero"
import { Stats } from "@/components/landing/stats"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Testimonials } from "@/components/landing/testimonials"
import { Pricing } from "@/components/landing/pricing"
import { CTA } from "@/components/landing/cta"

export default function HomePage() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
