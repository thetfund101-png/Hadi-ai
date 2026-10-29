import { Mascot } from "@/components/phones";
import { StoreBadges } from "@/components/store-badges";

export function DownloadBand() {
  return (
    <section id="download" className="scene" aria-labelledby="download-title">
      <Mascot className="h-28 w-28 sm:h-40 sm:w-40" />
      <h2 id="download-title" className="hero-title font-display mt-5 max-w-[12ch] sm:mt-6 sm:max-w-[14ch]">
        Get <span className="text-blue">HADI</span> on your phone.
      </h2>
      <p className="mt-4 max-w-md text-[15px] leading-snug text-pretty text-muted sm:mt-5 sm:text-[16.6px]">
        On the App Store for iPhone. On Google Play for Android.
      </p>
      <div className="mt-6">
        <StoreBadges />
      </div>
    </section>
  );
}
