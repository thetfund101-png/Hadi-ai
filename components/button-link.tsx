import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  solid:
    "lift-button inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-white",
  ghost:
    "inline-flex h-12 items-center justify-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink transition-colors hover:border-ink",
  paper:
    "inline-flex h-12 items-center justify-center rounded-full bg-paper px-5 text-sm font-semibold text-ink transition-colors hover:bg-white",
} as const;

export function ButtonLink({
  variant = "solid",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof variants }) {
  return <Link className={`${variants[variant]} ${className}`} {...props} />;
}
