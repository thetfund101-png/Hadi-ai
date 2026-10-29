import { Mascot } from "@/components/phones";
import { StoreBadges } from "@/components/store-badges";

export function Hero() {
  return (
    <section className="scene hero-wash" aria-labelledby="hero-title">
      <p className="font-display text-base font-semibold text-accent">For iPhone and Android</p>
      <div className="mt-10 flex flex-1 flex-col items-center justify-center">
        <Mascot className="h-28 w-28 sm:h-[150px] sm:w-[150px]" />
        <h1 id="hero-title" className="hero-title font-display mt-5 max-w-[12ch] sm:mt-6 sm:max-w-[14ch]">
          Your daily care, made <span className="text-blue">simple.</span>
        </h1>
        <p className="mt-5 max-w-[30rem] px-1 text-[15px] leading-snug text-pretty text-muted sm:mt-6 sm:text-[16.6px]">
          A care companion for iPhone and Android. It keeps fluids, medications, dialysis days, and clinic prep in one place.
        </p>
        <div className="mt-6">
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
