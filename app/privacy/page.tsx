import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How HADI AI handles the care logs you keep on your phone.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy — HADI",
    description: "How HADI AI handles the care logs you keep on your phone.",
  },
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy"
      lede="HADI AI is a phone app. The record you keep is there so you can see fluids, medications, and visits later."
    >
      <section>
        <h2>What you log</h2>
        <p>
          Fluids, medications, symptoms, dialysis days, and clinic visits stay in the app so the day and the weekly record are available on your iPhone or Android phone.
        </p>
      </section>
      <section>
        <h2>The stores</h2>
        <p>
          Downloads go through the App Store and Google Play. Those stores have their own account and payment privacy rules.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about this page:{" "}
          <a className="underline" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
          .
        </p>
      </section>
    </LegalDocument>
  );
}
