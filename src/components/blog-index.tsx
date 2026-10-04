"use client";

import { Calendar, Check, ListFilter, Rss, X } from "lucide-react";
import { Link } from "next-view-transitions";
import { useSearchParams } from "next/navigation";

import { ReadMore } from "@/components/search-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { PostMeta } from "@/lib/posts";
import { cn } from "@/lib/utils";

type Props = {
  posts: PostMeta[];
  tags: { name: string; count: number }[];
};

function setTag(tag: string | null) {
  const url = new URL(window.location.href);
  if (tag) url.searchParams.set("tag", tag);
  else url.searchParams.delete("tag");
  window.history.replaceState(null, "", url);
}

export function BlogIndex(props: Props) {
  const param = useSearchParams().get("tag");
  const active = props.tags.some((tag) => tag.name === param) ? param : null;
  return <BlogList {...props} active={active} />;
}

export function BlogList({ posts, tags, active }: Props & { active: string | null }) {
  const shown = active ? posts.filter((post) => post.tags.includes(active)) : posts;

  return (
    <>
      <div className="toolbar">
        <div className="filter">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cn("btn soft", active && "accent")}
                aria-label={active ? `Filtered by ${active}. Change filter` : "Filter by tag"}
              >
                <ListFilter size={14} /> {active ? `#${active}` : "Filter"}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="filter-menu">
              <DropdownMenuItem onSelect={() => setTag(null)}>
                <span>All posts</span>
                <span className="n">{posts.length}</span>
                <span className="check">{active ? null : <Check size={14} />}</span>
              </DropdownMenuItem>
              {tags.map((tag) => (
                <DropdownMenuItem key={tag.name} onSelect={() => setTag(tag.name)}>
                  <span>#{tag.name}</span>
                  <span className="n">{tag.count}</span>
                  <span className="check">
                    {active === tag.name ? <Check size={14} /> : null}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {active ? (
            <button
              type="button"
              className="filter-clear"
              onClick={() => setTag(null)}
              aria-label="Clear filter"
            >
              <X size={14} />
            </button>
          ) : null}
        </div>
        <a className="btn soft" href="/feed.xml">
          <Rss size={14} /> RSS
        </a>
      </div>
      {shown.map((post) => (
        <Link className="card" href={`/blog/${post.slug}`} key={post.slug}>
          <div>
            <h3>{post.title}</h3>
            <p className="dek">{post.description}</p>
            <div className="meta">
              <span className="date">
                <Calendar size={12} /> {post.dateLabel}
              </span>
              <span>{post.minutes} min</span>
              {post.tags.map((tag) => (
                <span className="tag" key={tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <ReadMore />
        </Link>
      ))}
    </>
  );
}
