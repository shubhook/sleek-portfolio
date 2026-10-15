import { ImageResponse } from "next/og";

import { getPost, getPosts } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Blog post preview";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f7f7f7",
          color: "#111111",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#6b75f0" }}>
          {post ? post.tags.map((tag) => `#${tag}`).join("  ") : "Blog"}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1 }}>
            {post?.title ?? SITE.name}
          </div>
          {post ? (
            <div style={{ fontSize: 30, lineHeight: 1.4, color: "#737376" }}>
              {post.description}
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#737376",
          }}
        >
          <span>{SITE.name}</span>
          <span>
            {post ? `${post.dateLabel} · ${post.minutes} min read` : ""}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
