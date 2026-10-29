import type { ReactNode } from "react";
import type { ScreenId } from "@/lib/site";

export function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[280px] rounded-[36px] bg-[#111] p-[7px] shadow-[0_22px_40px_-28px_rgba(0,0,0,0.55)]">
      <div className="overflow-hidden rounded-[30px] bg-[#f4f7fb] text-[#191921] antialiased">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center px-4 pt-2.5 pb-1 text-[12px] font-semibold">
          <span>12:31</span>
          <span className="h-[18px] w-[74px] rounded-full bg-[#111]" />
          <span className="text-right tracking-wide">5G</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function AppScreen({ id }: { id: ScreenId }) {
  if (id === "welcome") return <WelcomeScreen />;
  if (id === "home") return <HomeScreen />;
  if (id === "meds") return <MedsScreen />;
  return <ClinicScreen />;
}

function WelcomeScreen() {
  return (
    <div className="flex flex-col px-5 pt-4 pb-8">
      <div className="flex items-center justify-between text-[13px]">
        <span className="font-semibold">HADI AI</span>
        <span className="text-[#5c6772]">Skip</span>
      </div>
      <Mascot className="mx-auto mt-4 h-40 w-40" />
      <h3 className="mt-3 text-center text-[18px] leading-tight font-extrabold tracking-[-0.03em]">
        Meet Hadi, Your Daily Care Companion
      </h3>
      <p className="mt-2 text-center text-[13px] leading-snug text-[#5c6772]">
        I’m here to help you track fluids, monitor dialysis schedules, and manage daily symptoms with ease.
      </p>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="px-3.5 pt-3 pb-5">
      <p className="text-[16px] font-extrabold">Good morning, Hadi</p>
      <div className="mt-3 flex items-center justify-between rounded-2xl bg-[#003d90] px-3.5 py-3 text-white">
        <div>
          <p className="text-[14px] font-bold">Doctor Visit</p>
          <p className="text-[12px] text-white/80">10:00 · Dr Beyls, Health Hospital</p>
        </div>
        <span className="rounded-full bg-white/15 px-2.5 py-1 text-[12px] font-semibold">Visit</span>
      </div>
      <p className="mt-4 text-[13px] font-semibold">Quick Actions</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Tile label="Log" color="#3294FF" />
        <Tile label="Care" color="#F0729A" />
        <Tile label="Clinic" color="#3CCB8A" />
        <Tile label="Weekly" color="#8B7CFF" />
      </div>
      <div className="mt-2.5 rounded-2xl bg-white px-3.5 py-2.5">
        <p className="text-[12px] text-[#5c6772]">Up next</p>
        <p className="text-[14px] font-bold">8:00 AM · Magnesium</p>
      </div>
      <div className="mt-2 rounded-2xl bg-white px-3.5 py-2.5">
        <div className="flex items-center justify-between text-[13px]">
          <span className="font-semibold">Fluid Intake</span>
          <span className="text-[#5c6772]">12 / 34 oz</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e8f2ff]">
          <div className="h-full w-1/3 rounded-full bg-[#3294ff]" />
        </div>
      </div>
    </div>
  );
}

function MedsScreen() {
  const meds = [
    { name: "Carvedilol", dose: "Tablet", color: "#3294FF" },
    { name: "Magnesium", dose: "Tablet", color: "#E2556A" },
    { name: "Propranolol", dose: "Tablet · 20mg", color: "#F08A2A" },
  ];
  return (
    <div className="px-3.5 pt-2 pb-5">
      <p className="text-center text-[13px] font-bold">Monday, Sep 28</p>
      <p className="mt-3 text-center text-[18px] leading-tight font-extrabold">8:00 AM Medications</p>
      <p className="text-center text-[12px] text-[#5c6772]">3 medications</p>
      <div className="mx-auto mt-3 w-fit rounded-full border border-[#e3e8f0] bg-white px-3.5 py-1.5 text-[12px] font-semibold text-[#003d90]">
        Log All as Taken
      </div>
      <ul className="mt-3 space-y-2">
        {meds.map((med) => (
          <li key={med.name} className="rounded-2xl bg-white px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <span className="size-8 shrink-0 rounded-lg" style={{ background: med.color }} />
              <span>
                <span className="block text-[14px] font-bold">{med.name}</span>
                <span className="block text-[12px] text-[#5c6772]">{med.dose}</span>
              </span>
            </div>
            <div className="mt-2 flex gap-2">
              <span className="flex-1 rounded-lg bg-[#eef3f8] py-1.5 text-center text-[12px] font-semibold text-[#5c6772]">
                Skipped
              </span>
              <span className="flex-1 rounded-lg bg-[#003d90] py-1.5 text-center text-[12px] font-semibold text-white">
                Taken
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClinicScreen() {
  return (
    <div className="flex flex-col px-3.5 pt-3 pb-5">
      <p className="text-[16px] font-extrabold">Good morning, Hadi</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <Tile label="Clinic" color="#3CCB8A" />
        <Tile label="Weekly" color="#8B7CFF" />
      </div>
      <div className="mt-2.5 rounded-2xl bg-white px-3.5 py-2.5">
        <p className="text-[12px] text-[#5c6772]">8:00 AM</p>
        <p className="text-[14px] font-bold">Up next · Magnesium</p>
      </div>
      <div className="mt-2 rounded-2xl bg-white px-3.5 py-2.5">
        <div className="flex justify-between text-[13px] font-semibold">
          <span>Fluid Intake</span>
          <span className="text-[#5c6772]">0 of target</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-[#e8f2ff]" />
      </div>
      <div className="mt-3 rounded-2xl bg-white px-3.5 py-3.5">
        <p className="text-[11px] font-semibold tracking-wide text-[#003d90] uppercase">Hadi AI</p>
        <p className="mt-1 text-[13px] leading-snug text-[#5c6772]">
          Bring a snapshot of your logs to your next doctor or dietitian visit.
        </p>
        <div className="mt-3 rounded-xl bg-[#003d90] py-2.5 text-center text-[13px] font-semibold text-white">
          Open Clinic Prep
        </div>
      </div>
    </div>
  );
}

function Tile({ label, color }: { label: string; color: string }) {
  return (
    <div className="rounded-2xl bg-white px-3 py-2.5">
      <span className="block size-6 rounded-md" style={{ background: color }} />
      <span className="mt-1.5 block text-[13px] font-semibold">{label}</span>
    </div>
  );
}

export function Mascot({ className = "mx-auto h-36 w-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 150" className={className} aria-hidden="true" shapeRendering="geometricPrecision">
      <ellipse cx="80" cy="86" rx="50" ry="54" fill="#3294FF" />
      <ellipse cx="80" cy="96" rx="34" ry="28" fill="#5AABFF" />
      <circle cx="64" cy="80" r="5.5" fill="#191921" />
      <circle cx="96" cy="80" r="5.5" fill="#191921" />
      <circle cx="66" cy="78" r="1.6" fill="#fff" />
      <circle cx="98" cy="78" r="1.6" fill="#fff" />
      <path d="M68 98c6 8 18 8 24 0" fill="none" stroke="#191921" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M118 52c8-14 22-12 24 0 2 10-8 16-16 13" fill="none" stroke="#176ED6" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}
