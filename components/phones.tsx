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
