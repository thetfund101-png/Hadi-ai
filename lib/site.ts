export const site = {
  name: "HADI",
  product: "HADI AI",
  supportEmail: "support@hadi.ai",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hadi.ai",
  description:
    "HADI AI is the daily care companion for iPhone and Android. Track fluids, medications, dialysis days, and clinic prep in one place.",
};

export const stores = {
  apple: "https://apps.apple.com/search?term=HADI%20AI",
  google: "https://play.google.com/store/search?q=HADI%20AI&c=apps",
};

export type ScreenId = "welcome" | "home" | "meds" | "clinic";
