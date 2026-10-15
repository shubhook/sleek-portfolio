import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE.name;

export default async function Image() {
  const avatar = await readFile(join(process.cwd(), "public/avatar.jpg"));
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 48,
          padding: 96,
          background: "#f7f7f7",
          color: "#111111",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatarSrc} width={180} height={180} style={{ borderRadius: 90 }} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -1 }}>{SITE.name}</div>
          <div style={{ fontSize: 36, color: "#737376" }}>I write software.</div>
        </div>
      </div>
    ),
    size,
  );
}
