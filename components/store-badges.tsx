import { stores } from "@/lib/site";

export function StoreBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
      <a href={stores.apple} target="_blank" rel="noopener noreferrer" className="store-pill">
        Download on the App Store
        <AppleMark />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <a href={stores.google} target="_blank" rel="noopener noreferrer" className="store-pill">
        Get it on Google Play
        <PlayMark />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}

function AppleMark() {
  return (
    <svg width="15" height="18" viewBox="0 0 18 22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.7 11.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c.7-1 1.2-2.1 1.5-3.2-3.9-1.5-3.8-5.4-3.8-5.2zM12.2 4.8c.6-.8 1.1-1.9.9-3-1 .1-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.4z"
      />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg width="14" height="16" viewBox="0 0 18 20" aria-hidden="true">
      <path fill="currentColor" d="M1 1.4c0-.7.7-1.1 1.3-.8l14.2 8.2c.6.4.6 1.3 0 1.6L2.3 18.6c-.6.3-1.3-.1-1.3-.8V1.4z" />
    </svg>
  );
}
