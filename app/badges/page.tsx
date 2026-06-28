import { badges } from "@/lib/badges"
import { BadgeCard } from "@/components/dashboard/badge-card"

export default function BadgesPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold">
        Achievements & Badges
      </h1>

      <p className="mt-2 text-muted-foreground">
        Unlock badges as you improve your interview skills.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {badges.map((badge) => (
          <BadgeCard
            key={badge.id}
            icon={badge.icon}
            name={badge.name}
            description={badge.description}
            earned={badge.earned}
          />
        ))}
      </div>
    </div>
  )
}