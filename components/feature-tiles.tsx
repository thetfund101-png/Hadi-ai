const tiles = [
  { label: "Log", hint: "Fluids and symptoms", color: "#3294FF" },
  { label: "Care", hint: "How the day feels", color: "#5AABFF" },
  { label: "Clinic", hint: "The next visit", color: "#176ED6" },
  { label: "Weekly", hint: "The record so far", color: "#8EC4FF" },
  { label: "Meds", hint: "Taken or skipped", color: "#1F6FD0" },
  { label: "Prep", hint: "Walk in ready", color: "#003D90" },
] as const;

export function FeatureTiles() {
  return (
    <section id="what" className="scene" aria-labelledby="what-title">
      <h2 id="what-title" className="font-display max-w-[22rem] text-[1.35rem] leading-tight font-semibold tracking-[-0.03em] text-balance sm:text-[1.6rem]">
        The day, in one place. Intake, doses, and the <span className="text-accent">visit</span> ahead.
      </h2>
      <ul className="mt-8 grid w-full max-w-[660px] grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-[18px]">
        {tiles.map((tile) => (
          <li
            key={tile.label}
            className="hover-tile flex min-h-[148px] flex-col items-center justify-center rounded-3xl bg-white px-3 py-4 sm:aspect-square sm:min-h-0 sm:rounded-[28px] sm:px-4"
          >
            <span className="tile-mark size-11 rounded-xl sm:size-14 sm:rounded-2xl" style={{ background: tile.color }} />
            <span className="font-display mt-3 text-base font-extrabold sm:mt-4 sm:text-lg">{tile.label}</span>
            <span className="mt-1 text-xs leading-snug text-balance text-muted sm:text-sm">{tile.hint}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
