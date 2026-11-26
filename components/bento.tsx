import Image from "next/image";

const shots = [
  {
    src: "/screens/welcome.jpeg",
    alt: "Welcome screen: Meet Hadi, your daily care companion.",
  },
  {
    src: "/screens/home.jpeg",
    alt: "Home screen showing fluid intake against the daily goal and the next doctor visit.",
  },
  {
    src: "/screens/meds.jpeg",
    alt: "Medication screen for marking the 8:00 AM doses taken or skipped.",
  },
  {
    src: "/screens/care-plan.jpeg",
    alt: "Care plan with tomorrow’s dialysis session, the care team, and medications.",
  },
  {
    src: "/screens/clinic.jpeg",
    alt: "Clinic preparation card with a snapshot to bring to the next visit.",
  },
  {
    src: "/screens/visit-report.jpeg",
    alt: "Clinic visit report with directions, a generated PDF, and logs from the week.",
  },
  {
    src: "/screens/weekly.jpeg",
    alt: "Weekly summary with a log score and fluids, urine, weight, and medication trends.",
  },
  {
    src: "/screens/family.jpeg",
    alt: "Family screen for sharing a read-only snapshot with someone you trust.",
  },
] as const;

export function Bento() {
  return (
    <section className="py-12 sm:py-16" aria-labelledby="screens-title">
      <div className="px-5 text-center sm:px-6">
        <h2
          id="screens-title"
          className="font-display mx-auto max-w-[16ch] text-[1.7rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance sm:text-[2.15rem]"
        >
          The day, <span className="text-blue">screen by screen.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-snug text-pretty text-muted sm:text-[16.6px]">
          Fluids, doses, dialysis, and the visit ahead — the same screens you open on your phone.
        </p>
      </div>

      <ul className="mx-auto mt-8 grid w-full max-w-[1120px] grid-cols-1 gap-5 px-4 sm:mt-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8 sm:px-6 lg:mt-14 lg:grid-cols-4 lg:gap-x-6 lg:pb-12">
        {shots.map((shot, index) => (
          <li key={shot.src} className={index % 2 === 1 ? "min-w-0 lg:mt-12" : "min-w-0"}>
            <figure className="hover-card overflow-hidden rounded-[22px] bg-white shadow-[0_28px_50px_-32px_rgba(0,61,144,0.65)] ring-1 ring-[#d7e4f5] sm:rounded-[28px]">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={736}
                height={1600}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 46vw, 92vw"
                style={{ width: "100%", height: "auto" }}
              />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
