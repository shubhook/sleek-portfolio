import { POSTS } from "@/lib/content";
import { SITE } from "@/lib/site";

export async function GET() {
  const items = POSTS.map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://${SITE.domain}/blog/${post.slug}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.dek)}</description>
    </item>`,
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Shubham Khakha</title>
    <link>https://${SITE.domain}</link>
    <description>Notes on building.</description>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
