import type { ReactNode } from "react";

const tiles = [
  { label: "Log", hint: "Fluids and symptoms", icon: LogIcon },
  { label: "Care", hint: "How the day feels", icon: CareIcon },
  { label: "Clinic", hint: "The next visit", icon: ClinicIcon },
  { label: "Weekly", hint: "The record so far", icon: WeeklyIcon },
  { label: "Meds", hint: "Taken or skipped", icon: MedsIcon },
  { label: "Prep", hint: "Walk in ready", icon: PrepIcon },
] as const;

export function FeatureTiles() {
  return (
    <section id="what" className="scene w-full" aria-labelledby="what-title">
      <h2 id="what-title" className="font-display w-full max-w-[22rem] text-[1.35rem] leading-tight font-semibold tracking-[-0.03em] text-balance sm:text-[1.6rem]">
        The day, in one place. Intake, doses, and the <span className="text-accent">visit</span> ahead.
      </h2>
      <ul className="mt-8 grid w-full max-w-[660px] grid-cols-2 gap-2.5 min-[400px]:gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-[18px]">
        {tiles.map((tile) => (
          <li
            key={tile.label}
            className="hover-tile flex min-h-[132px] min-w-0 flex-col items-center justify-center rounded-2xl bg-white px-2 py-4 min-[400px]:rounded-3xl min-[400px]:px-3 sm:aspect-square sm:min-h-0 sm:rounded-[28px] sm:px-4"
          >
            <span className="tile-mark grid size-11 place-items-center rounded-[14px] bg-[#f2f4f8] sm:size-14 sm:rounded-[18px]">
              <tile.icon />
            </span>
            <span className="font-display mt-3 text-base font-extrabold sm:mt-4 sm:text-lg">{tile.label}</span>
            <span className="mt-1 text-xs leading-snug text-balance text-muted sm:text-sm">{tile.hint}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 32 32" className="size-6 sm:size-7" aria-hidden="true">
      {children}
    </svg>
  );
}

function LogIcon() {
  return (
    <Icon>
      <path fill="#2F7BFF" d="M8.4 8.6c0-1.3 1.05-2.4 2.35-2.4H14v19.6h-3.25c-1.3 0-2.35-1.05-2.35-2.35V8.6z" />
      <path fill="#2F7BFF" d="M18 6.2h3.25c1.3 0 2.35 1.05 2.35 2.4v14.85c0 1.3-1.05 2.35-2.35 2.35H18V6.2z" />
    </Icon>
  );
}

function CareIcon() {
  return (
    <Icon>
      <path
        fill="#FF3B5C"
        d="M16 26.2c-.35 0-8.7-5.05-11.15-9.55C3.15 13.4 4.35 8.7 8.55 8.15c2.35-.3 4.35.9 5.45 2.7 1.1-1.8 3.1-3 5.45-2.7 4.2.55 5.4 5.25 3.7 8.5C24.7 21.15 16.35 26.2 16 26.2z"
      />
    </Icon>
  );
}

function ClinicIcon() {
  return (
    <Icon>
      <path
        fill="#1EAE62"
        d="M12.2 11.2V9.6A2.1 2.1 0 0 1 14.3 7.5h3.4a2.1 2.1 0 0 1 2.1 2.1v1.6h2.15c1.35 0 2.45 1.1 2.45 2.45v8.15A2.7 2.7 0 0 1 21.7 24.5H10.3a2.7 2.7 0 0 1-2.7-2.7v-8.15c0-1.35 1.1-2.45 2.45-2.45h2.15zm2.2-1.6v1.6h3.2V9.6c0-.28-.22-.5-.5-.5h-2.2c-.28 0-.5.22-.5.5z"
      />
    </Icon>
  );
}

function WeeklyIcon() {
  return (
    <Icon>
      <rect x="5.6" y="16.2" width="3.6" height="8.2" rx="1.5" fill="#6C5CFF" />
      <rect x="11.2" y="11.2" width="3.6" height="13.2" rx="1.5" fill="#6C5CFF" />
      <rect x="16.8" y="6.4" width="3.6" height="18" rx="1.5" fill="#6C5CFF" />
      <rect x="22.4" y="13.2" width="3.6" height="11.2" rx="1.5" fill="#6C5CFF" />
    </Icon>
  );
}

function MedsIcon() {
  return (
    <Icon>
      <circle cx="16" cy="16" r="11" fill="#1E4ED8" />
      <g transform="rotate(-42 16 16)" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round">
        <rect x="13.15" y="8.3" width="5.7" height="15.4" rx="2.85" />
        <path d="M13.15 16h5.7" />
      </g>
    </Icon>
  );
}

function PrepIcon() {
  return (
    <Icon>
      <path fill="#3294FF" d="M16 4.2 17.7 12 25.6 13.7 17.7 15.4 16 23.2 14.3 15.4 6.4 13.7 14.3 12z" />
      <path fill="#3294FF" d="m24.2 6.1.7 2.5 2.5.7-2.5.7-.7 2.5-.7-2.5-2.5-.7 2.5-.7z" />
    </Icon>
  );
}
