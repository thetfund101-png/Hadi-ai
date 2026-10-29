import Link from "next/link";
import type { ReactNode } from "react";

export function LegalDocument({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <main id="content" tabIndex={-1} className="shell pt-28 pb-16 outline-none sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-3xl">
        <p>
          <Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-accent underline-offset-4 transition-colors hover:text-[#002e6c] hover:underline">
            ← Back to home
          </Link>
        </p>
        <h1 className="mt-3 text-4xl leading-[1.02] text-balance sm:text-6xl">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{lede}</p>
        <div className="mt-10 space-y-8 text-[17px] leading-relaxed [&_h2]:text-2xl [&_p]:text-muted">
          {children}
        </div>
        <p className="mt-12 text-sm text-muted">Updated October 26, 2026.</p>
      </div>
    </main>
  );
}
