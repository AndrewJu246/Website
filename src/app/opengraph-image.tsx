import { ImageResponse } from "next/og";

export const alt = "Andrew Ju — Math of Computation @ UCLA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-0.02em",
          }}
        >
          Andrew Ju
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#1955b5",
            marginTop: 16,
          }}
        >
          Mathematics of Computation @ UCLA
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#6b7280",
            marginTop: 32,
            display: "flex",
            gap: 16,
          }}
        >
          <span>Quantitative Finance</span>
          <span style={{ color: "#1955b5" }}>·</span>
          <span>Machine Learning</span>
          <span style={{ color: "#1955b5" }}>·</span>
          <span>Full-Stack Development</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
