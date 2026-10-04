"use client";

import { Calendar, Rss } from "lucide-react";
import { Link } from "next-view-transitions";
import * as React from "react";

import { ReadMore } from "@/components/search-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { POSTS, type PostTag } from "@/lib/content";
import { blogFilterSchema, type BlogFilter } from "@/lib/schemas";

const FILTERS: { value: BlogFilter; label: string; tag?: PostTag }[] = [
  { value: "latest", label: "Latest" },
  { value: "building", label: "Building", tag: "building" },
  { value: "agents", label: "Agents", tag: "agents" },
  { value: "notes", label: "Notes", tag: "notes" },
];

function count(tag?: PostTag) {
  if (!tag) return POSTS.length;
  return POSTS.filter((post) => post.tags.includes(tag)).length;
}

function filtered(value: BlogFilter) {
  if (value === "latest") return POSTS;
  return POSTS.filter((post) => post.tags.includes(value));
}

export function BlogIndex() {
  const [filter, setFilter] = React.useState<BlogFilter>("latest");
  const posts = filtered(filter);

  return (
    <>
      <div className="toolbar">
        <Tabs
          value={filter}
          onValueChange={(value) => {
            const parsed = blogFilterSchema.safeParse(value);
            if (parsed.success) setFilter(parsed.data);
          }}
        >
          <TabsList>
            {FILTERS.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label} <span className="n">{count(item.tag)}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {FILTERS.map((item) => (
            <TabsContent key={item.value} value={item.value} className="hidden" />
          ))}
        </Tabs>
        <a className="btn soft" href="/feed.xml">
          <Rss size={14} /> RSS
        </a>
      </div>
      {posts.map((post) => (
        <Link className="card" href={`/blog/${post.slug}`} key={post.slug}>
          <div>
            <h3>{post.title}</h3>
            <p className="dek">{post.dek}</p>
            <div className="meta">
              {post.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
              <span className="date">
                <Calendar size={12} /> {post.dateLabel}
              </span>
            </div>
          </div>
          <ReadMore />
        </Link>
      ))}
    </>
  );
}
