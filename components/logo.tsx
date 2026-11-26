import Image from "next/image";

export function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={`inline-flex items-center ${compact ? "gap-2" : "gap-2.5"} ${className}`}>
      <Image
        src="/logo.jpeg"
        alt=""
        width={1024}
        height={1024}
        priority={!compact}
        className={
          compact
            ? "size-7 rounded-md"
            : "size-8 rounded-[10px] shadow-[0_6px_14px_-8px_rgba(0,61,144,0.8)] sm:size-9"
        }
      />
      <span
        className={
          compact
            ? "font-display text-base leading-none font-extrabold tracking-[-0.04em] text-ink"
            : "font-display text-[1.35rem] leading-none font-black tracking-[-0.04em] text-ink sm:text-[1.7rem]"
        }
      >
        HADI
      </span>
    </span>
  );
}
