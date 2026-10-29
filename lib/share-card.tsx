import { ImageResponse } from "next/og";

export const shareSize = { width: 1200, height: 630 };

export function createShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#003D90",
          color: "#F7F8FA",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#3294FF",
              color: "#F7F8FA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            H
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 800, letterSpacing: -1 }}>HADI</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: -2.5,
              lineHeight: 0.95,
              maxWidth: 920,
            }}
          >
            Your Daily Care, Made Simple.
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#D6E8FF" }}>
            iPhone and Android
          </div>
        </div>
      </div>
    ),
    shareSize,
  );
}
