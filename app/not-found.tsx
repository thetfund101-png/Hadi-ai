import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="content" tabIndex={-1} className="shell py-28 outline-none">
      <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">404</p>
      <h1 className="mt-3 max-w-xl text-5xl leading-[0.95] text-balance sm:text-6xl">
        This page isn&apos;t in the app.
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">The link is a dead end. The rest of Hadi is still here.</p>
      <div className="mt-8">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
      <p className="mt-6 text-sm text-muted">
        Or jump to <Link href="/#download" className="underline">the download</Link>.
      </p>
    </main>
  );
}
