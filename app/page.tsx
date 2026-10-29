import { Bento } from "@/components/bento";
import { CareNote } from "@/components/care-note";
import { DownloadBand } from "@/components/download-band";
import { FeatureTiles } from "@/components/feature-tiles";
import { Hero } from "@/components/hero";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.product,
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  description: site.description,
};

export default function Home() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <Hero />
      <FeatureTiles />
      <Bento />
      <DownloadBand />
      <CareNote />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
