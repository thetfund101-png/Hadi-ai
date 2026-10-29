import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Help with the HADI AI app on iPhone or Android.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support — HADI",
    description: "Help with the HADI AI app on iPhone or Android.",
  },
};

export default function SupportPage() {
  return (
    <LegalDocument title="Support" lede="Write with the phone you use, iPhone or Android, and what you expected the app to show.">
      <section>
        <h2>Email</h2>
        <p>
          <a className="underline" href={`mailto:${site.supportEmail}?subject=HADI%20support`}>
            {site.supportEmail}
          </a>
        </p>
      </section>
      <section>
        <h2>Useful first stops</h2>
        <p>
          The home page covers the stores, what you can log, and clinic prep. The app itself is on the App Store and Google Play.
        </p>
      </section>
    </LegalDocument>
  );
}
