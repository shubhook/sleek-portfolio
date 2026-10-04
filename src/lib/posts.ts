import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { z } from "zod";

const DIR = path.join(process.cwd(), "content/blog");

const frontmatterSchema = z.object({
  title: z.string().min(1),
  date: z.coerce.date(),
  description: z.string().min(1),
  tags: z.array(z.string().trim().toLowerCase().min(1)).default([]),
});

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  dateLabel: string;
  minutes: number;
};

export type Post = PostMeta & { content: string };

function read(file: string): Post {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const meta = frontmatterSchema.parse(data);
  const words = content.trim().split(/\s+/).length;
  return {
    slug,
    title: meta.title,
    description: meta.description,
    tags: [...new Set(meta.tags)],
    date: meta.date.toISOString().slice(0, 10),
    dateLabel: meta.date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }),
    minutes: Math.max(1, Math.round(words / 220)),
    content,
  };
}

export function getPosts(): PostMeta[] {
  return fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const post: Partial<Post> = read(file);
      delete post.content;
      return post as PostMeta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getTags(posts: PostMeta[]) {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name, count]) => ({ name, count }));
}

export function getPost(slug: string): Post | undefined {
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(DIR, file))) return undefined;
  return read(file);
}

export function getNextPost(slug: string): PostMeta | undefined {
  const posts = getPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index < 0) return undefined;
  return posts[index + 1];
}
