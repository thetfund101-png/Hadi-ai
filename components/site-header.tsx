import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-10 sm:py-5 lg:px-[4.4rem]">
        <Link href="/" className="min-w-0 rounded-lg transition-opacity hover:opacity-70">
          <Logo />
        </Link>
        <Link
          href="/#download"
          className="lift-button inline-flex h-11 shrink-0 items-center rounded-full bg-accent px-3.5 text-sm font-semibold text-white sm:px-5 sm:text-[15px]"
        >
          <span className="sm:hidden">Get the app</span>
          <span className="hidden sm:inline">Download the app</span>
        </Link>
      </div>
    </header>
  );
}
