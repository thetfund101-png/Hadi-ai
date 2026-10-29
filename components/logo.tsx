export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="8" fill="#003D90" />
        <path fill="#F7F8FA" d="M8 7.2h2.5v4.7h5V7.2H18v13.6h-2.5v-6.2h-5v6.2H8V7.2Z" />
        <circle cx="20.2" cy="8.6" r="2.1" fill="#3294FF" />
      </svg>
      <span className="font-display text-[1.35rem] leading-none font-black tracking-[-0.04em] text-ink sm:text-[1.7rem]">
        HADI
      </span>
    </span>
  );
}
