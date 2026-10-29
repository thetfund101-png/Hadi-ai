import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="px-5 pt-4 pb-12 text-[15px] font-medium text-muted sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-extrabold text-ink">HADI</p>
          <p>Daily care, made simple.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/support" className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-accent hover:underline">
            Support
          </Link>
          <Link href="/privacy" className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-accent hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-accent hover:underline">
            Terms
          </Link>
        </nav>
        <p>© 2026 HADI. One day at a time.</p>
      </div>
    </footer>
  );
}
