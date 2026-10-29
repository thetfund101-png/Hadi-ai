import { AppScreen, Phone } from "@/components/phones";
import type { ScreenId } from "@/lib/site";

const cards: { id: ScreenId; title: string; body: string }[] = [
  {
    id: "home",
    title: "Stay on target.",
    body: "Fluid intake sits next to the day’s goal, with the visit that’s coming up.",
  },
  {
    id: "meds",
    title: "Stay on the dose.",
    body: "Each medication is marked taken or skipped. The list stays on the phone.",
  },
  {
    id: "clinic",
    title: "Walk in prepared.",
    body: "Clinic prep packs the week for you, your doctor, or your dietitian.",
  },
];

export function Bento() {
  return (
    <section className="px-5 py-10 sm:px-6 sm:py-16" aria-label="What the app shows">
      <ul className="mx-auto grid max-w-[980px] gap-4 sm:gap-[18px] md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <li key={card.id} className="hover-card flex flex-col rounded-3xl border border-line bg-white px-4 pt-6 pb-6 sm:rounded-[28px] sm:px-5 sm:pt-8 sm:pb-8">
            <Phone>
              <AppScreen id={card.id} />
            </Phone>
            <h3 className="font-display mt-6 text-[1.45rem] leading-tight font-extrabold tracking-[-0.03em] text-balance sm:text-[1.65rem]">
              {card.title}
            </h3>
            <p className="mt-2 text-[15px] leading-snug text-pretty text-muted">{card.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
