import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "The agreement for using the HADI AI app and this site.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms — HADI",
    description: "The agreement for using the HADI AI app and this site.",
  },
};

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms"
      lede="HADI AI helps you keep a personal care record on iPhone and Android. It does not replace your clinic."
    >
      <section>
        <h2>The app</h2>
        <p>
          You can log fluids, medications, symptoms, and visits, and open a weekly snapshot before clinic. Care decisions stay with you and your care team. Hadi does not diagnose or prescribe.
        </p>
      </section>
      <section>
        <h2>Where to get it</h2>
        <p>
          The app is distributed on the App Store and Google Play. Those stores handle the download, and their terms apply to the purchase or install.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          <a className="underline" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </p>
      </section>
    </LegalDocument>
  );
}
