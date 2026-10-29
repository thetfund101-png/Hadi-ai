import { createShareImage, shareSize } from "@/lib/share-card";

export const alt = "HADI AI — Your Daily Care, Made Simple. On iPhone and Android.";
export const size = shareSize;
export const contentType = "image/png";

export default function Image() {
  return createShareImage();
}
