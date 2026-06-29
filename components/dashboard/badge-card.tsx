export function BadgeCard({
  icon,
  name,
  description,
  earned,
}: {
  icon: string
  name: string
  description: string
  earned: boolean
}) {
  return (
    <div
      className={`rounded-2xl border p-4 transition-all hover:scale-105 ${
        earned
          ? "border-yellow-500 bg-yellow-500/10"
          : "border-border bg-card/50 opacity-60"
      }`}
    >
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-3 font-semibold">
        {name}
      </h3>

      <p className="mt-1 text-sm text-muted-foreground">
        {description}
      </p>

      <div className="mt-3">
        {earned ? (
          <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-500">
            Earned
          </span>
        ) : (
          <span className="rounded-full bg-muted px-3 py-1 text-xs">
            Locked
          </span>
        )}
      </div>
    </div>
  )
}