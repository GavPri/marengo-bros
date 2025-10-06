import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Fetch logo from public folder
  const logoData = await fetch(
    new URL("https://marengobros.com/mb-logo.png") // Replace with your actual domain
    // Or for local dev: new URL('http://localhost:3000/mb-logo.png')
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        {/* Logo */}
        <img
          // @ts-ignore
          src={logoData}
          alt="Marengo Bros Logo"
          width="160"
          height="160"
          style={{ marginBottom: "40px" }}
        />

        {/* Main heading */}
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "white",
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          Marengo Bros
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            color: "rgba(255, 255, 255, 0.95)",
            marginBottom: 30,
            maxWidth: "900px",
            lineHeight: 1.3,
            textAlign: "center",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          Custom Travel Itineraries & Content Writing
        </div>

        {/* Location badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "12px 32px",
            borderRadius: 50,
            fontSize: 28,
            color: "white",
            fontWeight: 600,
          }}
        >
          📍 California Travel Experts
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
